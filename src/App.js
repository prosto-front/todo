import { useState } from "react"
import "./App.css"
import { Todo } from "./Components/Todo"

// {cars.map((el) => (
//   <Card name={el.name} price={el.price} />
// ))}

// const cars = [
//   { name: "mers", price: 3000 },
//   { name: "opel", price: 4400 },
//   { name: "lada", price: 5000 },
//   { name: "bmw", price: 6600 },
// ]

// const [number, setNumber] = useState(1)

const App = () => {
  const [inputValue, setInputValue] = useState("")
  const [editedValue, setEditedValue] = useState("")
  const [editedId, setEditedId] = useState(null)

  const [todoList, setTodo] = useState([
    { id: 1, name: "купить молоко", checked: false },
    { id: 2, name: "купитьь хлеб", checked: false },
    { id: 3, name: "купить масло", checked: false },
  ])

  const addHandler = () => {
    if (inputValue) {
      setTodo([
        ...todoList,
        { id: Math.random(), name: inputValue, checked: false },
      ])
      setInputValue("")
    }
  }

  const deleteHandler = (id) => {
    const newArr = todoList.filter((el) => el.id !== id)

    setTodo(newArr)
  }

  const inputHandler = (e) => {
    setInputValue(e.target.value)
  }

  const checkHandler = (id) => {
    const newArr = todoList.map((el) => {
      if (el.id === id) {
        const copyObj = { ...el }
        copyObj.checked = !copyObj.checked
        return copyObj
      }
      return el
    })

    setTodo(newArr)
  }

  const editHandler = (id, name) => {
    setEditedId(id)
    setEditedValue(name)
  }

  const changeName = (id) => {
    const newArr = todoList.map((el) => {
      if (el.id === id) {
        const copyObj = { ...el }
        copyObj.name = editedValue
        return copyObj
      }
      return el
    })

    setTodo(newArr)
    setEditedId(null)
  }

  return (
    <div className="App">
      <div>
        <input value={inputValue} onChange={(e) => inputHandler(e)} />
        <button onClick={addHandler}>добавить</button>
      </div>
      {todoList.map((i) => (
        <Todo
          key={i.id}
          id={i.id}
          name={i.name}
          editedId={editedId}
          editedValue={editedValue}
          setEditedValue={setEditedValue}
          changeName={changeName}
          checked={i.checked}
          checkHandler={checkHandler}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
        />
      ))}
    </div>
  )
}

export default App
