import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProduct = createAsyncThunk(
    'products/fetchProduct',
    async (id) => {
        const data = await fetch(`http://localhost:7070/api/items/${id}`).then(responce => responce.json())
        return data
    }
)

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        currentProduct: {},
        isLoading: true,
    },
    reducers: {
    },
    extraReducers: {
        [fetchProduct.pending]: (state, action) => {
            state.isLoading = true
        },
        [fetchProduct.fulfilled]: (state, action) => {
            state.currentProduct = action.payload
            state.isLoading = false
        },
        [fetchProduct.rejected]: (state, action) => {
        }
    }

})
export const { changeCategory, changeStringSearch } = productSlice.actions

export default productSlice.reducer