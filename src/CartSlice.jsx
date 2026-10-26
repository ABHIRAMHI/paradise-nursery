import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id: product.id,
          name: product.name,
          price: Number(product.price),
          image: product.image,
          category: product.category || 'Plants',
          description: product.description || '',
          quantity: 1,
        });
      }
    },
    removeItem: (state, action) => {
      const id = typeof action.payload === 'object' && action.payload !== null 
        ? action.payload.id 
        : action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const parsedQuantity = parseInt(quantity, 10);

      // Prevent invalid quantities; if non-positive, remove item
      if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
        state.items = state.items.filter((item) => item.id !== id);
        return;
      }

      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity = parsedQuantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectTotalQuantity = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectTotalAmount = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

// Redux Store configuration
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default cartSlice.reducer;
