import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import { Map } from 'immutable';
import * as moment from 'moment';
const enhancers = []
const middleware = [
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  Map({birthday: moment().add('10', 'weeks'), name: 'Tommy', counter: 0}),
  composedEnhancers
)

export default store