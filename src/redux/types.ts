export interface RegularPrice {
  currency: string;
  value: number;
}

export interface Items {
  type: string;
  id: number;
  sku: string;
  title: string;
  regular_price: RegularPrice;
  image: string;
  brand: number;
  totalCount: number;
  totalPriceItem: number;
  itemsIndex: number;
}

export interface Brands {
  id: number;
  title: string;
  sort: string;
  code: string;
}

export interface SortSliceState {
  brandId: number;
}

export interface CartSliceState {
  cartItems: Items[];
  totalPrice: number;
  AddBtn: any;
}
