import React, { Component } from 'react'
import {addTask} from '../../actions/addTask'
import store from '../../store/Store'
import './InputBar.css'

export class InputBar extends Component {
    state={
        tmpDescription:''
    }
    grabTask=e=>{
        this.setState({
            tmpDescription:e.target.value
        })
    }
    handleAdd=(e)=>{
        e.preventDefault();
        if(this.state.tmpDescription===''){
            return false
        }
        if(!this.state.tmpDescription.replace(/\s/g, '').length){
            return false
        }
        store.dispatch(addTask(this.state.tmpDescription))
        this.setState({
            tmpDescription:''
        })
    }
    render() {
        return (
            <div className="input-bar-container">
                <form onSubmit={(e)=>this.handleAdd(e)}>
                    <div className="form-group">
                        <input type="text" value={this.state.tmpDescription} className="form-control" placeholder="Enter task..." onChange={this.grabTask}/>
                        <button type="button" className="btn btn-success btn-lg" onClick={(e)=>this.handleAdd(e)}>+</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default InputBar
