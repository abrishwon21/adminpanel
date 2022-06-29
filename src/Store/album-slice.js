import { createSlice } from '@reduxjs/toolkit';

const albumSlice = createSlice({
    name:'album',
    initialState: {
        albumList:[
                   {albumName:'', artistID:'', albumCover: '', albumDescription:''},
              ],
        albumId: 0,
        isNewFormVisible: false,
        isSubmitButtonVisible: false,
   },
    reducers: {
        addAlbum(state, action){
            const newAlbum =  action.payload;
            state.albumList.push(newAlbum);
        },
        toggler(state){
             state.isNewFormVisible=!state.isNewFormVisible;
        },
        editAlbum(state, action){
             state.albumId = action.payload;
        }
    }
})

export const albumActions = albumSlice.actions;
export default albumSlice;