import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';


export const fetchUser = createAsyncThunk("user/fetchUser", async (userId) => {
  const response = await api.get(`/users/${userId}/`);
  return response.data
});


export const createUser = createAsyncThunk ("user/createUser", async (user) => {
  const response = await api.post("/users/", {
    email: user.email,
    name: user.name,
    password: user.password
  });
  return response.data;
})

export const loginUser = createAsyncThunk( "user/loginUser", async ({ email, password }) => {
    const response = await api.post("/login/", { 
      email, 
      password 
    });
    return response.data;
  }
);



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
    .addCase(fetchUser.fulfilled, (state, action) => {
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
    .addCase(createUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.currentUser = action.payload;
    })
    .addCase(createUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    })
    .addCase(loginUser.pending, (state) => {
      state.status = "loading";
    })    
    .addCase(loginUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.currentUser = action.payload;
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    })
  }
});

export const { clearUser } = userSlice.actions;

export default userSlice.reducer;