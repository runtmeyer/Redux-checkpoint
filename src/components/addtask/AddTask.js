// AddTask.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../actions';
import './Addtask.css';

function AddTask() {
  const [taskDescription, setTaskDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskDescription.trim() !== '') {
      dispatch(addTask(taskDescription));
      setTaskDescription('');
    }
  };

  return (
    <div className='addTask'>
      <input
        type="text"
        placeholder="Enter task description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <br/>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default AddTask;
