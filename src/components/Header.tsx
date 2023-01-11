import React from 'react';
import { cartSelector } from '../redux/cart/selector';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const { cartItems } = useSelector(cartSelector);

  return (
    <div className={'header'}>
      <Link to={'/'}>
        <img className={'logo'} src={require('../assets/images/logo.png')} />
      </Link>
      <Link to={'/cart'}>
        <div className={'cart'}>
          <img style={{ width: 60 }} src={require('../assets/images/cart.png')} />
          <span className={'cart_count'}>{cartItems.length > 0 && cartItems.length} </span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
