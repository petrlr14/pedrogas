import styled, { keyframes } from "styled-components"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  } 
`

export const Loader = styled.div`
  width: 20px;
  height: 20px;
  border: 5px solid var(--loader);
  border-top: 5px solid var(--loader-hype);
  border-radius: 50px;
  animation: ${rotate} 1s linear infinite;
`
