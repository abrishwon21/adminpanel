import { createSlice } from '@reduxjs/toolkit';

const trackSlice = createSlice({
    name:'artist',
    initialState: {
        trackList:[
         
        ],
        trackId: 0,
        isNewFormVisible: false,
   },
    reducers: {
        addTrack(state, action){
           state.trackList = action.payload;
        },
        toggler(state){
             state.isNewFormVisible=!state.isNewFormVisible;
        },
       
    }
})

export const trackActions = trackSlice.actions;
export default trackSlice;