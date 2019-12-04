import React from 'react'
import './TasksContainer.css'
import Task from '../task/Task'
import {connect} from 'react-redux'

const mapStateToProps=state=>{
    return {TasksList:state.tasks};
}
const ConnectedTasksContainer=({TasksList})=> (

    <div className="tasks-container">
        {TasksList.map(el=> 
            <Task key={el.id} taskObject={el}/>
        )}
    </div>
);
const TasksContainer = connect(mapStateToProps)(ConnectedTasksContainer);
// const TasksContainer = connect(null,mapDispatchToProps)(ConnectedTasksContainer);

export default TasksContainer;

