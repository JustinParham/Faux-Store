import React from 'react';
import classes from './CarouselItem.module.css';

export default function CarouselItem(props) {
  console.log(props);
  return (
    <div>
      <div className={classes.itemTitle}>{props.title}</div>
      <div className={classes.itemImageWrapper}>
        <img className={classes.itemImage} src={props.image}></img>
      </div>
    </div>
  );
}
