import {TOGGLE_TASK} from './ActionTypes'

export const toggleTask=id=>(
    {
        type: TOGGLE_TASK,
        id
    }
)