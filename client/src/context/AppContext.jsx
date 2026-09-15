
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const AppContext = createContext(null);

// =====================================================
// APP PROVIDER
// =====================================================

export const AppProvider = ({ children }) => {

  // =====================================================
  // CART
  // =====================================================

  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart =
        localStorage.getItem("cart");

      return savedCart
        ? JSON.parse(savedCart)
        : [];
    } catch (error) {
      console.error(
        "Failed to load cart:",
        error
      );

      return [];
    }
  });

  // =====================================================
  // FAVOURITES
  // =====================================================

  const [favouriteItems, setFavouriteItems] =
    useState(() => {
      try {
        const savedFavourites =
          localStorage.getItem("favourites");

        return savedFavourites
          ? JSON.parse(savedFavourites)
          : [];
      } catch (error) {
        console.error(
          "Failed to load favourites:",
          error
        );

        return [];
      }
    });

  // =====================================================
  // LOGIN MODAL
  // =====================================================

  const [showUserLogin, setShowUserLogin] =
    useState(false);

  // =====================================================
  // SAVE CART
  // =====================================================

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  // =====================================================
  // SAVE FAVOURITES
  // =====================================================

  useEffect(() => {
    localStorage.setItem(
      "favourites",
      JSON.stringify(favouriteItems)
    );
  }, [favouriteItems]);

  // =====================================================
  // CART COUNT
  // =====================================================

  const cartCount = cartItems.reduce(
    (total, item) =>
      total + Number(item.quantity || 0),
    0
  );

  // =====================================================
  // FAVOURITE COUNT
  // =====================================================

  const favouriteCount =
    favouriteItems.length;

  // =====================================================
  // ADD TO CART
  // =====================================================

  const addToCart = (product) => {
    setCartItems((previousCart) => {

      const existingItem =
        previousCart.find(
          (item) => item.id === product.id
        );

      if (existingItem) {

        return previousCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  Number(item.quantity || 0) + 1,
              }
            : item
        );
      }

      return [
        ...previousCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // =====================================================
  // TOGGLE FAVOURITE
  // =====================================================

  const toggleFavourite = (product) => {

    setFavouriteItems((previousFavourites) => {

      const alreadyFavourite =
        previousFavourites.some(
          (item) => item.id === product.id
        );

      if (alreadyFavourite) {

        return previousFavourites.filter(
          (item) => item.id !== product.id
        );
      }

      return [
        ...previousFavourites,
        product,
      ];
    });
  };

  // =====================================================
  // CHECK FAVOURITE
  // =====================================================

  const isFavourite = (productId) => {

    return favouriteItems.some(
      (item) => item.id === productId
    );
  };

  // =====================================================
  // PROVIDER
  // =====================================================

  return (
    <AppContext.Provider
      value={{

        // -------------------------
        // CART
        // -------------------------

        cartItems,
        setCartItems,
        cartCount,
        addToCart,

        // -------------------------
        // FAVOURITES
        // -------------------------

        favouriteItems,
        setFavouriteItems,
        favouriteCount,
        toggleFavourite,
        isFavourite,

        // -------------------------
        // LOGIN
        // -------------------------

        showUserLogin,
        setShowUserLogin,
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

  return {
    cartItems: context.cartItems,
    setCartItems: context.setCartItems,
    cartCount: context.cartCount,
    addToCart: context.addToCart,
  };
};

// =====================================================
// DEFAULT EXPORT
// =====================================================

export default AppContext;

