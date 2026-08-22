import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { API_URL } from "../config/api.js";

const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {

  // =====================================================
  // STATE
  // =====================================================

  const [user, setUser] = useState(() => {

    const savedUser =
      localStorage.getItem("user");

    if (!savedUser) {
      return null;
    }

    try {
      return JSON.parse(savedUser);
    } catch (error) {
      console.error(
        "Failed to parse saved user:",
        error
      );

      localStorage.removeItem("user");

      return null;
    }

  });


  const [token, setToken] = useState(
    () => localStorage.getItem("token")
  );


  const [loading, setLoading] =
    useState(true);


  // =====================================================
  // LOAD AUTHENTICATION FROM LOCAL STORAGE
  // =====================================================

  useEffect(() => {

    const savedToken =
      localStorage.getItem("token");

    const savedUser =
      localStorage.getItem("user");


    console.log(
      "AUTH - SAVED TOKEN:",
      savedToken ? "YES" : "NO"
    );

    console.log(
      "AUTH - SAVED USER:",
      savedUser ? "YES" : "NO"
    );


    // ---------------------------------------------------
    // TOKEN EXISTS
    // ---------------------------------------------------

    if (savedToken) {

      setToken(savedToken);


      // User information is optional.
      // Authentication depends on token.

      if (savedUser) {

        try {

          setUser(
            JSON.parse(savedUser)
          );

        } catch (error) {

          console.error(
            "Failed to parse saved user:",
            error
          );

          localStorage.removeItem(
            "user"
          );

          setUser(null);

        }

      } else {

        setUser(null);

      }

    } else {

      // No token = not authenticated

      setToken(null);
      setUser(null);

    }


    setLoading(false);

  }, []);


  // =====================================================
  // LOGIN
  // =====================================================

  const login = async (
    email,
    password
  ) => {

    const response = await fetch(
      `${API_URL}/api/user/login`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
          password,
        }),
      }
    );


    const data =
      await response.json();


    console.log(
      "LOGIN RESPONSE:",
      data
    );


    if (!response.ok) {

      throw new Error(
        data.message ||
        "Login failed"
      );

    }


    // ---------------------------------------------------
    // SAVE TOKEN
    // ---------------------------------------------------

    if (!data.token) {

      throw new Error(
        "Login successful but no token was returned by the server."
      );

    }


    localStorage.setItem(
      "token",
      data.token
    );


    setToken(data.token);


    // ---------------------------------------------------
    // SAVE USER IF BACKEND RETURNS USER
    // ---------------------------------------------------

    if (data.user) {

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      setUser(data.user);

    } else {

      console.warn(
        "Login response does not contain user data."
      );

      localStorage.removeItem(
        "user"
      );

      setUser(null);

    }


    return data;

  };


  // =====================================================
  // REGISTER
  // =====================================================

  const register = async (
    name,
    email,
    password
  ) => {

    const response = await fetch(
      `${API_URL}/api/user/register`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );


    const data =
      await response.json();


    if (!response.ok) {

      throw new Error(
        data.message ||
        "Registration failed"
      );

    }


    if (!data.token) {

      throw new Error(
        "Registration successful but no token was returned."
      );

    }


    // ---------------------------------------------------
    // SAVE TOKEN
    // ---------------------------------------------------

    localStorage.setItem(
      "token",
      data.token
    );

    setToken(data.token);


    // ---------------------------------------------------
    // SAVE USER
    // ---------------------------------------------------

    if (data.user) {

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      setUser(data.user);

    } else {

      setUser(null);

    }


    return data;

  };


  // =====================================================
  // UPDATE ADDRESS
  // =====================================================

  const updateUserAddress = async (
    address
  ) => {

    if (!token) {

      throw new Error(
        "Please login first"
      );

    }


    const response = await fetch(
      `${API_URL}/api/user/address`,
      {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",

          Authorization:
            `Bearer ${token}`,
        },

        body: JSON.stringify({
          address,
        }),
      }
    );


    const data =
      await response.json();


    if (!response.ok) {

      throw new Error(
        data.message ||
        "Failed to update address"
      );

    }


    // ---------------------------------------------------
    // UPDATED USER
    // ---------------------------------------------------

    const updatedUser =
      data.user ||
      {
        ...user,
        address,
      };


    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );


    setUser(updatedUser);


    return data;

  };


  // =====================================================
  // LOGOUT
  // =====================================================

  const logout = () => {
  // ==========================================
  // CLEAR AUTHENTICATION
  // ==========================================

  localStorage.removeItem("token");
  localStorage.removeItem("user");

  // ==========================================
  // CLEAR CART
  // ==========================================

  localStorage.removeItem("cart");
  localStorage.removeItem("cartItems");

  // ==========================================
  // CLEAR FAVOURITES
  // ==========================================

  localStorage.removeItem("favourites");
  localStorage.removeItem("favorites");
  localStorage.removeItem("favouriteItems");

  // ==========================================
  // CLEAR AUTH STATE
  // ==========================================

  setToken(null);
  setUser(null);
};

  // =====================================================
  // PROVIDER
  // =====================================================

  return (

    <AuthContext.Provider
      value={{

        user,

        token,

        loading,

        login,

        register,

        logout,

        updateUserAddress,

        // IMPORTANT:
        // Authentication depends ONLY on token.

        isAuthenticated:
          !!token,

      }}
    >

      {children}

    </AuthContext.Provider>

  );

};


// =====================================================
// USE AUTH
// =====================================================

export const useAuth = () =>
  useContext(AuthContext);