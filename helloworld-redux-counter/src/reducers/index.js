import { INCREMENT_COUNTER } from "../actions/constants";
import { Map } from 'immutable';
export default function rootReducer(state = Map({counter: 0}), action){
    switch(action.type) { 
        case INCREMENT_COUNTER:
            debugger;
            return state.set('counter', state.get('counter') + 1);
        default:
            return state;
    }
}