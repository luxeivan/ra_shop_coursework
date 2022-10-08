import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        const data = await fetch('http://localhost:7070/api/categories').then(responce => responce.json())
        return data
    }
)

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        listCategories: [],
        activeCategory: 0,
        isLoading: null,
        status: null,
        error: null
    },
    reducers: {
        changeActiveCategory: (state, action) => {
            state.activeCategory = action.payload
        }
    },
    extraReducers: {
        [fetchCategories.pending]: (state, action) => {
            state.isLoading = true
            state.status = 'loading'
            state.error = null

        },
        [fetchCategories.fulfilled]: (state, action) => {
            state.status = 'success'
            state.listCategories = [{ id: 0, title: 'Все' }]
            action.payload.forEach(element => {
                state.listCategories.push(element)
            });
            // state.listCategories = action.payload
            state.isLoading = false
        },
        [fetchCategories.rejected]: (state, action) => {
            state.status = 'rejected'
        }
    }

})
export const { changeActiveCategory } = categoriesSlice.actions

export default categoriesSlice.reducer