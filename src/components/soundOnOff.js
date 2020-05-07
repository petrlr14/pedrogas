import React from "react"
import styled from "styled-components"

const SoundStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  width: 1.7em;
  height: 1.7em;
`

export const SoundOnOff = props => {
  return (
    <SoundStyled>
      <i {...props} />
    </SoundStyled>
  )
}
