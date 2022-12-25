import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Brands, Items } from "./types";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://62f64e81612c13062b4b535b.mockapi.io",
  }),
  endpoints: (builder) => ({
    getItems: builder.query<Items[], string>({
      query: () => "/product",
    }),
    getBrands: builder.query<Brands[], string>({
      query: () => "/brands",
    }),
  }),
});

export const { useGetItemsQuery, useGetBrandsQuery } = productApi;
