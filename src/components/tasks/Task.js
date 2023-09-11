// Task.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, toggleTask } from '../../actions';
import './tasks.css';

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (editedDescription.trim() !== '') {
      dispatch(editTask(task.id, editedDescription));
      setIsEditing(false);
    }
  };

  return (
    <div className='task'>
      <div className='taskbox'>
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => dispatch(toggleTask(task.id))}
        />
        {isEditing ? (
          <div>
            <input
              type="text"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
            <button onClick={handleEdit}>Save</button>
          </div>
      ) : (
          <div className='task-desc'>
            <span>{task.description}</span>
            <button onClick={() => setIsEditing(true)}>Edit</button><br/>
          </div>
        )}
    </div>
    </div>
  );
}

export default Task;
