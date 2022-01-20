import React from 'react';
import classes from './CartDisplay.module.css';

export default function CartDisplay(props) {
  return (
    <li className={classes.cartItemLine}>
      <div className={classes.cartItemImage}>
        <img src={props.image} height="20px" width="20px" alt={props.title} />
      </div>
      <div className={classes.cartItemTitle}>{props.title}</div> x{' '}
      <div className={classes.cartItemQuantity}>{props.quantity}</div>
    </li>
  );
}
