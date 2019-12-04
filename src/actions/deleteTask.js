import {DELETE_TASK} from '../constants/ActionTypes'

export const deleteTask=id=>(
    {
        type: DELETE_TASK,
        id
    }
)