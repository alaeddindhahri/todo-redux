import {createStore,combineReducers} from 'redux';
import tasksReducer from '../reducers/tasksReducer'
// import TasksContainer from '../components/tasksContainer/TasksContainer';



const initialState={
    tasks:[
        {id:1,isDone:false,description:"tasks description 1"},
        {id:2,isDone:false,description:"tasks description 2"},
        {id:3,isDone:false,description:"tasks description 3"},
    ]
};


const rootReducer = combineReducers({
    tasks: tasksReducer
})
// console.log(rootReducer)

export default createStore(rootReducer,initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// console.log(store.getState())