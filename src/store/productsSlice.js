import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const data = await fetch('http://localhost:7070/api/items').then(responce => responce.json())
    return data
  }
)

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    listProducts: [],
    isLoading: null,
    status: null,
    error: null
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // addNewProducts: (state, action) => {
    //   let newProducts = []
    //   ajax('http://localhost:7070/api/items').subscribe(result => {
    //     console.log(result.response)
    //     result.response.forEach(item => state.listProducts.push(item))
    //   })
    //   //state.list = newProducts
    //   //newProducts.forEach(item => state.list.push(item))
    //   // state.list.push({ "id": 20, "category": 13, "title": "Кроссовки как у Pharrell Williams", "price": 12000, "images": ["https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/pharrell_williams_sneakers.jpg", "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/pharrell_williams_sneakers_2.jpg"] })
    // },
  },
    extraReducers: {
      [fetchProducts.pending]: (state, action) => {
        state.isLoading = true
        state.status = 'loading'
        state.error = null
      },
      [fetchProducts.fulfilled]: (state, action) => {
        state.status = 'success'
        state.listProducts = action.payload
      },
      [fetchProducts.rejected]: (state, action) => { }
    }
  
})

// Action creators are generated for each case reducer function
export const { increment, decrement, addNewProducts } = productsSlice.actions

export default productsSlice.reducer