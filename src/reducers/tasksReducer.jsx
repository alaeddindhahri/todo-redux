import {DELETE_TASK} from '../constants/ActionTypes'
import {TOGGLE_TASK} from '../constants/ActionTypes'
import {ADD_TASK} from '../constants/ActionTypes'
import {EDIT_TASK} from '../constants/ActionTypes'
import {getLastTaskKey} from '../actions/addTask'

const tasksReducer = (state=[],action) => {
    // console.log("action in reducer: "+action.type)
    switch(action.type){
        case DELETE_TASK:
            return state.filter(el=>el.id!==action.id);
        case TOGGLE_TASK:
            return state.map(el=>el.id===action.id?{...el,isDone:!el.isDone}:el);
        case ADD_TASK:
            return state.concat({id:getLastTaskKey(state)+1,isDone:false,description:action.taskDescription});
        case EDIT_TASK:
            return;
        default:return state;
    }
    // return state

}

export default tasksReducer