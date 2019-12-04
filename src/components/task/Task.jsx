import React,{Component} from 'react'

import {deleteTask} from '../../actions/deleteTask'
import {toggleTask} from '../../actions/toggleTask'
// import {connect} from 'react-redux'
import store from '../../store/Store'
import './Task.css'

// const mapDispatchToProps=dispatch=>{
//     console.log(dispatch)
//     return{
//         // deleteTask:handleDelete=>store.dispatch({type:DELETE_TASK,handleDelete})
//     }
    
// }

function handleDelete(idTask){
    // deleteTask(idTask)
    store.dispatch(deleteTask(idTask))
    // console.log(idTask)
}
function handleToggle(idTask){
    store.dispatch(toggleTask(idTask))
}

// class ConnectedTask extends Component {
class Task extends Component {
    render(){
        return (
            <div className="task-container">
                <input type="checkbox" className="form-check-input do-undo" onClick={()=>handleToggle(this.props.taskObject.id)}></input>
                <p className="task-description" style={{textDecoration:this.props.taskObject.isDone?'line-through':'none'}}>{this.props.taskObject.description}</p>
                <button type="button" className="btn btn-secondary btn-lg btn-edit">Edit</button>
                <button type="button" className="btn btn-danger btn-lg btn-delete" onClick={()=>handleDelete(this.props.taskObject.id)}>Delete</button>
            </div>
        )
    }
}


// const Task=connect(null,mapDispatchToProps)(ConnectedTask);
export default Task;