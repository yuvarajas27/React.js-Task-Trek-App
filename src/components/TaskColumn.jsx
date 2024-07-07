import React from 'react'
import "./TaskColumn.css"
import TaskCard from "./TaskCard.jsx"

const TaskColumn = ({title,icon,status,task,handleDelete}) => {
  console.log(status)
  
  return (
    <section className="task_column">
        <h2 className="task_column_heading">
            <img className="task_column_icon" src={icon} alt="" /> {title}
        </h2>
      {task.map((task,index)=>{
        return task.status===status && <TaskCard key={index} title={task.task} tags={task.tags} handleDelete={handleDelete} index={index} description={task.description}/>
      })
      }
    </section>
    
  )
}

export default TaskColumn
