import { INCREMENT_COUNTER } from "../actions/constants";
export default function rootReducer(state, action){
    switch(action.type) { 
        case INCREMENT_COUNTER:
            return state.set('counter', state.get('counter') + 1);
        default:
            return state;
    }
}