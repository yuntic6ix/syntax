import React, { useState, useEffect } from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Checkbox from "@mui/material/Checkbox"
import DeleteIcon from "@mui/icons-material/Delete"
import IconButton from "@mui/material/IconButton"

export default function Todos() {
  const [todos, setTodos] = useState([])
  const [inputText, setInputText] = useState("")
  const [todoKey, setTodoKey] = useState(0)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => {
        const result = json.filter((item) => item.userId === 1)
        setTodos(result)
        setTodoKey(result.length + 1)
      })
  }, [])

  const render = todos.map((todo) => {
    return (
      <div key={todo.id}>
        <div>
          <span className="font-bold" onClick={() => modTodo(todo.id)}>
            #{todo.id} / {todo.title}
          </span>
          <Checkbox
            checked={todo.completed}
            onChange={() => modTodo(todo.id)}
          />

          <IconButton aria-label="delete" onClick={() => delTodo(todo.id)}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    )
  })

  const addTodo = (inputText) => {
    const addItem = [...todos, { id: todoKey, title: inputText }]
    setTodoKey(todoKey + 1)
    setTodos(addItem)
    setInputText("")
  }

  const delTodo = (id) => {
    const delItem = todos.filter((item) => {
      return item.id !== id
    })
    setTodos(delItem)
  }

  const modTodo = (id) => {
    const modItem = todos.map((item) => {
      return item.id === id ? { ...item, completed: !item.completed } : item
    })
    setTodos(modItem)
  }

  return (
    <div>
      <h1>Todos</h1>
      <div>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          type="text"
          placeholder="New todo"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        ></TextField>
        <Button variant="text" onClick={() => addTodo(inputText)}>
          SEND
        </Button>
      </div>
      <div>{render}</div>
    </div>
  )
}
