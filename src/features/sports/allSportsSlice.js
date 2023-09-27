import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { publicGet } from '../../utilities/apiCaller';


export const fetchSports = createAsyncThunk(
    'sports/fetchsports',
    async () => {
        const sports = await publicGet('/get/all/sports');
        return sports;
    }
);
export const sportsSlice = createSlice({
    name: 'sports',
    initialState:{
        sports: [],
        isLoading: false,
       
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSports.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchSports.fulfilled, (state, action) => {
                state.sports = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchSports.rejected, (state, action) => {
                state.isLoading = true
                state.sports = [];
              
            })
    }
});

export default sportsSlice.reducer;