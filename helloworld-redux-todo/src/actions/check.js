import { TOGGLE_ITEM } from './constants';

export const toggleItem = (id) => ({type: TOGGLE_ITEM, payload: {id} });