import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsSlice'
import productReducer from './productSlice'
import hitsReducer from './hitsSlice'
import categoriesReducer from './categorySlice'
import cartReducer from './cartSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
    hits: hitsReducer,
    categories: categoriesReducer,
    cart: cartReducer
  },
})