import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    searchCache:[]
}

export const searchSlice=createSlice({
    name:'search',
    initialState,
    reducers:{
        addData: (state,action)=>{
            state.searchCache.push(action.payload)
        },
        getData:(state)=>{
            return state;
        }
    }
})

export const {addData, getData} =searchSlice.actions;
export default searchSlice.reducer;