// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import "prismjs/themes/prism.css"
import "./src/styles/global.css"
import React from "react"
import { App } from "./src/App"

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>
}
