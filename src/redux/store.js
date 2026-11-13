
import { configureStore } from '@reduxjs/toolkit';
import libraryReducer from './slices/librarySlice';
import searchReducer from './slices/searchSlice';
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/usersSlice";
import orderReducer from "./slices/orderSlice";
import songReducer from "./slices/songsSlice";


const store = configureStore({
  reducer: {
    library: libraryReducer,
    search: searchReducer,
    cart: cartReducer,
    user: userReducer,
    order: orderReducer,
    songs: songReducer,
  },
  preloadedState: {
    library: cargarBiblioteca(),
  },
});



export default store;