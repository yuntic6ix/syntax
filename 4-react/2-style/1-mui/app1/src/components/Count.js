import React from "react"
import { useState } from "react"
import Button from "@mui/material/Button"

export default function Count() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        +
      </Button>
      <Button variant="contained" onClick={() => setCount(count - 1)}>
        -
      </Button>
      <div>Count: {count}</div>
    </>
  )
}
