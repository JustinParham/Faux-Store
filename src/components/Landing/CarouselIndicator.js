import React from 'react';
import classes from './CarouselIndicator.module.css';

export default function CarouselIndicator(props) {
  let itemClassName = 'inactiveIndicator';
  if (props.itemIndex === props.activeItemIndex) {
    itemClassName = 'activeIndicator';
  }
  return (
    <div onClick={props.onClick} className={classes[`${itemClassName}`]}></div>
  );
}
