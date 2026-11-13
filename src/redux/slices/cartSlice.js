import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem("cart");
    return serializedCart ? JSON.parse(serializedCart) : [];
  } catch (error) {
    console.error("Could not load cart", error)
    return [];
  }
};

const saveCartToLocalStorage = () => {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem("cart", serializedCart);
  } catch (error) {
    console.error("Could not load cart", error);
  }
};




const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCartFromLocalStorage()
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      saveCartToLocalStorage(state.items)
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      saveCartToLocalStorage(state.items)
    },
    clearCart: (state) => {
      state.items = [];
      saveCartToLocalStorage(state.items)
    },
  },
});


export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;