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
      const identifier = product.name || product.id;
      const existingItem = state.items.find(
        (item) => item.name === identifier || item.id === identifier
      );

      // Normalize numeric cost and display cost
      const rawCost = product.cost !== undefined ? product.cost : product.price;
      const numericPrice =
        typeof rawCost === 'number'
          ? rawCost
          : parseFloat(String(rawCost || 0).replace(/[^0-9.]/g, '')) || 0;
      const formattedCost =
        typeof rawCost === 'string' && rawCost.startsWith('$')
          ? rawCost
          : `$${numericPrice.toFixed(0)}`;

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id: product.id || product.name,
          name: product.name,
          cost: formattedCost,
          price: numericPrice,
          image: product.image,
          category: product.category || 'Plants',
          description: product.description || '',
          quantity: 1,
        });
      }
    },
    removeItem: (state, action) => {
      const payload = action.payload;
      const targetIdentifier =
        typeof payload === 'object' && payload !== null
          ? payload.name || payload.id
          : payload;

      state.items = state.items.filter(
        (item) => item.name !== targetIdentifier && item.id !== targetIdentifier
      );
    },
    updateQuantity: (state, action) => {
      const { name, id, quantity } = action.payload || {};
      const targetIdentifier = name || id;
      const parsedQuantity = parseInt(quantity, 10);

      // If invalid or zero or negative quantity, remove item
      if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
        state.items = state.items.filter(
          (item) => item.name !== targetIdentifier && item.id !== targetIdentifier
        );
        return;
      }

      const existingItem = state.items.find(
        (item) => item.name === targetIdentifier || item.id === targetIdentifier
      );
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
  state.cart.items.reduce((total, item) => total + (item.quantity || 0), 0);
export const selectTotalAmount = (state) =>
  state.cart.items.reduce((total, item) => {
    const unitPrice =
      typeof item.price === 'number'
        ? item.price
        : parseFloat(String(item.cost || 0).replace(/[^0-9.]/g, '')) || 0;
    return total + unitPrice * (item.quantity || 0);
  }, 0);

// Redux Store configuration
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default cartSlice.reducer;
