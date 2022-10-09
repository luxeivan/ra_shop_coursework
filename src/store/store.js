import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsSlice'
import productReducer from './productSlice'
import hitsReducer from './hitsSlice'
import categoriesReducer from './categorySlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
    hits: hitsReducer,
    categories: categoriesReducer
  },
})