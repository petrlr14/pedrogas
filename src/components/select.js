import React, { useState } from "react"
import styled from "styled-components"
import OrderOptions from "./../utils/OrderOptions"
import { Listbox, ListboxOption, ListboxArrow } from "@reach/listbox"
import "@reach/listbox/styles.css"
import VisuallyHidden from "@reach/visually-hidden"

const options = {
  newest: { value: OrderOptions.ASC, name: "Nuevos" },
  oldest: { value: OrderOptions.DESC, name: "Viejo" },
}

export const Select = ({ changeOrder }) => {
  const [selectedItem, setSelectedItem] = useState("newest")
  return (
    <>
      <VisuallyHidden>Selecciona orden de posts</VisuallyHidden>
      <Listbox
        value={selectedItem}
        onChange={value => {
          setSelectedItem(value)
          changeOrder(options[value].value)
        }}
        className="list"
        arrow={
          <ListboxArrow
            children={({ isExpanded }) => {
              return (
                <span>
                  <i className={`fas fa-caret-${isExpanded ? "up" : "down"}`} />
                </span>
              )
            }}
          />
        }
      >
        {Object.keys(options).map(id => {
          return (
            <ListboxOption key={id} value={`${id}`}>
              {options[id].name}
            </ListboxOption>
          )
        })}
      </Listbox>
    </>
  )
}
