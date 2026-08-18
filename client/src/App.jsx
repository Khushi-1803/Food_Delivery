import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  AppProvider,
  useAppContext
} from "./context/AppContext";

import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import ProductData from "./pages/ProductDetails";
import FoodListing from "./pages/FoodListing";
import Favourite from "./pages/Favourite";
import Profile from "./pages/Profile";

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";


function AppContent() {

  const { showUserLogin } = useAppContext();

  return (

    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/dishes"
          element={<FoodListing />}
        />

        <Route
          path="/dishes/:category"
          element={<FoodListing />}
        />

        <Route
          path="/dishes/:category/:id"
          element={<ProductData />}
        />

        <Route
          path="/aboutus"
          element={<Aboutus />}
        />

        <Route
          path="/contact"
          element={<Contactus />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favourites" element={<Favourite />} />
        <Route path="/profile" element={<Profile />}
/>

      </Routes>

      <Footer />

      {showUserLogin && <Login />}

    </div>
  );
}


function App() {

  return (

    <AppProvider>

      <BrowserRouter>

        <AppContent />

      </BrowserRouter>

    </AppProvider>

  );
}

export default App;