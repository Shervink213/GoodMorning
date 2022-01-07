import React, { useState, useEffect } from 'react';
import {addTask, getTasks, updateTask, deleteTask} from "../services/taskServices";
import { Paper, TextField } from '@material-ui/core';
import { Checkbox, Button } from '@material-ui/core';
import "./styles.css";


const Tasks = () => {
    const [ tasks, setTasks ] = useState([]);
    const [ currentTask, setCurrentTask ] = useState("");

    useEffect(() => {
        async function fetchTasks() {
           try {
                const {data} = await getTasks();
                console.log(data);
                setTasks(data);
                console.log(tasks)
            } catch (error) {
                console.log(error);
            } 
        }
        fetchTasks();
    }, [])

    const handleChange = (event) => {
        setCurrentTask(event.target.value);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            const {data} = await addTask(currentTask);
            console.log(data);
            setTasks(tasks.concat(data));
            setCurrentTask("")
            console.log(tasks);
        } catch (error) {
            console.log(error);
        }

        
    }
    
    const handleUpdate = async(event) => {
        event.preventDefault();
        const newTask  = tasks.find(t => t.task === currentTask);
        const changedTask = {...newTask, completed: !newTask.completed }

        try {
            
            const {data} = await updateTask(changedTask);
            setTasks(tasks.map(t => 
                t._id !== changedTask._id
                    ? t : changedTask
            ));
        } catch (error) {
            console.log(error);
            setTasks(tasks.filter(t => t.task !== changedTask.task));
        }
    }

    const handleDelete = async(_id) => {
        try {
            const task = tasks.find(t => t._id === _id);
            const changedTask = {...tasks};
        
            const {data} = await deleteTask(_id);
            setTasks(tasks.map(t => t._id !== _id ? t : data));
        } catch (error) {
            console.log(error);
            setTasks(tasks.filter(t => t._id !== _id));
        }   

    }

    return (
        <div className="flexTask">
            <Paper elevation={3} className="containterTask">
                <div className="heading">TO-DO</div>
                <form
                    onSubmit={handleSubmit}
                    className="flexTask"
                    style={{ margin: "15px 0" }}
                >
                    <TextField
                        variant="outlined"
                        size="small"
                        style={{ width: "80%" }}
                        value={currentTask}
                        required={true}
                        onChange={handleChange}
                        placeholder="Add New TO-DO"
                    />
                    <Button
                        style={{ height: "40px" }}
                        color="primary"
                        variant="outlined"
                        type="submit"
                    >
                        Add task
                    </Button>
                </form>
                <div>
                    {tasks.map((task) => (
                        <Paper
                            key={task._id}
                            className="flexTask task_container"
                        >
                            <Checkbox
                                checked={task.completed}
                                onClick={() => handleUpdate(task._id)}
                                color="primary"
                            />
                            <div
                                className={
                                    task.completed
                                        ? "task line_through"
                                        : "task"
                                }
                            >
                                {task.task}
                            </div>
                            <Button
                                onClick={() => handleDelete(task._id)}
                                color="secondary"
                            >
                                delete
                            </Button>
                        </Paper>
                    ))}
                </div>
        </Paper>
    </div>

    )
}

export default Tasks