import { CartSliceState, Items } from "../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  calcTotalPrice,
  getCartFromLS,
} from "./helper/getCartFromLocalStorage";

const { totalPrice, items } = getCartFromLS();

const initialState: CartSliceState = {
  totalPrice: totalPrice,
  cartItems: items,
  AddBtn: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Items>) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].totalCount += 1;
      } else {
        const tempItem = { ...action.payload, totalCount: 1 };
        state.cartItems.push(tempItem);
        const add = { id: action.payload.id, add: true };
        state.AddBtn.push(add);
      }
      state.totalPrice = calcTotalPrice(state.cartItems);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeCart(state, action: PayloadAction<Items>) {
      const nextCartItem = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = nextCartItem;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      state.totalPrice = calcTotalPrice(state.cartItems);
    },
    removeCartAll(state) {
      state.cartItems = [];
      state.totalPrice = 0;
      state.AddBtn = [];
    },
    minusItem(state, action: PayloadAction<Items>) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].totalCount > 1) {
        state.cartItems[itemIndex].totalCount -= 1;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      state.totalPrice = calcTotalPrice(state.cartItems);
    },
    totalPriceItem(state, action: PayloadAction<Items>) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[itemIndex].totalPriceItem =
        state.cartItems[itemIndex].regular_price.value *
        state.cartItems[itemIndex].totalCount;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const {
  addToCart,
  removeCart,
  removeCartAll,
  minusItem,
  totalPriceItem,
} = cartSlice.actions;

export default cartSlice.reducer;
