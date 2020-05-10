import React, { useEffect, useState } from "react"
import getInstance from "./firebase"

export default function useFirebase() {
  const [instance, setInstance] = useState(null)
  useEffect(() => {
    setInstance(getInstance())
  }, [])
  return instance
}
