import React from 'react';

import classes from './MainHeader.module.css';

export default function MainHeader() {
  return (
    <div className={classes.mainHeader}>
      <a href="/">
        <div className={classes.titleText}>Faux-Store</div>
      </a>
      <div className={classes.navigation}>
        <a href="/">Home</a>
        <a href="/cart">Cart</a>
        <a href="/info">Info</a>
      </div>
    </div>
  );
}
