import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserDashboard from "../pages/UserDashboard";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/Productdetails";
import About from "../pages/About";
import ShippingPolicy from "../pages/ShippingPolicy";
import Careers from "../pages/Careers";
import TermsOfService from "../pages/TermsOfService";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import RefundPolicy from "../pages/RefundPolicy";
import Auth from "../components/Auth.js"; // ✅ Add Auth component
import CheckoutSuccess from './pages/CheckoutSuccess';




export default function MainContent() {
  return (
    <main style={{ padding: "2rem" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth" element={<Auth />} /> {/* ✅ New route for Auth */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/checkout-success" element={<CheckoutSuccess />} />
      </Routes>
    </main>
  );
}
