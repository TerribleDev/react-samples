import { createSelector } from "reselect";

export const stateChecked = state => state.get("checked");
export const stateItems = state => state.get("todoItems");
export const stateItemsAsList = createSelector([stateItems], x => x.toList());
export const computeDropoffs = createSelector([stateItems], getStateNames =>
  getStateNames.reduce((accum, item) => {
    if (item.get("name").includes("dropoff")) {
      item.get('name').split(' ')[0];
    }
    return accum;
  }, 0)
);

export const stateItemsWithChecked = createSelector(
  [stateItems, stateChecked],
  (items, checked) =>
    items.map(i => i.set("checked", checked.get(i.get("id").toString())))
);
