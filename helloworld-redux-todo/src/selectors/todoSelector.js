import { createSelector } from "reselect";
import React from 'react';

export const stateChecked = state => state.get("checked");
export const stateItems = state => state.get("todoItems");
export const stateOrder = state => state.get("order");
export const stateItemsAsList = createSelector([stateItems], x => x.toList());

export const stateItemsOrdered = createSelector([stateItems, stateOrder], (items, order) =>{
  return items.sort((a, b) => 
    order > 0 ? a.get('name').localeCompare(b.get('name'))
    : b.get('name').localeCompare(a.get('name')));
  
});
export const computeDropoffs = createSelector([stateItems], getStateNames =>
  getStateNames.reduce((accum, item) => {
    if (item.get("name").includes("dropoff")) {
      item.get('name').split(' ')[0];
    }
    return accum;
  }, 0)
);

export const stateItemsWithChecked = createSelector(
  [stateItemsOrdered, stateChecked],
  (items, checked) =>
    items.map(i => i.set("checked", checked.get(i.get("id").toString())))
);

