import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {}, // id -> { item, quantity }
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const id = item.card.info.id;

      if (state.items[id]) {
        state.items[id].quantity += 1;
      } else {
        state.items[id] = {
          item,
          quantity: 1,
        };
      }
    },

    removeItem: (state, action) => {
      const id = action.payload.card.info.id;

      if (state.items[id]) {
        if (state.items[id].quantity > 1) {
          state.items[id].quantity -= 1;
        } else {
          delete state.items[id];
        }
      }
    },

    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
