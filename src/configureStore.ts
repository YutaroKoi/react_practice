import { applyMiddleware, createStore } from 'redux';
import { RouterState, routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';

import { State, rootReducer } from 'reducers';

const logger = createLogger();

export const history = createBrowserHistory();

export function configureStore(preloadedState?: State) {
  const middlewares = [routerMiddleware(history), logger];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const state = preloadedState === undefined ? {} : preloadedState;
  return createStore(rootReducer(history), state, middlewareEnhancer);
}
