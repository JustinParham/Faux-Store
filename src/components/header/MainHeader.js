import React from 'react';
import { Router, Link } from 'react-router-dom';
import classes from './MainHeader.module.css';

export default function MainHeader() {
  return (
    <div className={classes.mainHeader}>
      <a href="/">
        <div className={classes.titleText}>Faux-Store</div>
      </a>
      <div className={classes.navigation}>
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
      </div>
    </div>
  );
}
