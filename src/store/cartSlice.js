import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    listCart: [],
    sum: null
  },
  reducers: {
    addCart: (state, action) => {
      const index = state.listCart.findIndex(item => item.id === action.payload.id)
      if (index > -1) {
        state.listCart[index].count +=action.payload.count
      } else {
        state.listCart.push(action.payload)
      }
      //state.sum = state.listCart.reduce((sum, curr) => sum + curr.price, 0)
    },
    delCart: (state, action) => {

    }
  },
})

// Action creators are generated for each case reducer function
export const { addCart, delCart } = cartSlice.actions

export default cartSlice.reducer