import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCategories } from "../api/GetCategories";

export const fetchCategories = createAsyncThunk('todos/fetchCategories', async() => {
    const response = await getCategories();
    return response.map((category)=>({
        ...category,
        color: category.color || '#CCCCCC'
    }));
});
const initialState = [
    { id: 100, name: '식습관', color: '#FFA7A7' },
    { id: 101, name: 'AI 생성!', color: '#7DB1FF' },
    { id: 102, name: '강제 미션!', color: '#086BFF' },
    { id: 103, name: '업무', color: '#FFCD68' },
    { id: 104, name: '약속', color: '#6FFFCF' },
]
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