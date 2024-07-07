import React, { useEffect, useLayoutEffect } from 'react'
import { useState } from 'react';
import "./App.css"
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";


const oldTasks=localStorage.getItem("tasks")

const App = () => {

  const [tasks,setTasks]=useState(JSON.parse(oldTasks) || [])

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))   
  },[tasks])


  const handleDelete=(taskIndex)=>{
    const newTasks=tasks.filter((task,index)=>index!==taskIndex)
    setTasks(newTasks)
  }

  return (
    <div className="app">
      <p class="to-do-app-title">TO DO APP</p>
      <TaskForm setTask={setTasks}/>
      <main className="app_main">
        <TaskColumn title="ToDo" icon={todoIcon} status="toDo" task={tasks} handleDelete={handleDelete}/>
        <TaskColumn title="Doing" icon={doingIcon} status={"doing"} task={tasks} handleDelete={handleDelete}  />
        <TaskColumn title="Done" icon={doneIcon} status={"done"} task={tasks} handleDelete={handleDelete}  />
      </main>

      
    </div>
  );
};

export default App


