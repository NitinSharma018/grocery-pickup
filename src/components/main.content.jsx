import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import ProductDetails from "../pages/Productdetails";
import About from "../pages/About";
import ShippingPolicy from "../pages/ShipingPolicy";
import Careers from "../pages/Careers";
import TermsOfService from "../pages/TermsOfService";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import RefundPolicy from "../pages/RefundPolicy";
import Auth from "../components/Auth"; // ✅ Correct import for login/signup
import CheckoutSuccess from "../pages/CheckoutSuccess";


export default function MainContent() {
  return (
    <main style={{ minHeight: "80vh", padding: "20px 0" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<ProductList />} />
        <Route path="/login" element={<Auth />} /> {/* ✅ fixed */}
        <Route path="/register" element={<Auth />} /> {/* ✅ fixed */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
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
