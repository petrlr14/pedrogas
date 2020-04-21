import React, { useState } from "react"

import "./toogle.css"

export const Toggle = props => {
  return (
    <div>
      <label className="switch">
        <input type="checkbox" {...props} />
        <span className="slider round"></span>
      </label>
    </div>
  )
}
