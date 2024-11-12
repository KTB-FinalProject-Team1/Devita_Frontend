import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCategories } from "../api/GetCategories";

export const fetchCategories = createAsyncThunk('todos/fetchCategories', async() => {
    const response = await getCategories();
    return response.map((category)=>({
        ...category,
        color: category.color || '#CCCCCC'
    }));
});
const initialState = [];
const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories: (state, action) => action.payload,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            return action.payload.length ? action.payload : state;
        });
    },
});

export const {setCategories} = categoriesSlice.actions;
export default categoriesSlice.reducer;