import {  createStore } from '@reduxjs/toolkit';
import rootReducer from '../Redux/Reducer'

export const store = createStore(rootReducer)

export default store;

