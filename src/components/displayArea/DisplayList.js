import React, { useContext } from 'react';
import { ItemDataContext } from '../../App';
import DisplayCard from './DisplayCard';
import classes from './DisplayList.module.css';

export default function DisplayList(props) {
  const globalContext = useContext(ItemDataContext);
  const sortCategory = props.sortCategory;

  return (
    <div>
      <div className={classes.sortingArea}>
        <div className={classes.sortingText}>
          Category:{' '}
          <div className={classes.sortingCategoryText}>
            {sortCategory.charAt(0).toUpperCase() + sortCategory.slice(1)}
          </div>
          <div className={classes.searchOptionArea}>
            <p className={classes.searchOption} onClick={props.handleSortClick}>
              All
            </p>
            <p className={classes.searchOption} onClick={props.handleSortClick}>
              Men's clothing
            </p>
            <p className={classes.searchOption} onClick={props.handleSortClick}>
              Women's clothing
            </p>
            <p className={classes.searchOption} onClick={props.handleSortClick}>
              Jewelery
            </p>
            <p className={classes.searchOption} onClick={props.handleSortClick}>
              Electronics
            </p>
          </div>
        </div>
      </div>
      {props.isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className={classes.itemDisplayArea}>
          {sortCategory === 'all'
            ? globalContext.itemData.map(product => {
                return (
                  <DisplayCard key={product.id} {...product}></DisplayCard>
                );
              })
            : globalContext.itemData
                .filter(item => {
                  return item.category === sortCategory;
                })
                .map(product => {
                  return (
                    <DisplayCard key={product.id} {...product}></DisplayCard>
                  );
                })}
        </div>
      )}
    </div>
  );
}
