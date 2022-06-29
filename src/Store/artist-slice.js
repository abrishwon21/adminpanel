import { createSlice } from '@reduxjs/toolkit';

const artistSlice = createSlice({
    name:'artist',
    initialState: {
        artistList:[
            {
                id:'',
                name:'',
                img:'',
                description:''
        }
        ],
        artistId: 0,
        isNewFormVisible: false,
   },
    reducers: {
        addArtist(state, action){
            const id =  action.payload.id;
            const name =  action.payload.name;
            const img =  action.payload.img;
            const description =  action.payload.description;
            
           
            for(let i = 0; i<action.payload.length; i++){
                state.artistList.push({id,name,img,description});
            }
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