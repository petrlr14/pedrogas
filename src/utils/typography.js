import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    a: {
      color: `var(--hyper)`,
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    blockquote: {
      color: "var(--text)",
      "border-left": "0.32813rem solid var(--hyper)",
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
