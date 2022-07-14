import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const reducer = rootReducer;

export const store = configureStore({   
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger).concat(thunk)
});

