import React, { useState } from "react"
import styled from "styled-components"
import OrderOptions from "./../utils/OrderOptions"

const options = [
  { value: OrderOptions.ASC, name: "Nuevos" },
  { value: OrderOptions.DESC, name: "Viejo" },
]

const SelectWrapper = styled.div`
  position: relative;
  width: 250px;
  pointer-events: all;
  cursor: pointer;
`

const SelectHeader = styled.div`
  height: 2.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  border-bottom-right-radius: ${props => (props.isOpen ? "0px" : "3px")};
  border-bottom-left-radius: ${props => (props.isOpen ? "0px" : "3px")};
  border-top: 3px solid var(--hyper);
  border-left: 3px solid var(--hyper);
  border-right: 3px solid var(--hyper);
  border-bottom: ${props => (props.isOpen ? "" : "3px solid var(--hyper)")};
  h4,
  i {
    margin: 0;
    padding: 0 0.5em;
  }
`

const SelectList = styled.ul`
  width: 250px;
  position: absolute;
  display: ${props => (props.isOpen ? "block" : "none")};
  border-bottom: 3px solid var(--hyper);
  border-left: 3px solid var(--hyper);
  border-right: 3px solid var(--hyper);
  background-color: var(--bg);
  & > li {
    list-style: none;
    margin: 0;
    padding-left: 0.5em;
    &:hover {
      background-color: var(--bg-darker);
    }
  }
`

export const Select = ({ changeOrder }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(0)
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <SelectWrapper>
        <SelectHeader
          isOpen={isOpen}
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          <h4>{isOpen ? "Cambie orden" : options[selectedItem].name}</h4>
          <i className={`fas fa-caret-${isOpen ? "up" : "down"}`} />
        </SelectHeader>
        <SelectList isOpen={isOpen} role="listbox">
          {options.map(({ value, name }, index) => {
            return (
              <li
                role="option"
                onClick={() => {
                  changeOrder(value)
                  setIsOpen(false)
                  setSelectedItem(index)
                }}
                key={name}
              >
                {name}
              </li>
            )
          })}
        </SelectList>
      </SelectWrapper>
    </div>
  )
}
