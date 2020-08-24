import {compose, applyMiddleware, createStore } from "redux"
import { createLogger } from 'redux-logger'
import thunk from "redux-thunk"

import reducers from '../reducers';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(
      applyMiddleware(thunk, createLogger())
  )
)

export default store;