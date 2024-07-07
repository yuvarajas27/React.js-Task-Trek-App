import React, { useState } from 'react'
import "./TaskForm.css"
import Tag from "./Tag"

const TaskForm = ({setTask}) => {
    console.log("Test")
    const [taskData,setTaskData]=useState({
        task:"",
        status:"toDo",
        description:"",
        tags:[]
    })

    const handleChange=(e)=>{
        const {name,value}=e.target
        //console.log(e.target.value)
        setTaskData(prev=>{
            return {
                ...prev,
                [name]:value
            }
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        setTask(prev=>[...prev,taskData])
        setTaskData({
            task:"",
            status:"toDo",
            description:"",
            tags:[]
        })
        //console.log(taskData)
    }

    const handleTagChange =(tagName)=>{
        if(taskData.tags.find(item=>item===tagName))
        {
            const filterTags=taskData.tags.filter(item=>item !=tagName)
            setTaskData(prev=>{
                return {
                    ...prev,
                    tags:filterTags
                }
            })
        }
        else{
            setTaskData(prev=>{
                return {
                    ...prev,
                    tags:[...prev.tags,tagName]
                }
            })
        }
    }

    const checkTag=(tag)=>{
        const selected=taskData.tags.find(item=>item===tag)

        return selected


    }
    
    return (
        <header className="app_header">
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" value={taskData.task} className="task_input" placeholder="Enter your task" onChange={handleChange}/>
                <textarea name="description" value={taskData.description} type="text" className="task_description" placeholder="Enter your task description" onChange={handleChange}></textarea>
                <div className="task_form_bottom_line">
                    <div>
                        <Tag tagName="HTML" onTagChange={handleTagChange} selected={checkTag("HTML")}/>
                        <Tag tagName="CSS" onTagChange={handleTagChange} selected={checkTag("CSS")}/>
                        <Tag tagName="JavaScript" onTagChange={handleTagChange} selected={checkTag("JavaScript")}/> 
                        <Tag tagName="React" onTagChange={handleTagChange} selected={checkTag("React")}/>
                    </div>

                    <div>
                        <select name="status" value={taskData.status} className="task_status" onChange={handleChange}>
                            <option value="toDo">ToDo</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                        </select>

                        <button type="submit" className="task_submit">
                            + Add Task
                        </button>
                    </div>
                </div>              
            </form>
        </header>  
  )
}
export default TaskForm
