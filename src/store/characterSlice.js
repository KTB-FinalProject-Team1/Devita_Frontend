// characterSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCharacterInfo } from "../api/GetCharacterInfo";

export const fetchCharacterInfo = createAsyncThunk(
    'character/fetchCharacterInfo',
    async (_, { rejectWithValue }) => {
        try {
            const response = await getCharacterInfo();
            console.log("Character Info Response:", response);  // 응답 확인용 로그
            return response;
        } catch (error) {
            console.error("Error fetching character info:", error.message);
            return rejectWithValue(error.message);
        }
    }
);

const characterSlice = createSlice({
    name: 'character',
    initialState: {
        data: null,
        status: 'idle',
        error: null
    },
    reducers: {
        clearCharacterInfo: (state) => {
            state.data = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacterInfo.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCharacterInfo.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;  // 응답 데이터를 data에 저장
            })
            .addCase(fetchCharacterInfo.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export const { clearCharacterInfo } = characterSlice.actions;
export default characterSlice.reducer;