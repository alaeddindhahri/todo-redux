import {EDIT_TASK} from '../constants/ActionTypes'

export const editTask=id=>(
    {
        type: EDIT_TASK,
        id
    }
)