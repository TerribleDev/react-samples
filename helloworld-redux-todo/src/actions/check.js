import { TOGGLE_ITEM, CHANGE_SORT } from './constants';

export const toggleItem = (id) => ({type: TOGGLE_ITEM, payload: {id} });
export const changeSort = (newSort) => ({type: CHANGE_SORT, payload: { newSort }});