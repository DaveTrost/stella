import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { promiseMiddleware } from 'promise-middleware-redux';
import * as reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  combineReducers(reducers),
  composeEnhancers(
    applyMiddleware(promiseMiddleware)
  )
);
