import "./styles.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import WishList from "./pages/WishList";
import ProductDetail from "./pages/ProductDetail";

import { Link } from "react-router-dom";
import Address from "./pages/private/Address";
import Login from "./pages/Login";
import { RequirersAuth } from "./pages/RequiresAuth";
import { useAuth } from "./context/auth-context";

export default function App() {
  const { login, toggleLogin } = useAuth();

  return (
    <div className="App">
      <nav>
        <Link to="/"> Home </Link> ||
        <Link to="/category"> Category </Link> ||
        <Link to="/cart">Cart </Link> ||
        <Link to="/wishlist">WishList </Link> ||
        <Link to="/address">Address </Link> ||
        <button onClick={() => toggleLogin()}>
          {login ? "logout" : "login"}{" "}
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/address"
          element={
            <RequirersAuth>
              <Address />
            </RequirersAuth>
          }
        />
      </Routes>
    </div>
  );
}
