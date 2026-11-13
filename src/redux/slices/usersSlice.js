import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';


const fetchUser = createAsyncThunk("user/fetchUser", async (userId) => {
  const response = await api.get(`/users/${userId}`);
  return response.data
});


const createUser = createAsyncThunk ("user/createUser", async (user) => {
  const response = await api.post("/users", {
    email: user.email,
    name: user.name,
    password: user.password
  });
  return response.data;
})




const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: {
      email: "",
      name: "",
    },
    status: "",
    error: null
  },
  reducers: {
    clearUser: (state) => {
      state.currentUser = {email: "", name: ""};
    }
  },

  extraReducers: (builder) => {
    builder
    .addCase(fetchUser.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchUser.fullfilled, (state, action) => {
      state.status = "succeeded";
      state.currentUser = action.payload;
    })
    .addCase(fetchUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    })
    .addCase(createUser.pending, (state) => {
      state.status = "loading";
    })    
    .addCase(createUser.fullfilled, (state, action) => {
      state.status = "succeeded";
      state.currentUser = action.payload;
    })
    .addCase(createUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    })
  } 
});

export const { clearUser } = userSlice.actions;

export default userSlice.reducer;