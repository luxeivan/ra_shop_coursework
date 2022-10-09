import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    listCart: []
  },
  reducers: {
    addCart: (state, action) => {
      const index = state.listCart.findIndex(item => item.id === action.payload.id)
      if (index > -1) {
        state.listCart[index].count += action.payload.count
      } else {
        state.listCart.push(action.payload)
      }
      localStorage.listCart = JSON.stringify(state.listCart)
    },
    delCart: (state, action) => {
      state.listCart = state.listCart.filter(item => item.id != action.payload)
      localStorage.listCart = JSON.stringify(state.listCart)
    },
    syncFromLocalStorage: (state, action) => {
      if (localStorage.listCart) {
        state.listCart = JSON.parse(localStorage.listCart)
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addCart, delCart, syncFromLocalStorage } = cartSlice.actions

export default cartSlice.reducer