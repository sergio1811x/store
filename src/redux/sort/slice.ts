import { SortSliceState } from "../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: SortSliceState = {
  brandId: 0,
};

export const sortBrandSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSort(state, action: PayloadAction<number>) {
      state.brandId = action.payload;
    },
  },
});

export const { setSort } = sortBrandSlice.actions;

export default sortBrandSlice.reducer;
