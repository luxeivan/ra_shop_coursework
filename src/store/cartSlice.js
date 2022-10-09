import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    listCart: [],
  },
  reducers: {
    addCart: (state, action) => {
      state.listCart.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementByAmount } = cartSlice.actions

export default cartSlice.reducer