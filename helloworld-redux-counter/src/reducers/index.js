import { INCREMENT_COUNTER } from "../actions/constants";

export default function rootReducer(state = {counter: 0}, action){
    switch(action.type) { 
        case INCREMENT_COUNTER:
            debugger;
            return {counter: state.counter + 1};
        default:
            return state;
    }
}