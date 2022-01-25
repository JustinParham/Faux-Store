import React, { useContext, useState, useEffect } from 'react';
import { ItemDataContext } from '../../App';
import classes from './Featured.module.css';
import CarouselItem from './CarouselItem';
import CarouselIndicator from './CarouselIndicator';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

export default function Featured(props) {
  const globalContext = useContext(ItemDataContext);

  const [carouselTurn, setCarouselTurn] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setCarouselTurn(prevValue => {
        if (prevValue < 4) {
          return prevValue + 1;
        }
        if (prevValue === 4) {
          return (prevValue = 0);
        }
      });
    }, 15000);
    return () => clearTimeout(interval);
  }, [carouselTurn]);

  const carouselIndicatorNumberArray = [0, 1, 2, 3, 4];

  const nextCarouselItem = () => {
    setCarouselTurn(prevValue => {
      if (prevValue < 4) {
        return prevValue + 1;
      }
      if (prevValue === 4) {
        return (prevValue = 0);
      }
    });
  };

  const previousCarouselItem = () => {
    setCarouselTurn(prevValue => {
      if (prevValue > 0) {
        return prevValue - 1;
      }
      if (prevValue === 0) {
        return (prevValue = 4);
      }
    });
  };

  return (
    <div className={classes.carouselArea}>
      <button className={classes.previousButton} onClick={previousCarouselItem}>
        <ArrowForwardIosOutlinedIcon />
      </button>
      <button className={classes.nextButton} onClick={nextCarouselItem}>
        <ArrowForwardIosOutlinedIcon />
      </button>
      {globalContext.featuredItems.length > 0 &&
        globalContext.featuredItems.map((item, itemIndex) => {
          return (
            <CarouselItem
              itemIndex={itemIndex}
              activeItemIndex={carouselTurn}
              key={item}
              {...globalContext.itemData.find(
                ItemDataObj => ItemDataObj.id === item
              )}
            />
          );
        })}
      <div className={classes.carouselIndicatorArea}>
        {carouselIndicatorNumberArray.map((item, itemIndex) => {
          return (
            <CarouselIndicator
              key={itemIndex}
              itemIndex={itemIndex}
              activeItemIndex={carouselTurn}
              onClick={() => {
                setCarouselTurn(itemIndex);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
