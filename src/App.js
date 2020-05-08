import React, { useEffect, useState } from "react"
import Helmet from "react-helmet"
import { OrderContext } from "./context/contexts"
import OrderValues from "./utils/OrderOptions"
const { Provider } = OrderContext

export const App = ({ children }) => {
  const [value, setValue] = useState(OrderValues.DESC)

  useEffect(() => {
    const value = localStorage.getItem(OrderValues.ITEM_NAME)
    setValue(value ? value : OrderValues.DESC)
  }, [])

  const changeOrder = value => {
    setValue(value)
  }

  return (
    <>
      <Helmet>
        <script
          src="https://kit.fontawesome.com/248332ce05.js"
          crossorigin="anonymous"
        />
      </Helmet>
      <Provider
        value={{
          value,
          toggle: changeOrder,
        }}
      >
        {children}
      </Provider>
    </>
  )
}
