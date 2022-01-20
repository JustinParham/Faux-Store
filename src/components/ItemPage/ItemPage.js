import React, { useContext, useEffect, useState } from 'react';
import { ItemDataContext } from '../../App';
import classes from './ItemPage.module.css';
import { useParams } from 'react-router-dom';

export default function ItemPage() {
  const [itemInfo, setItemInfo] = useState();
  const globalContext = useContext(ItemDataContext);
  const URLParams = useParams();
  const [itemQuantity, setItemQuantity] = useState(1);

  useEffect(() => {
    setItemInfo(
      globalContext.itemData.filter(item => {
        return item.id.toString() === URLParams.itemSlug;
      })[0]
    );
  }, [URLParams, globalContext]);

  const handleCartClick = () => {
    globalContext.addToCart(
      globalContext.itemData,
      itemInfo.id,
      globalContext.cart,
      itemQuantity
    );
  };

  const selectorOptionCreator = () => {
    const optionList = [];
    for (let i = 1; i < 30; i++) {
      optionList.push(i);
    }
    return optionList.map(item => {
      return (
        <option key={item} value={item}>
          {item}
        </option>
      );
    });
  };

  const selectorChangeHandler = e => {
    setItemQuantity(parseInt(e.target.value));
  };

  return (
    <div className={classes.itemPageWrapper}>
      {itemInfo !== undefined && (
        <div className={classes.itemDiv}>
          <div className={classes.itemTitle}>{itemInfo.title}</div>
          <div className={classes.itemImage}>
            <img src={itemInfo.image} alt={itemInfo.title} />
          </div>
          <div className={classes.priceCartandQuantity}>
            <div className={classes.itemPrice}>Price: ${itemInfo.price}</div>
            <div className={classes.cartAndQuantityArea}>
              <select
                className={classes.quantitySelector}
                onChange={selectorChangeHandler}
              >
                {selectorOptionCreator()}
              </select>
              <button onClick={handleCartClick}>add to cart</button>
            </div>
          </div>
          <div className={classes.descriptionArea}>{itemInfo.description}</div>
        </div>
      )}
    </div>
  );
}
