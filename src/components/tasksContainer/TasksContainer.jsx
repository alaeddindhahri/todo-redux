import React from 'react'
import './TasksContainer.css'
import Task from '../task/Task'
import {connect} from 'react-redux'

const mapStateToProps=state=>{
    return {
        TasksList:state.tasks,
    };
}

const ConnectedTasksContainer=({TasksList})=> (
    <div>
        <div className="tasks-container">
            {TasksList.map(el=> 
                <Task key={el.id} taskObject={el}/>
            )}
        </div>
    </div>
);
const TasksContainer = connect(mapStateToProps)(ConnectedTasksContainer);

export default TasksContainer;

