import { Link } from "react-router-dom";
import './Footer.css';

export default function Footer() {
return (
<footer className="footer">
<div className="newsletter">
<h2>Newsletter</h2>
<p>We use your email for sending promotional offers. We don't Spam.</p>
<div className="subscribe">
<input type="email" placeholder="Email address" />
<button>Subscribe</button>
</div>
</div>

  <div className="footer-sections">
    {/* Company Branding */}
    <div className="footer-column">
      <img
        src="https://www.shutterstock.com/image-vector/modern-logo-vegetable-shopping-cart-260nw-2288900053.jpg"
        alt="Logo"
        className="footer-logo"
      />
      <h3>🛒 GroceryBuddy</h3>
    </div>

    {/* Support Links */}
    <div className="footer-column">
      <h4>Support</h4>
      <ul>
        <li><Link to="/about" className="footer-link">About Us</Link></li>
        <li><Link to="/shipping-policy" className="footer-link">Shipping Policy</Link></li>
        <li><Link to="/careers" className="footer-link">Careers</Link></li>
      </ul>
    </div>

    {/* Information Links */}
    <div className="footer-column">
      <h4>Information</h4>
      <ul>
        <li><Link to="/terms" className="footer-link">Terms of Service</Link></li>
        <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
        <li><Link to="/refund-policy" className="footer-link">Refund Policy</Link></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div className="footer-column">
      <h4>Contact Us</h4>
      <p>📞 +91-8847554008</p>
      <p>✉️ support@ns027220@gmail.com</p>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2025 Happy Grocers. All rights reserved.</p>
  </div>
</footer>
);
}