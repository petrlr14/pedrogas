import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { rhythm, scale } from "../utils/typography"
import { Toggle } from "./toggle"
import UIFX from "uifx"
import sound from "./../sounds/click.wav"
import { SoundOnOff } from "./soundOnOff"

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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Layout = ({ location, title, children }) => {
  const [theme, setTheme] = useState(null)
  const [isSoundOn, setSound] = useState(true)

  useEffect(() => {
    setSound(localStorage.getItem("sound") ? true : false)
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              height: "4em",
              padding: `0 ${rhythm(3 / 4)}`,
            }}
          >
            <SoundOnOff
              onClick={() => {
                setSound(value => {
                  localStorage.setItem("sound", !value)
                  return !value
                })
              }}
              className={`fas ${isSoundOn ? "fa-volume-up" : "fa-volume-mute"}`}
            />
            <Toggle
              checked={theme === "dark"}
              onChange={({ target }) => {
                isSoundOn && clickSound.setVolume(0.1).play()
                window.__setPreferedTheme(target.checked ? "dark" : "light")
              }}
            />
          </div>
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
