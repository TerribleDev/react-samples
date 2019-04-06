import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import { Map, fromJS } from "immutable";
import sampleData from "./sampleData";
const enhancers = [];
const middleware = [];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer,
  fromJS({
    todoItems: sampleData.map(a => {
      let newItem = { ...a };
      newItem.checked = undefined;
      return newItem;
    }),
    checked: sampleData.reduce((accum, item)=>{
      accum[item.id] = item.checked;
      return accum;
    }, {}),
    order: 0,
    showX: 20
  }),
  composedEnhancers
);

export default store;
