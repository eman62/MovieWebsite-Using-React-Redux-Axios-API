import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  count: 0,
  cart_items: [],
};

const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    increaseCounter: (state) => {
      state.count = state.count + 1;
    },
    decreaseCounter: (state) => {
      state.count = state.count - 1;
    },
    addToCart: (state, action) => {
      state.cart_items = [...state.cart_items, action.payload];
    },
    removeFromCart: (state, action) => {
      const itemToRemove = action.payload;
      state.cart_items = state.cart_items.filter((item) => item.id !== itemToRemove.id);
    },
  },
});

export const {
  increaseCounter,
  decreaseCounter,
  addToCart,
  removeFromCart
} = counterSlice.actions;

export default counterSlice.reducer;