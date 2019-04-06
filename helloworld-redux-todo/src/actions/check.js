import { TOGGLE_ITEM, CHANGE_SORT, SHOW_CHANGE } from './constants';

export const toggleItem = (id) => ({type: TOGGLE_ITEM, payload: {id} });
export const changeSort = (newSort) => ({type: CHANGE_SORT, payload: { newSort }});
export const showX = (num) =>({ type: SHOW_CHANGE, payload: { num } })