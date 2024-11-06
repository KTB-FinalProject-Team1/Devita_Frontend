import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todoSlice';
import categoriesReducer from './categoriesSlice';

const store = configureStore({
    reducer: {
        todos: todosReducer,
        categories: categoriesReducer,
    }
});

export default store;