// src/components/Header.jsx
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useSearch } from "../context/SearchContext";
import "./Header.css";

export default function Header() {
  const { cartItems } = useCart();
  const { setSearchTerm } = useSearch();
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="header-left">
          <h1 className="logo">🛒 GroceryBuddy</h1>
        </div>
        <div className="header-center">
          <input
            type="text"
            className="search-input"
            placeholder="Search groceries..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="header-right">
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/dashboard">Shop</Link>
            <Link to="/login">Login</Link>
            <Link to="/cart" className="cart-link">
              Cart{cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}