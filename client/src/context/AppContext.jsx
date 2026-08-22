import React, {
  createContext,
  useContext,
  useState,
} from "react";


// =====================================================
// APP CONTEXT
// =====================================================

const AppContext = createContext(null);


// =====================================================
// APP PROVIDER
// =====================================================

export const AppProvider = ({ children }) => {

  // ===================================================
  // CART
  // ===================================================

  const [cartItems, setCartItems] = useState([]);


  // ===================================================
  // FAVOURITES
  // ===================================================

  const [favourites, setFavourites] = useState([]);


  // ===================================================
  // LOGIN POPUP
  // ===================================================

  const [showUserLogin, setShowUserLogin] =
    useState(false);


  // ===================================================
  // USER
  // ===================================================

  const [user, setUser] = useState(null);


  // ===================================================
  // ADD TO CART
  // ===================================================

  const addToCart = (product) => {

    setCartItems((previousItems) => {

      // -----------------------------------------------
      // Check if product already exists
      // -----------------------------------------------

      const existingProduct =
        previousItems.find(
          (item) =>
            item.id === product.id
        );


      // -----------------------------------------------
      // Product already exists
      // Increase quantity
      // -----------------------------------------------

      if (existingProduct) {

        return previousItems.map(
          (item) => {

            if (
              item.id === product.id
            ) {

              return {
                ...item,

                quantity:
                  (item.quantity || 1) + 1,
              };

            }

            return item;

          }
        );
      }


      // -----------------------------------------------
      // New product
      // -----------------------------------------------

      return [

        ...previousItems,

        {
          ...product,

          quantity: 1,
        },

      ];

    });

  };


  // =====================================================
  // REMOVE FROM CART
  // =====================================================

  const removeFromCart = (productId) => {

    setCartItems(
      (previousItems) =>
        previousItems.filter(
          (item) =>
            item.id !== productId
        )
    );

  };


  // =====================================================
  // DECREASE CART QUANTITY
  // =====================================================

  const decreaseCartQuantity = (
    productId
  ) => {

    setCartItems(
      (previousItems) => {

        return previousItems
          .map((item) => {

            if (
              item.id === productId
            ) {

              return {
                ...item,

                quantity:
                  (item.quantity || 1) - 1,
              };

            }

            return item;

          })

          .filter(
            (item) =>
              item.quantity > 0
          );

      }
    );

  };


  // =====================================================
  // CART COUNT
  // =====================================================

  /*
    This counts TOTAL ITEMS.

    Example:

    Burger quantity = 2
    Pizza quantity  = 1

    cartCount = 3
  */

  const cartCount =
    cartItems.reduce(
      (
        total,
        item
      ) =>
        total +
        (item.quantity || 1),

      0
    );


  // =====================================================
  // TOGGLE FAVOURITE
  // =====================================================

  const toggleFavourite = (
    product
  ) => {

    setFavourites(
      (previousFavourites) => {

        const alreadyFavourite =
          previousFavourites.some(
            (item) =>
              item.id === product.id
          );


        // ---------------------------------------------
        // Remove favourite
        // ---------------------------------------------

        if (alreadyFavourite) {

          return previousFavourites.filter(
            (item) =>
              item.id !== product.id
          );

        }


        // ---------------------------------------------
        // Add favourite
        // ---------------------------------------------

        return [
          ...previousFavourites,
          product,
        ];

      }
    );

  };


  // =====================================================
  // CHECK FAVOURITE
  // =====================================================

  const isFavourite = (
    productId
  ) => {

    return favourites.some(
      (item) =>
        item.id === productId
    );

  };


  // =====================================================
  // FAVOURITE COUNT
  // =====================================================

  const favouriteCount =
    favourites.length;


  // =====================================================
  // CLEAR CART
  // =====================================================

  const clearCart = () => {

    setCartItems([]);

  };


  // =====================================================
  // CLEAR FAVOURITES
  // =====================================================

  const clearFavourites = () => {

    setFavourites([]);

  };


  // =====================================================
  // PROVIDER
  // =====================================================

  return (

    <AppContext.Provider
      value={{

        // ---------------------------------------------
        // Cart
        // ---------------------------------------------

        cartItems,

        setCartItems,

        addToCart,

        removeFromCart,

        decreaseCartQuantity,

        clearCart,

        cartCount,


        // ---------------------------------------------
        // Favourites
        // ---------------------------------------------

        favourites,

        setFavourites,

        toggleFavourite,

        isFavourite,

        clearFavourites,

        favouriteCount,


        // ---------------------------------------------
        // Login
        // ---------------------------------------------

        showUserLogin,

        setShowUserLogin,


        // ---------------------------------------------
        // User
        // ---------------------------------------------

        user,

        setUser,

      }}
    >

      {children}

    </AppContext.Provider>

  );

};


// =====================================================
// USE APP CONTEXT
// =====================================================

export const useAppContext = () => {

  const context =
    useContext(AppContext);


  if (!context) {

    throw new Error(
      "useAppContext must be used inside AppProvider"
    );

  }


  return context;
};


// =====================================================
// USE CART
// =====================================================

export const useCart = () => {

  const context =
    useContext(AppContext);


  if (!context) {

    throw new Error(
      "useCart must be used inside AppProvider"
    );

  }


  return context;
};