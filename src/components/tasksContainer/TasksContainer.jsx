import React from 'react'
import './TasksContainer.css'
import Task from '../task/Task'
import {connect} from 'react-redux'

const mapStateToProps=state=>{
    return {
        TasksList:state.tasks,
        // modalToggle: state.modalToggle
    };
}
// const modalTask=task=>{
    // console.log("called modalTask back: "+task.description)
    // let tmpTask=task
    // console.log(tmpTask)
//     return task
// }
// const openModal=(isModalOpen)=>{
//     // console.log("called openModal")
//     return isModalOpen
//     // console.log(isModalOpen)
// }

const ConnectedTasksContainer=({TasksList})=> (
    // console.log(modalToggle)
    <div>
        <div className="tasks-container">
            {TasksList.map(el=> 
                <Task key={el.id} taskObject={el}/>
            )}
        </div>
        {/* <TaskEditModal isOpen={modalToggle} idTask={modalTask}/> */}
    </div>
);
const TasksContainer = connect(mapStateToProps)(ConnectedTasksContainer);
// const TasksContainer = connect(null,mapDispatchToProps)(ConnectedTasksContainer);

export default TasksContainer;

