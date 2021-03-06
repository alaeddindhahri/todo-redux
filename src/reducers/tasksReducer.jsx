import {DELETE_TASK} from '../actions/ActionTypes'
import {TOGGLE_TASK} from '../actions/ActionTypes'
import {ADD_TASK} from '../actions/ActionTypes'
import {EDIT_TASK} from '../actions/ActionTypes'
import {getLastTaskKey} from '../actions/addTask'

const tasksReducer = (state=[],action) => {
    switch(action.type){
        case DELETE_TASK:
            return state.filter(el=>el.id!==action.id);
        case TOGGLE_TASK:
            return state.map(el=>el.id===action.id?{...el,isDone:!el.isDone}:el);
        case ADD_TASK:
            return state.concat({id:getLastTaskKey(state)+1,isDone:false,description:action.taskDescription});
        case EDIT_TASK:
            return state.map(el=>el.id===action.id?{...el,description:action.newDescription}:el);
        default:return state;
    }

}

export default tasksReducer