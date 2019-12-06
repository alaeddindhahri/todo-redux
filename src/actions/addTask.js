import {ADD_TASK} from './ActionTypes'

export const addTask=taskDescription=>(
    {
        type: ADD_TASK,
        taskDescription
    }
)

export const getLastTaskKey=state=>{
    return (
        state.length===0?1:state[state.length-1].id
    )
}