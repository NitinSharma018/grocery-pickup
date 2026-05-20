import React from "react";

export default function ShippingPolicy() {
const container = {
padding: "2.5rem",
maxWidth: "900px",
margin: "0 auto",
background: "linear-gradient(to bottom right, #fef9e7, #e8f8f5)",
borderRadius: "12px",
fontFamily: "Segoe UI, sans-serif",
lineHeight: "1.8",
color: "#2d3748",
};

const heading = {
fontSize: "2.2rem",
color: "#2c7a7b",
fontWeight: "bold",
marginBottom: "1rem",
textAlign: "center",
};

const sectionTitle = {
fontSize: "1.4rem",
marginTop: "1.8rem",
color: "#00796b",
fontWeight: "600",
};

const paragraph = {
fontSize: "1.05rem",
color: "#333",
};

const listItem = {
marginTop: "0.5rem",
color: "#444",
};

return (
<div style={container}>
<h1 style={heading}>📦 Shipping Policy</h1>

  <p style={paragraph}>
    Thank you for choosing <strong>Happy Grocers</strong>! We aim to make your grocery pickup experience smooth, fast, and convenient.
  </p>

  <h2 style={sectionTitle}>🚚 Order Processing & Pickup</h2>
  <p style={paragraph}>
    Orders placed before <span style={{ color: "#e65100", fontWeight: "bold" }}>5:00 PM</span> will typically be ready within 2 hours.
    Pickup slots are available from <strong>9:00 AM to 8:00 PM</strong>, Monday through Saturday.
  </p>

  <h2 style={sectionTitle}>🛍️ Pickup Instructions</h2>
  <ul>
    <li style={listItem}>📝 Bring your order ID and a valid ID card.</li>
    <li style={listItem}>📍 Arrive at your selected pickup store during your chosen time window.</li>
    <li style={listItem}>⏰ Orders not picked up within 24 hours may be canceled automatically.</li>
  </ul>

  <h2 style={sectionTitle}>⛔ Missed Pickups</h2>
  <p style={paragraph}>
    If you are unable to collect your order on time, please contact us as soon as possible. Perishable items will not be restocked or refunded.
  </p>

  <h2 style={sectionTitle}>💬 Need Help?</h2>
  <p style={paragraph}>
    Contact our support team at{" "}
    <strong style={{ color: "#007acc" }}>support@ns027220@gmail.com</strong> or call us at{" "}
    <strong style={{ color: "#d84315" }}>+91-8847554008</strong>.
  </p>

  <p style={{ marginTop: "2rem", textAlign: "center", color: "#555", fontSize: "0.9rem" }}>
    This policy is effective as of January 2025. Subject to change without prior notice.
  </p>
</div>
);
}