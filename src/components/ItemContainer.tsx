import React from "react";
import { useGetItemsQuery } from "../redux/api";
import { useDispatch, useSelector } from "react-redux";
import { sortSelector } from "../redux/sort/selector";
import { addToCart, removeCart } from "../redux/cart/slice";
import { Items } from "../redux/types";
import { cartSelector } from "../redux/cart/selector";
import { Button } from "react-bootstrap";

const ItemContainer = () => {
  const dispatch = useDispatch();
  const { data } = useGetItemsQuery("product");
  const { brandId } = useSelector(sortSelector);
  const { cartItems } = useSelector(cartSelector);

  const AddBtnId = cartItems.map((el: any) => el.id);

  const addOrRemoveEl1 = (item: Items) => {
    if (!AddBtnId.includes(item.id)) {
      dispatch(addToCart(item));
    } else dispatch(removeCart(item));
  };

  return (
    <div>
      <p style={{ fontSize: 24, fontWeight: 500, color: "#455a64" }}>Catalog</p>
      <div className={"item"}>
        {data
          ?.filter((e) =>
            brandId == 0 ? e.brand !== brandId : e.brand == brandId
          )
          .map((item) => (
            <div key={item.id}>
              <img className={"image"} src={item.image} />
              <div className={"about"}>
                <div>
                  <div>{item.title}</div>
                  <div>Brand: {item.brand}</div>
                  <div className={"price"}>
                    {item.regular_price.value +
                      "  " +
                      item.regular_price.currency}
                  </div>
                </div>
                <div>
                  <Button
                    onClick={() => addOrRemoveEl1(item)}
                    className={"button"}
                    variant={AddBtnId.includes(item.id) ? "success" : "warning"}
                  >
                    {AddBtnId.includes(item.id) ? "In Cart ✓" : "Add to Cart"}
                  </Button>
                </div>
              </div>
            </div>
          ))}{" "}
      </div>
    </div>
  );
};

export default ItemContainer;
