import {TOGGLE_TASK} from '../constants/ActionTypes'

export const toggleTask=id=>(
    {
        type: TOGGLE_TASK,
        id
    }
)