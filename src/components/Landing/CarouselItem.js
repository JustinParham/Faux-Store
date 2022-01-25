import React, { useEffect, useState } from 'react';
import classes from './CarouselItem.module.css';

export default function CarouselItem(props) {
  let activeOrInactive = 'inactive';
  if (props.activeItemIndex === props.itemIndex) {
    activeOrInactive = 'active';
  }

  return (
    <div className={classes[`${activeOrInactive}`]}>
      <div
        className={classes.carouselItem}
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className={classes.itemTitle}>{props.title}</div>
      </div>
    </div>
  );
}
