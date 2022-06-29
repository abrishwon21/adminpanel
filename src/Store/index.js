import { configureStore } from '@reduxjs/toolkit';
import albumSlice from './album-slice';
import artistSlice from './artist-slice'
import uiSlice from './ui-slice'
const Store = configureStore({
    reducer:{
        artist:artistSlice.reducer,
        album: albumSlice.reducer,
        ui:uiSlice.reducer,
    }
})

export default Store;