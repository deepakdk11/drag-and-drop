import React, { useState } from "react"
import CreateTask from "./components/CreateTask"
import ListTask from "./components/ListTask"

function App() {

  const [tasks, setTasks] = useState([
    {
      id : 1,
      subject : "Today",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iusto quisquam iure illum sequi, unde nulla cupiditate, ullam id in tenetur cumque ipsam deleniti nemo vero harum. Accusamus, veniam ea."
    },{
      id : 2,
      subject : "Hello",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iusto quisquam iure illum sequi, unde nulla cupiditate, ullam id in tenetur cumque ipsam deleniti nemo vero harum. Accusamus, veniam ea."
    },{
      id : 3,
      subject : "World",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iusto quisquam iure illum sequi, unde nulla cupiditate, ullam id in tenetur cumque ipsam deleniti nemo vero harum. Accusamus, veniam ea."
    }
  ])
  
  const [newSubject, setNewSubject] = useState("")
  const [newContent, setNewContent] = useState("")

const addNotes = (addSubject, addContent) => {
  const id = tasks.length ? tasks[tasks.length - 1].id +1 : 1;
  const newTask = {
    id: id,
    subject: addSubject,
    content: addContent
  }
  const newTasks = [...tasks, newTask]
  setTasks(newTasks)
}

const handleClick = (e) => {
  e.preventDefault()
  if(!newSubject) return;
  addNotes(newSubject, newContent)
  setNewSubject("")
  setNewContent("")
}

  return (
    <div className="app">
      <CreateTask
        addNotes={addNotes}
        setTasks={setTasks}
        newSubject={newSubject}
        newContent={newContent}
        setNewContent={setNewContent}
        setNewSubject={setNewSubject}
        handleClick={handleClick}
      />
      <ListTask tasks={tasks} />
    </div>
  )
}

export default App
