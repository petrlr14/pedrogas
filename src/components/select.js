import React, { useState, useContext } from "react"
import OrderOptions from "./../utils/OrderOptions"
import { Listbox, ListboxOption, ListboxArrow } from "@reach/listbox"
import "@reach/listbox/styles.css"
import VisuallyHidden from "@reach/visually-hidden"
import { OrderContext } from "./../context/contexts"

const options = {
  DESC: { value: OrderOptions.ASC, name: "Recientes" },
  ASC: { value: OrderOptions.DESC, name: "Antiguos" },
}

export const Select = ({ changeOrder }) => {
  const { value, toggle } = useContext(OrderContext)
  return (
    <>
      <VisuallyHidden>Selecciona orden de posts</VisuallyHidden>
      <Listbox
        value={value}
        onChange={value => {
          toggle(value)
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
