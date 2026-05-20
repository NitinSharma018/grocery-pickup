import React from "react";

export default function About() {
const container = {
padding: "3rem 2rem",
maxWidth: "900px",
margin: "0 auto",
fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
color: "#2d3748",
background: "linear-gradient(to bottom right, #fff9f0, #f0fff4)",
borderRadius: "12px",
boxShadow: "0 0 15px rgba(0,0,0,0.1)",
lineHeight: "1.7",
};

const heading = {
fontSize: "2.5rem",
fontWeight: "bold",
marginBottom: "1rem",
color: "#2c7a7b",
};

const subheading = {
fontSize: "1.5rem",
marginTop: "2rem",
marginBottom: "1rem",
color: "#319795",
};

return (
<div style={container}>
<h1 style={heading}>About Happy Grocers</h1>
<p>
Welcome to <strong>Happy Grocers</strong> — your trusted local grocery
pickup solution built using modern web technologies. We aim to
revolutionize your shopping experience by offering a seamless and
contactless grocery ordering platform.
</p>

  <h2 style={subheading}>🚀 Our Mission</h2>
  <p>
    Our mission is to make your everyday grocery shopping faster, easier,
    and safer. With local store integration and a clean user interface,
    Happy Grocers brings freshness to your doorstep — just a few clicks
    away.
  </p>

  <h2 style={subheading}>🔧 Technologies Used</h2>
  <ul>
    <li>React.js — Frontend UI components</li>
    <li>PrimeReact — Beautiful UI elements</li>
    <li>React Router — Smooth navigation</li>
    <li>JavaScript / CSS3 — Styling and Interactions</li>
    <li>Vite — Super fast frontend tooling</li>
  </ul>

  <h2 style={subheading}>📦 What We Offer</h2>
  <ul>
    <li>🛒 Fresh Produce, Dairy, Bakery, and more</li>
    <li>🔐 Secure Login & Registration</li>
    <li>🛍️ Cart Management System</li>
    <li>🔎 Product Search and Filter</li>
    <li>📥 Checkout (local-only)</li>
  </ul>

  <h2 style={subheading}>👨‍💻 Developed By</h2>
  <p>
    This project is designed and developed by <strong>Raghav Sharma</strong>
    , under the guidance of [Guide’s Name]. It showcases the skills in React
    development, UI/UX, and frontend engineering.
  </p>

  <p style={{ marginTop: "2rem", fontSize: "1rem", color: "#718096" }}>
    For educational/demo purposes only. © 2025 Happy Grocers.
  </p>
</div>
);
}
