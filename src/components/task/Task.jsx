import React,{Component} from 'react'

import {deleteTask} from '../../actions/deleteTask'
import {toggleTask} from '../../actions/toggleTask'
import {editTask} from '../../actions/editTask'
import {connect} from 'react-redux'
import store from '../../store/Store'
import './Task.css'

const mapDispatchToProps=()=>{
    // console.log(dispatch)
    return{
        handleDelete
        //deleteTask:handleDelete//=>store.dispatch({type:DELETE_TASK,handleDelete})
    }
    
}


function handleDelete(idTask){
    store.dispatch(deleteTask(idTask))
}
function handleToggle(idTask){
    store.dispatch(toggleTask(idTask))
}

class ConnectedTask extends Component {
    state={
        newDescription:''
    }
    handleChange=(e)=>{
        this.setState({
        newDescription:e.target.value,
        })
    }
    handleSaveChange=()=>{
        store.dispatch(editTask(this.props.taskObject.id,this.state.newDescription))
        this.setState({
            newDescription:''
        })
    }
    render(){
        return (
            <div className="task-container">
                <input type="checkbox" className="form-check-input do-undo" onClick={()=>handleToggle(this.props.taskObject.id)}></input>
                <input className="task-description" defaultValue={this.props.taskObject.description} onBlur={this.handleSaveChange} onChange={this.handleChange} style={{textDecoration:this.props.taskObject.isDone?'line-through':'none'}}/>
                {/* <button type="button" className="btn btn-secondary btn-lg btn-edit">Edit</button> */}
                <button type="button" className="btn btn-danger btn-lg btn-delete" onClick={()=>handleDelete(this.props.taskObject.id)}>Delete</button>
            </div>
        )
    }
}


const Task=connect(null,mapDispatchToProps)(ConnectedTask);
export default Task;