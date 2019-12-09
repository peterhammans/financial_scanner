import { routerMiddleware } from 'connected-react-router/immutable';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { history } from './history';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  interface WindowWithExtensions extends Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: Function;
  }

  const composeEnhancers =
    (process.env.NODE_ENV === 'development' &&
      window &&
      (window as WindowWithExtensions).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, {}, enhancer);

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
