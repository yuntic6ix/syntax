import React from "react"
import { useState } from "react"
import Button from "@mui/material/Button"

export default function Count() {
  const [count, setCount] = useState(0)

  return (
    <>
      <span className="mr-1">
        <Button variant="contained" onClick={() => setCount(count + 1)}>
          +
        </Button>
      </span>
      <span>
        <Button variant="contained" onClick={() => setCount(count - 1)}>
          -
        </Button>
      </span>
      <div>Count: {count}</div>
    </>
  )
}
