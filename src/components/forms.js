import styled from "styled-components"

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: 1.2em;
  }
`

export const Label = styled.label`
  display: flex;
  flex-direction: column-reverse;
  width: ${props => props.width || "100%"};
`

export const Span = styled.span``

export const Input = styled.input`
  outline: none;
  background: var(--bg);
  border: 2px solid var(--hyper);
  padding: 0.4em;
  color: var(--text);
  border-radius: 2px;
  &:focus {
    caret-color: var(--hyper);
    & + ${Span} {
      color: var(--hyper);
    }
  }
`

export const TextArea = styled.textarea`
  outline: none;
  background: var(--bg);
  border: 2px solid var(--hyper);
  border-radius: 2px;
  color: var(--text);
  padding: 0.4em;
  &:focus {
    caret-color: var(--hyper);
    & + ${Span} {
      color: var(--hyper);
    }
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 4px solid var(--hyper);
  background-color: var(--bg);
  color: var(--text);
  cursor: pointer;
  width: ${props => props.width || "100px"};
  border-radius: 3px;
  &:hover {
    background-color: var(--hyper);
    color: var(--button-hover-color);
    font-weight: bold;
  }
  &:disabled {
    border-color: var(--button-disabled);
    color: var(--text-disabled);
    &:hover {
      background-color: var(--bg);
      color: var(--text-disabled);
      font-weight: normal;
      cursor: not-allowed;
    }
  }
`
