import React, { Component } from 'react'
import './EditTask.css'

export class EditTask extends Component {

    render() {
        return (
            <div className="modal"  tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit your task description</h5>
                    </div>
                    <div className="modal-body">
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Save changes</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditTask
