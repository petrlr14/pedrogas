import React from "react"

import "./toogle.css"

export const Toggle = ({ checked }) => {
  return (
    <div>
      <label className="switch">
        <input
          type="checkbox"
          onChange={({ target }) => {
            window.__setPreferedTheme(target.checked ? "dark" : "light")
          }}
          checked={window.__theme === "dark"}
        />
        <span className="slider round"></span>
      </label>
    </div>
  )
}
