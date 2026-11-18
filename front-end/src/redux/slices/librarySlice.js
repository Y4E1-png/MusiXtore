import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';


const fetchSong = createAsyncThunk("song/fetchSong", async () => {
  const response = await api.get("/song");
  return response.data
});



const librarySlice = createSlice({
  name: 'library',
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {
    addSong: (state, action) => {
      const cancionExiste = state.some(
        (cancion) => cancion.id === action.payload.id
      );

      if (!cancionExiste) {
        state.push(action.payload);
      }
    },

    removeSong: (state, action) => {
      return state.filter(
        (cancion) => cancion.id !== action.payload
      );
    }
  }
});

export const { addSong, removeSong } = librarySlice.actions;

export default librarySlice.reducer;