import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTodo } from '../api/GetToDo';
import { deleteTodo } from '../api/DeleteTodo';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async(viewType)=> {
    const response = await getTodo(viewType);
    return response;
});
export const deleteTodoAsync = createAsyncThunk(
    'todos/deleteTodo',
    async (todoId, { rejectWithValue }) => {
        try {
            await deleteTodo(todoId); // API 호출
            return todoId; // 성공 시 삭제된 todoId 반환
        } catch (error) {
            return rejectWithValue(error.message); // 실패 시 에러 반환
        }
    }
);


const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        setTodos: (state, action) => action.payload,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.fulfilled, (state, action) => action.payload)
            .addCase(deleteTodoAsync.fulfilled, (state,action) => {
                return state.filter(todo => todo.todoId !== action.payload);
            });
    }
});

export const { setTodos } = todosSlice.actions;
export default todosSlice.reducer;