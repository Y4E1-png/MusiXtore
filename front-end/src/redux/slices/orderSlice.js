import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const createOrder = createAsyncThunk("order/createOrder", async ({order, items}) => {
  const response = await api.post("/orders/", order);
  return { 
    items: items,
    total: Number(response.data.total),
  };;
});


const orderSlice = createSlice({
  name:"order",
  initialState: {
    items:[],
    total: 0,
    status: "idle",
    error: null
  },
  reducers: {
    clearOrder: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(createOrder.pending, (state) => {
      state.status = "loading";
    })
    .addCase(createOrder.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = action.payload.items;
      state.total = action.payload.total;
    })
    .addCase(createOrder.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    })
  }
})


export const { clearOrder } = orderSlice.actions;
export default orderSlice.reducer