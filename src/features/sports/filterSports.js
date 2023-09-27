import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFilterSports } from './filterApi';

export const fetchFilterSports = createAsyncThunk(
    'sports/filterSportsSlice',
    async ({category}) => {
        const sports = await getFilterSports(category);
        return sports;
    }
);
export const filterSportsSlice = createSlice({
    name: 'filtersports',
    initialState:{
        filterSports: [],
        isLoading: false,
        isError: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilterSports.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchFilterSports.fulfilled, (state, action) => {
                state.filterSports = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchFilterSports.rejected, (state, action) => {
                state.isLoading = true
                state.filterSports = [];
                state.isError = true;
                state.error = action.payload.error?.message;
            })
    }
});

export default filterSportsSlice.reducer;