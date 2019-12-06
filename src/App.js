import React from 'react';
import './App.css';
import InputBar from './components/inputBar/InputBar';
import TasksContainer from './components/tasksContainer/TasksContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col todo-header">
          <p>Daily Todo Lists</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <InputBar/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TasksContainer/>
        </div>
      </div>
    </div>
  );
}

export default App;
