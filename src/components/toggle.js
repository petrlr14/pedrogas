import React from "react"
import "./toogle.css"
import styled from "styled-components"

const MoonSun = styled.span`
  &:before {
    width: ${props => (!props.checked ? "58%" : "58%")};
    height: ${props => (!props.checked ? "93%" : "93%")};
    top: 1px;
    left: ${props => (!props.checked ? "2px" : "-9px")};
    box-shadow: ${props =>
      props.checked
        ? "inset 0px 6px 1px 2px var(--moon)"
        : "1px 1px 9px 4px red"};
    border-radius: 50%;
    transform: rotateZ(-90deg);
  }
`

export const Toggle = props => {
  const { checked } = props
  return (
    <div>
      <label className="switch">
        <input type="checkbox" {...props} />
        <MoonSun checked={checked} className="slider round" />
      </label>
    </div>
  )
}
