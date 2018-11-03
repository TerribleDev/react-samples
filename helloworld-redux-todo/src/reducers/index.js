import { TOGGLE_ITEM } from "../actions/constants";
import { Map } from 'immutable';
export default function rootReducer(state, action){
    switch(action.type) { 
        case TOGGLE_ITEM:{
            let prevCheck = state.getIn(['checked', `${action.payload.id}`]);
            return state.setIn(['checked', `${action.payload.id}`], !prevCheck);
        }
        default:
            return state;
    }
}