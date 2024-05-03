import React from "react"
import AddTodo from "./components/AddTodo"
import Todo from "./components/Todo"

export default function App() {
  return (
    <>
      <div className="text-center mt-10 ">
         <h1 className="font-bold bg-blue-600 mx-20 py-5 text-2xl rounded-lg" >Todo List</h1>
    </div>
    <AddTodo />
    <Todo />
    </>
  )
}