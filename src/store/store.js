import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsSlice'
import hitsReducer from './hitsSlice'
import categoriesReducer from './categorySlice'


export const store = configureStore({
  reducer: {
    products: productsReducer,
    hits: hitsReducer,
    categories: categoriesReducer
  },
})