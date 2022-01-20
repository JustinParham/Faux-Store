import React, { useContext } from 'react';
import classes from './DisplayCard.module.css';
import { ItemDataContext } from '../../App';

export default function DisplayCard(props) {
  const globalContext = useContext(ItemDataContext);
  const handleCartClick = () => {
    globalContext.addToCart(
      globalContext.itemData,
      props.id,
      globalContext.cart
    );
  };
  return (
    <div className={classes.displayCard}>
      <a href={`./item/${props.id}`}>
        <h4 className={classes.itemTitle}>{props.title}</h4>
        <div className={classes.itemImage}>
          <img
            src={props.image}
            height="100px"
            width="100px"
            alt={props.title}
          />
        </div>
        <div className={classes.itemPrice}>${props.price}</div>
      </a>
      <div className={classes.cartArea} onClick={handleCartClick}>
        +Cart
      </div>
    </div>
  );
}
