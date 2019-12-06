import {EDIT_TASK} from '../constants/ActionTypes'

export const editTask=(id,newDescription)=>(
    {
        type: EDIT_TASK,
        id,
        newDescription
    }
)