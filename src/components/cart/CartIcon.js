import React, { useContext } from 'react';

import classes from './CartIcon.module.css';
import { ItemDataContext } from '../../App';
import CartDisplay from './CartDisplay';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function CartIcon() {
  const globalContext = useContext(ItemDataContext);
  const calcCartTotal = cart => {
    let total = 0;
    cart.forEach(item => {
      total = total + item.price * item.quantity;
    });

    return Math.round(total * 100) / 100;
  };

  const cartItemCounter = cart => {
    let totalItems = 0;
    cart.forEach(item => (totalItems = totalItems + item.quantity));
    return totalItems;
  };

  return (
    <div className={classes.cartWrapper}>
      <a href="/cart">
        <div className={classes.cartIconWrapper}>
          <div className={classes.cartItemCount}>
            {cartItemCounter(globalContext.cart)}
          </div>

          <button className={classes.cartArea} onClick="location.href='/cart'">
            <ShoppingCartOutlinedIcon className={classes.cartIcon} />
          </button>
        </div>
      </a>
      <div className={classes.cartDisplayDiv}>
        <div>
          <div className={classes.cartFunctionalityArea}>
            <div>Total: ${calcCartTotal(globalContext.cart)}</div>
            <button
              className={classes.clearCartButton}
              onClick={globalContext.clearCart}
            >
              Clear Cart
            </button>
          </div>
          <ul className={classes.cartItemListArea}>
            {globalContext.cart.length > 0 &&
              globalContext.cart.map(item => {
                return <CartDisplay key={item.id} {...item} />;
              })}
            {globalContext.cart.length === 0 && (
              <div className={classes.cartEmpty}>Cart Empty</div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
