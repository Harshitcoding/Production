// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Load cart items from local storage if available
const initialState = {
   items: JSON.parse(localStorage.getItem('cartItems')) || [] 
};

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
       add: (state, action) => {
           state.items.push(action.payload);
           localStorage.setItem('cartItems', JSON.stringify(state.items)); // Update local storage
       },
       remove: (state, action) => {
           state.items = state.items.filter(item => item.id !== action.payload);
           localStorage.setItem('cartItems', JSON.stringify(state.items)); // Update local storage
       },
   }
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
