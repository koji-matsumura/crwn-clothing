import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// we can add other middlewares
const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
