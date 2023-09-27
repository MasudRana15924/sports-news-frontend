import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { publicGetSingle } from '../../utilities/apiCaller';


const initialState = {
    sport:{},
    isLoading: false,
    isError: false,
    error: ''
}
export const fetchsport = createAsyncThunk(
    'sport/fetchsport',
    async (id) => {
        const sport = await publicGetSingle(`/get/sports/${id}`);
        return sport
    }
);
export const sportSlice = createSlice({
    name: 'sport',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchsport.pending,(state)=>{
            state.isError=false;
           state.isLoading=true
        })
        .addCase(fetchsport.fulfilled,(state,action)=>{
          state.isLoading=false
          state.sport=action.payload;
        })
        .addCase(fetchsport.rejected,(state,action)=>{
            state.isLoading=false
            state.sport={};
            state.isError=true;
            state.error=action.error?.message;
        })
    }
});

export default sportSlice.reducer;