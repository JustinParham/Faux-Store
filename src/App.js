import React, { useState, useEffect, createContext } from 'react';
import DisplayList from './components/displayArea/DisplayList';
import Header from './components/header/MainHeader';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemPage from './components/ItemPage/ItemPage';
import getAPICall from './dataManagement/getAPICall';
import Footer from './components/footer/Footer';
import CartIcon from './components/cart/CartIcon';
import Featured from './components/Landing/Featured';

export const ItemDataContext = createContext();

export default function App() {
  const [dummyData, setDummyData] = useState([]);
  const [sortCategory, setSortCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [itemCart, setItemCart] = useState([]);

  const fakeStoreURL = 'https://fakestoreapi.com/products';

  useEffect(() => {
    const cachedItemData =
      JSON.parse(localStorage.getItem('storeData')) || null;

    if (cachedItemData) {
      setDummyData(cachedItemData);
      setIsLoading(false);
    } else {
      getAPICall(fakeStoreURL).then(data => {
        setDummyData(data);
        localStorage.setItem('storeData', JSON.stringify(data));
      });
      setIsLoading(false);
    }

    const cachedCartData = JSON.parse(localStorage.getItem('cart')) || null;

    if (cachedCartData) {
      setItemCart(cachedCartData);
    }
  }, []);

  const handleSortClick = e => {
    setSortCategory(
      e.target.innerHTML.charAt(0).toLowerCase() + e.target.innerHTML.slice(1)
    );
  };

  const addItemToCartHandler = (itemList, itemID, cart, quantity = 1) => {
    const updatedCart = [...cart];
    const itemToAdd = itemList.filter(item => item.id === itemID)[0];

    if (updatedCart.includes(itemToAdd)) {
      console.log(typeof quantity);
      const cartItem = updatedCart.find(item => {
        return item === itemToAdd;
      });

      cartItem.quantity = cartItem.quantity + quantity;
    } else {
      itemToAdd.quantity = quantity;

      updatedCart.push(itemToAdd);
    }

    setItemCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const clearCartHandler = cart => {
    localStorage.removeItem('cart');
    setItemCart([]);
  };

  return (
    <div className="wrapper">
      <ItemDataContext.Provider
        value={{
          itemData: dummyData,
          cart: itemCart,
          addToCart: addItemToCartHandler,
          clearCart: clearCartHandler,
        }}
      >
        <Header />
        <div className="content">
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Featured />
                    <DisplayList
                      loading={isLoading}
                      handleSortClick={handleSortClick}
                      sortCategory={sortCategory}
                    />
                  </>
                }
                exact
              />
              <Route path="/item/:itemSlug" element={<ItemPage />} />
            </Routes>
          </BrowserRouter>
        </div>
        <div className="footer">
          <Footer />
        </div>
        <CartIcon />
      </ItemDataContext.Provider>
    </div>
  );
}
