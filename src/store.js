import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from 'reducers';

const customLogger = (store) => (next) => (action) => {
  console.log('prev state', store.getState());
  console.log('action', action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
}

export default createStore(
  rootReducer,
  applyMiddleware(logger, customLogger)
);
