import { createStore } from "redux";
import { ADDTODO } from "./actionTypes";
let initialState = { todos: [] };
function store(state = initialState, action) {
    let newState = { ...state };
    switch (action.type) {
        case ADDTODO:
            // action.payload = {content: "", id: 90}; 
            newState.todos.push(action.payload);
            break;
        default:
            break;
    }
    console.log("newState : ", newState);
    return newState;
}
// let store = createStore(store);

// store.dispatch({type: ADDTODO, payload: {} });
// store.subscribe(() => {
    
// })

export default createStore(store);