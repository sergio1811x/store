import {Items} from "../../types";


export const calcTotalPrice = (cartItems: Items[]) => {
    return cartItems.reduce((sum, obj) => obj.regular_price.value * obj.totalCount + sum, 0);
};

export const getCartFromLS = () => {
    const data = localStorage.getItem("cartItems");
    const items = data ? JSON.parse(data) : [];
    const totalPrice = calcTotalPrice(items);
    return {
        items,
        totalPrice,
    };
};

