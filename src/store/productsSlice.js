import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ more = false }, { getState }) => {
    const state = await getState()
    // console.log(state)
    let offset = 0
    if (more) {
      offset = state.products.offset
    }
    const data = await fetch(`http://localhost:7070/api/items?categoryId=${state.products.category}&offset=${offset}&q=${state.products.stringSearch}`).then(responce => responce.json())
    //console.log(data)
    return data
  }
)

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    listProducts: [],
    isLoading: null,
    status: null,
    error: null,
    category: 0,
    offset: 0,
    stringSearch: '',
    noMore: false
  },
  reducers: {
    changeCategory: (state, action) => {
      state.category = action.payload
      state.noMore = false
    },
    changeStringSearch: (state, action) => {
      state.stringSearch = action.payload
    }
  },
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      //console.log(action)
      state.isLoading = true
      state.status = 'loading'
      state.error = null

    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = 'success'
      if (action.meta.arg.more) {
        action.payload.forEach(item => state.listProducts.push(item))
      } else {
        state.listProducts = action.payload
      }
      if (action.payload.length < 6) {
        state.noMore = true
      }else{
        state.noMore = false
      }
      //console.log(action)
      state.offset = state.listProducts.length
      state.isLoading = false
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = 'rejected'
      state.isLoading = false
    }
  }

})
export const { changeCategory, changeStringSearch } = productsSlice.actions

export default productsSlice.reducer