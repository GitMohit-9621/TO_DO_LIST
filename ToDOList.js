import React, { useState } from 'react';
import './ToDO.css';

function TODO() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className='cont'>
    <div className="app">
      <div className="container">
        <h1>To-Do List</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter a new task"
            value={newTask}
            onChange={handleInputChange}
          />
          <button onClick={handleAddTask}>Add</button>
        </div>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              <span>{task}</span>
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default TODO;