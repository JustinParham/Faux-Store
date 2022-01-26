import React, { useContext } from 'react';
import classes from './CartItemLine.module.css';
import { ItemDataContext } from '../../App';

export default function CartItemLine(props) {
  const removeButtonClickHandler = e => {
    globalContext.removeItemFromCart(props.id, globalContext.cart);
  };

  const addOrRemoveQuantityHandler = e => {
    if (e.target.innerHTML === '+') {
      globalContext.updateQuantityHandler(
        props.id,
        globalContext.cart,
        'addition'
      );
    }
    if (e.target.innerHTML === '-') {
      globalContext.updateQuantityHandler(
        props.id,
        globalContext.cart,
        'subtraction'
      );
    }
  };

  const globalContext = useContext(ItemDataContext);
  return (
    <div className={classes.cartLineWrapper}>
      <div className={classes.itemImageWrapper}>
        <img className={classes.itemImage} src={props.image}></img>
      </div>
      <div className={classes.itemTitle}>{props.title}</div>

      <div className={classes.quantityArea}>
        <button onClick={addOrRemoveQuantityHandler}>-</button>
        <div className={classes.quantityNumber}>{props.quantity}</div>
        <button onClick={addOrRemoveQuantityHandler}>+</button>
      </div>
      <div className={classes.lineTotal}>
        ${Math.round(props.price * props.quantity * 100) / 100}
      </div>
      <button
        className={classes.removeButton}
        onClick={removeButtonClickHandler}
      >
        Remove
      </button>
    </div>
  );
}
