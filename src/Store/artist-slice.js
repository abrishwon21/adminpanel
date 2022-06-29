import { createSlice } from '@reduxjs/toolkit';

const artistSlice = createSlice({
    name:'artist',
    initialState: {
        artistList:[
                   {aName:'Teddy', aDesc:'Tedros is the best'},
              ],
        artistId: 0,
        isNewFormVisible: false,
   },
    reducers: {
        addArtist(state, action){
            const newArtist =  action.payload;
            state.artistList.push(newArtist);
        },
        toggler(state){
             state.isNewFormVisible=!state.isNewFormVisible;
        },
        editArtist(state, action){
             state.artistId = action.payload;
        }
    }
})

export const artistActions = artistSlice.actions;
export default artistSlice;