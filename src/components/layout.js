import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { rhythm, scale } from "../utils/typography"
import { Toggle } from "./toggle"
import UIFX from "uifx"
import sound from "./../sounds/click.wav"

const clickSound = new UIFX(sound)

const socials = [
  { name: "twitter", href: "https://twitter.com/petrlr14", icon: "fa-twitter" },
  {
    name: "instagram",
    href: "https://twitter.com/petrlr14",
    icon: "fa-instagram",
  },
  { name: "github", href: "https://github.com/petrlr14", icon: "fa-github" },
]

const A = styled.a`
  text-decoration: none;
  box-shadow: none;
  i {
    margin: 0 0.5em;
    font-size: 1.3em;
    color: var(--headers);
  }
  i:nth-child(0) {
    margin: 0 0 0.5em;
  }
  i:nth-last-child() {
    margin: 0 0.5em 0;
  }
`

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Layout = ({ location, title, children }) => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => {
      setTheme(window.__theme)
    }
  }, [])

  const renderHeader = () => {
    const rootPath = `${__PATH_PREFIX__}/`
    if (location.pathname === rootPath) {
      return (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              color: `inherit`,
              textDecoration: `none`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      return (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              color: `inherit`,
              textDecoration: `none`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
  }

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(32),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Header>
        {renderHeader()}{" "}
        {theme !== null && (
          <Toggle
            checked={theme === "dark"}
            onChange={({ target }) => {
              clickSound.setVolume(0.1).play()
              window.__setPreferedTheme(target.checked ? "dark" : "light")
            }}
          />
        )}
      </Header>
      <main style={{ minHeight: "100vh" }}>{children}</main>
      <footer style={{ display: "flex", justifyContent: "center" }}>
        {socials.map(({ name, href, icon }) => {
          return (
            <A target="_blank" href={href} key={name}>
              <i className={`fab ${icon}`} />
            </A>
          )
        })}
      </footer>
    </div>
  )
}

export default Layout
