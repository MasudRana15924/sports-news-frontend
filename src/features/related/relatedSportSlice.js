import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRelatedSports } from './relatedSportApi';




const initialState = {
    relatedsports: [],
    isLoading: false,
    isError: false,
    error: ''
}
export const fetchRelatedsports = createAsyncThunk(
    'relatesports/fetchRelatedsports',
    async ({category,id}) => {
        const relatedsports = await getRelatedSports({category,id})
        return relatedsports
    }
);
const relatedsportsSlice = createSlice({
    name: 'relatedsports',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchRelatedsports.pending,(state)=>{
            state.isError=false;
          state.isLoading=true
        })
        .addCase(fetchRelatedsports.fulfilled,(state,action)=>{
          state.isLoading=false
          state.relatedsports=action.payload;
        })
        .addCase(fetchRelatedsports.rejected,(state,action)=>{
            state.isLoading=false
            state.relatedsports=[];
            state.isError=true;
            state.error=action.error?.message;
        })
    }
});

export default relatedsportsSlice.reducer;