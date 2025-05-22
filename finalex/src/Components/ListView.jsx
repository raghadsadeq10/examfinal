import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


//const task = [];




            
           
const ListView = () => {


     const [taskinput, setTaskinput] = useState(""); 
    const [task, setTasks] = useState([]);



    const handleAddTask = (e) => {
        e.preventDefault();

    }
    return (
        <div>
            <h2>Tasks List</h2>
            <form  onSubmit={handleAddTask}>
                <label htmlFor="Tasks">Tasks</label>
                <input for="Tasks" type="text"/>

                 <button type="submit">إضافة</button>
            </form>
            <ul>
                {task.map((task) => (
                    <li >
                        <h3>{ListView.id}</h3>
                        <h3>{ListView.title}</h3>
                        <p>{ListView.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ListView;

