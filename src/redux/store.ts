import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./api";
import { setupListeners } from "@reduxjs/toolkit/query";
import sort from "./sort/slice";
import cart from "./cart/slice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    sort,
    cart,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
