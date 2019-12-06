import {DELETE_TASK} from './ActionTypes'

export const deleteTask=id=>(
    {
        type: DELETE_TASK,
        id
    }
)