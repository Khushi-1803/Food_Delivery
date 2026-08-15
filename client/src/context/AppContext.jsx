import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Cart
  const [cartItems, setCartItems] = useState([]);

  // Favourites
  const [favourites, setFavourites] = useState([]);

  // Login popup
  const [showUserLogin, setShowUserLogin] = useState(false);

  // Logged-in user
  const [user, setUser] = useState(null);

  // Add product to cart
  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // Cart count
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Toggle favourite
  const toggleFavourite = (product) => {
    setFavourites((prevFavourites) => {
      const alreadyFavourite = prevFavourites.some(
        (item) => item.id === product.id
      );

      if (alreadyFavourite) {
        return prevFavourites.filter(
          (item) => item.id !== product.id
        );
      }

      return [...prevFavourites, product];
    });
  };

  // Check if product is favourite
  const isFavourite = (productId) => {
    return favourites.some((item) => item.id === productId);
  };

  // Favourite count
  const favouriteCount = favourites.length;

  return (
    <AppContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        cartCount,

        favourites,
        toggleFavourite,
        isFavourite,
        favouriteCount,

        showUserLogin,
        setShowUserLogin,

        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

// Keep this because other components use useCart()
export const useCart = () => {
  return useContext(AppContext);
};