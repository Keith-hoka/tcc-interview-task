import { Store, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { ApplicationState, rootReducer } from './reducer';
import rootSaga from './saga';

interface ConfigureStore {
  store: Store<ApplicationState>;
}

function configureStore(
  initialState: ApplicationState | undefined,
): ConfigureStore {
  const middlewares = [];

  if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middlewares.push(createDebugger());
  }

  // create the composing function for our middlewares
  const composeEnhancers = composeWithDevTools({});
  // create the redux-saga middleware
  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);

  // We'll create our store with the combined reducers/sagas, and the initial Redux state that
  // we'll be passing from our entry point.
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  // Don't forget to run the root saga, and return the store object.
  sagaMiddleware.run(rootSaga);
  return { store };
}

export default configureStore(undefined);
