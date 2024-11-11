import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todoSlice';
import categoriesReducer from './categoriesSlice';
import characterReducer from './characterSlice';

const store = configureStore({
    reducer: {
        todos: todosReducer,
        categories: categoriesReducer,
        charater: characterReducer,
    }
});

export default store;