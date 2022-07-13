import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/root_reducer';

export const setupStore = configureStore({
    reducer: rootReducer
})

