import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const fetchHits = createAsyncThunk(
  'hits/fetchHits',
  async () => {
    const data = await fetch('http://localhost:7070/api/top-sales').then(responce => responce.json())
    return data
  }
)

export const hitsSlice = createSlice({
  name: 'hits',
  initialState: {
    listHits: [],
    isLoading: null,
    status: null,
    error: null
  },
  reducers: {
  },
    extraReducers: {
      [fetchHits.pending]: (state, action) => {
        state.isLoading = true
        state.status = 'loading'
        state.error = null
        
      },
      [fetchHits.fulfilled]: (state, action) => {
        state.status = 'success'
        state.listHits = action.payload
        state.isLoading = false
      },
      [fetchHits.rejected]: (state, action) => { 
        state.status = 'rejected'
      }
    }
  
})

// Action creators are generated for each case reducer function

export default hitsSlice.reducer