import './App.css';
import React from 'react';
import AddTask from './components/addtask/AddTask';
import ListTask from './components/taskList/ListTask';

function App() {
  return (
    <div className="App">
      <h1>ToDo App</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
