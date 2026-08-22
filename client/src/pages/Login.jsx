import React, {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  useAppContext,
} from "../context/AppContext.jsx";

import {
  useAuth,
} from "../context/AuthContext.jsx";

import toast from "react-hot-toast";


const Login = () => {

  // =====================================================
  // APP CONTEXT
  // =====================================================

  const {
    setShowUserLogin,
  } = useAppContext();


  // =====================================================
  // AUTH CONTEXT
  // =====================================================

  const {
    login,
    register,
  } = useAuth();


  // =====================================================
  // NAVIGATION
  // =====================================================

  const navigate =
    useNavigate();


  // =====================================================
  // FORM MODE
  // =====================================================

  const [state, setState] =
    useState("login");


  // =====================================================
  // FORM VALUES
  // =====================================================

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");


  // =====================================================
  // LOADING
  // =====================================================

  const [loading, setLoading] =
    useState(false);


  // =====================================================
  // SUBMIT
  // =====================================================

  const onSubmitHandler = async (
    event
  ) => {

    event.preventDefault();


    // -----------------------------------------------
    // Prevent double click
    // -----------------------------------------------

    if (loading) {
      return;
    }


    try {

      setLoading(true);


      // =============================================
      // REGISTER
      // =============================================

      if (state === "register") {

        const data =
          await register(
            name,
            email,
            password
          );


        console.log(
          "REGISTER SUCCESS:",
          data
        );


        toast.success(
          "Account created successfully!"
        );

      }


      // =============================================
      // LOGIN
      // =============================================

      else {

        const data =
          await login(
            email,
            password
          );


        console.log(
          "LOGIN SUCCESS:",
          data
        );


        toast.success(
          "Login successful!"
        );

      }


      // =============================================
      // CLEAR FORM
      // =============================================

      setName("");

      setEmail("");

      setPassword("");


      // =============================================
      // CLOSE LOGIN POPUP
      // =============================================

      setShowUserLogin(false);


      // =============================================
      // GO TO HOME
      // =============================================

      navigate("/");


    } catch (error) {

      console.error(
        "Authentication error:",
        error
      );


      toast.error(
        error.message ||
        "Something went wrong"
      );

    } finally {

      setLoading(false);

    }

  };


  // =====================================================
  // CLOSE LOGIN
  // =====================================================

  const handleClose = () => {

    if (loading) {
      return;
    }

    setShowUserLogin(false);

  };


  // =====================================================
  // SWITCH LOGIN / REGISTER
  // =====================================================

  const switchMode = () => {

    if (loading) {
      return;
    }


    if (state === "login") {

      setState("register");

    } else {

      setState("login");

    }


    // Clear fields

    setName("");

    setEmail("");

    setPassword("");

  };


  // =====================================================
  // UI
  // =====================================================

  return (

    <div
      onClick={handleClose}
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        bg-black/70
        backdrop-blur-sm
        px-4
      "
    >

      {/* ================================================= */}
      {/* FORM */}
      {/* ================================================= */}

      <form
        onSubmit={onSubmitHandler}

        onClick={(event) =>
          event.stopPropagation()
        }

        className="
          flex
          flex-col
          gap-4
          w-full
          max-w-[352px]
          p-8
          py-10
          bg-white
          rounded-xl
          shadow-2xl
          border
          border-gray-200
        "
      >

        {/* =============================================== */}
        {/* TITLE */}
        {/* =============================================== */}

        <div className="text-center mb-2">

          <h2
            className="
              text-2xl
              font-bold
              text-gray-800
            "
          >

            <span className="text-orange-500">
              ShopKart
            </span>

            <br />

            <span>
              {state === "login"
                ? "Login"
                : "Create Account"}
            </span>

          </h2>


          <p
            className="
              text-gray-500
              text-sm
              mt-2
            "
          >

            {state === "login"
              ? "Welcome back!"
              : "Create your ShopKart account"}

          </p>

        </div>


        {/* =============================================== */}
        {/* NAME */}
        {/* =============================================== */}

        {state === "register" && (

          <div className="w-full">

            <label
              className="
                block
                text-gray-700
                mb-1
              "
            >
              Name
            </label>


            <input
              type="text"

              value={name}

              onChange={(event) =>
                setName(
                  event.target.value
                )
              }

              placeholder="Enter your name"

              className="
                border
                border-gray-300
                rounded-md
                w-full
                p-2.5
                text-gray-800
                outline-none
                focus:border-orange-500
                focus:ring-1
                focus:ring-orange-500
              "

              required
            />

          </div>

        )}


        {/* =============================================== */}
        {/* EMAIL */}
        {/* =============================================== */}

        <div className="w-full">

          <label
            className="
              block
              text-gray-700
              mb-1
            "
          >
            Email
          </label>


          <input
            type="email"

            value={email}

            onChange={(event) =>
              setEmail(
                event.target.value
              )
            }

            placeholder="Enter your email"

            className="
              border
              border-gray-300
              rounded-md
              w-full
              p-2.5
              text-gray-800
              outline-none
              focus:border-orange-500
              focus:ring-1
              focus:ring-orange-500
            "

            required
          />

        </div>


        {/* =============================================== */}
        {/* PASSWORD */}
        {/* =============================================== */}

        <div className="w-full">

          <label
            className="
              block
              text-gray-700
              mb-1
            "
          >
            Password
          </label>


          <input
            type="password"

            value={password}

            onChange={(event) =>
              setPassword(
                event.target.value
              )
            }

            placeholder="Enter your password"

            className="
              border
              border-gray-300
              rounded-md
              w-full
              p-2.5
              text-gray-800
              outline-none
              focus:border-orange-500
              focus:ring-1
              focus:ring-orange-500
            "

            required
          />

        </div>


        {/* =============================================== */}
        {/* SWITCH LOGIN / REGISTER */}
        {/* =============================================== */}

        <div
          className="
            text-sm
            text-gray-600
            text-center
          "
        >

          {state === "login" ? (

            <>
              Don't have an account?

              {" "}

              <button
                type="button"

                onClick={switchMode}

                disabled={loading}

                className="
                  text-orange-500
                  font-semibold
                  hover:text-orange-600
                  cursor-pointer
                  disabled:cursor-not-allowed
                "
              >
                Sign Up
              </button>
            </>

          ) : (

            <>
              Already have an account?

              {" "}

              <button
                type="button"

                onClick={switchMode}

                disabled={loading}

                className="
                  text-orange-500
                  font-semibold
                  hover:text-orange-600
                  cursor-pointer
                  disabled:cursor-not-allowed
                "
              >
                Login
              </button>
            </>

          )}

        </div>


        {/* =============================================== */}
        {/* SUBMIT */}
        {/* =============================================== */}

        <button
          type="submit"

          disabled={loading}

          className={`
            w-full
            py-2.5
            rounded-md
            font-semibold
            text-black
            transition-all

            ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600 cursor-pointer"
            }
          `}
        >

          {loading

            ? "Please wait..."

            : state === "login"

              ? "Login"

              : "Create Account"

          }

        </button>


        {/* =============================================== */}
        {/* CANCEL */}
        {/* =============================================== */}

        <button
          type="button"

          onClick={handleClose}

          disabled={loading}

          className="
            text-gray-500
            hover:text-gray-800
            text-sm
            mt-1
            cursor-pointer
            disabled:cursor-not-allowed
          "
        >
          Cancel
        </button>

      </form>

    </div>
  );
};


export default Login;