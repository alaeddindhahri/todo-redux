import {EDIT_TASK} from './ActionTypes'

export const editTask=(id,newDescription)=>(
    {
        type: EDIT_TASK,
        id,
        newDescription
    }
)