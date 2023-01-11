import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartSelector } from '../redux/cart/selector';
import { Link } from 'react-router-dom';
import {
  removeCart,
  removeCartAll,
  minusItem,
  addToCart,
  totalPriceItem,
} from '../redux/cart/slice';
import { Items } from '../redux/types';
import { Button } from 'react-bootstrap';

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, totalPrice } = useSelector(cartSelector);

  const removeItemHandler = (cartItem: Items) => {
    dispatch(removeCart(cartItem));
    dispatch(totalPriceItem(cartItem));
  };

  const removeAllItemHandler = () => {
    dispatch(removeCartAll());
  };

  const minusItemHandler = (cartItem: Items) => {
    dispatch(minusItem(cartItem));
    dispatch(totalPriceItem(cartItem));
  };

  const plusItemHandler = (cartItem: Items) => {
    dispatch(addToCart(cartItem));
    dispatch(totalPriceItem(cartItem));
  };

  return (
    <div>
      <div className={'logo_cart'}>
        <Link to={'/'}>
          <img src={require('../assets/images/logo.png')} />
        </Link>
      </div>
      <div className={'wrapper_cart'}>
        <div className={'cart_block'}>
          <p style={{ fontSize: 24, marginLeft: 50, fontWeight: 700 }}>Shopping Cart</p>
          <div className={'name_items'}>
            <span className={'name_items_span'}>Item</span>
            <span className={'name_items_span'}>Price</span>
            <span className={'name_items_span'}>Qty</span>
            <span className={'name_items_span'}>Total</span>
          </div>
          {totalPrice > 0 ? (
            cartItems.map((cartItem: Items, index: number) => (
              <div className={'cart_items'} key={index}>
                <img className={'cart_items_img'} src={require('../assets' + cartItem.image)} />
                <span className={'cart_items_text'}>
                  Brand: {cartItem.brand + '  ' + cartItem.title}
                </span>
                <span className={'cart_items_text'}>
                  {cartItem.regular_price.currency + '  ' + cartItem.regular_price.value}
                </span>
                <span className={'cart_items_text'}>
                  <span
                    onClick={() => minusItemHandler(cartItem)}
                    style={{ fontWeight: 700, fontSize: 30, cursor: 'pointer' }}
                  >
                    -
                  </span>
                  {cartItems[index].totalCount}
                  <span
                    onClick={() => plusItemHandler(cartItem)}
                    style={{ fontWeight: 700, fontSize: 30, cursor: 'pointer' }}
                  >
                    +
                  </span>
                </span>
                <span className={'cart_items_text'}>
                  {cartItem.totalCount == 1
                    ? cartItem.regular_price.value
                    : Math.floor(cartItem?.totalPriceItem * 100) / 100}
                </span>
                <span className={'cart_items_text'} onClick={() => removeItemHandler(cartItem)}>
                  <img
                    className={'cart_items_del_img'}
                    src={require('../assets/images/delete.png')}
                  />
                </span>
              </div>
            ))
          ) : (
            <div className={'cart_null'}>Cart is empty</div>
          )}
          <div className={'bottom_block'}>
            <span className={'total_price'}>
              Subtotal: {Math.floor(totalPrice * 100) / 100 + ' $'}
            </span>
            <Button
              style={{ marginTop: -12 }}
              variant="danger"
              onClick={() => removeAllItemHandler()}
            >
              Clear All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
