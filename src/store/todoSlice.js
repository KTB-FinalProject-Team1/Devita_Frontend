import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTodo } from '../api/GetToDo';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async(viewType)=> {
    const response = await getTodo(viewType);
    return response;
});

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        setTodos: (state, action) => action.payload,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.fulfilled, (state, action) => action.payload)
    }
});

export const { setTodos } = todosSlice.actions;
export default todosSlice.reducer;