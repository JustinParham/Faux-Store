import React, { useContext } from 'react';
import { ItemDataContext } from '../../App';
import CartItemLine from './CartItemLine';
import classes from './CartItemList.module.css';

export default function CartItemList() {
  const globalContext = useContext(ItemDataContext);

  const calcCartTotal = cart => {
    let total = 0;
    cart.forEach(item => {
      total = total + item.price * item.quantity;
    });

    return Math.round(total * 100) / 100;
  };

  return (
    <div className={classes.cartItemListWrapper}>
      {globalContext.cart.length > 0 ? (
        globalContext.cart.map(item => {
          return <CartItemLine {...item} key={item.id} />;
        })
      ) : (
        <div className={classes.emptyCartMessage}>Cart Empty</div>
      )}
      {globalContext.cart.length > 0 && (
        <div className={classes.total}>
          Total: ${calcCartTotal(globalContext.cart)}
        </div>
      )}
    </div>
  );
}
