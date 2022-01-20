import React, { useContext, useState, useEffect } from 'react';
import { ItemDataContext } from '../../App';
import classes from './Featured.module.css';
import CarouselItem from './CarouselItem';

export default function Featured(props) {
  const globalContext = useContext(ItemDataContext);
  const [carouselIDs, setcarouselIDs] = useState([]);
  const selectRandomItems = () => {
    console.log();
    const randomNumberGetter = () => {
      return 1 + Math.floor(Math.random() * 20);
    };
    const randomNumberSet = new Set();

    while (randomNumberSet.size < 5) {
      randomNumberSet.add(randomNumberGetter());
    }

    return Array.from(randomNumberSet);
  };

  useEffect(() => {
    setcarouselIDs(selectRandomItems());
  }, []);

  return (
    <div className={classes.carouselArea}>
      {carouselIDs.length > 0 &&
        carouselIDs.map(item => {
          console.log(item);
          return (
            <CarouselItem
              key={item}
              {...globalContext.itemData.find(
                ItemDataObj => ItemDataObj.id === item
              )}
            />
          );
        })}
    </div>
  );
}
