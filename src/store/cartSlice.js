import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { redirect, useNavigate } from "react-router";

export const fetchCart = createAsyncThunk("cart/fetchCart", async (order) => {
  const data = await fetch("http://localhost:7070/api/order", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(order),
  }).then((responce) => responce.status);
  return data;
});

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    listCart: [],
    isSend: false,
    sendIsOk: false,
  },
  reducers: {
    addCart: (state, action) => {
      const index = state.listCart.findIndex((item) => item.id === action.payload.id);
      if (index > -1) {
        state.listCart[index].count += action.payload.count;
      } else {
        state.listCart.push(action.payload);
      }
      localStorage.listCart = JSON.stringify(state.listCart);
    },
    delCart: (state, action) => {
      state.listCart = state.listCart.filter((item) => item.id != action.payload);
      localStorage.listCart = JSON.stringify(state.listCart);
    },
    syncFromLocalStorage: (state, action) => {
      if (localStorage.listCart) {
        state.listCart = JSON.parse(localStorage.listCart);
      }
    },
    sendIsOkFalse: (state, action) => {
      state.sendIsOk = false;
    },
  },
  extraReducers: {
    [fetchCart.pending]: (state, action) => {
      state.isSend = true;
    },
    [fetchCart.fulfilled]: (state, action) => {
      if (action.payload === 204) {
        state.listCart = [];
        localStorage.listCart = JSON.stringify(state.listCart);
        state.sendIsOk = true;
      }
      state.isSend = false;
    },
    [fetchCart.rejected]: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { addCart, delCart, syncFromLocalStorage,sendIsOkFalse } = cartSlice.actions;

export default cartSlice.reducer;
