import React from "react";

export default function Careers() {
const container = {
padding: "2.5rem",
maxWidth: "900px",
margin: "0 auto",
background: "linear-gradient(to bottom right, #f0fff4, #e6f7ff)",
borderRadius: "12px",
fontFamily: "'Segoe UI', sans-serif",
color: "#2d3748",
lineHeight: "1.7",
boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)"
};

const heading = {
fontSize: "2.2rem",
fontWeight: "bold",
color: "#1e88e5",
marginBottom: "1rem",
textAlign: "center"
};

const subheading = {
fontSize: "1.4rem",
color: "#00796b",
marginTop: "2rem"
};

const jobList = {
paddingLeft: "1.5rem",
marginTop: "0.5rem",
fontSize: "1.1rem",
color: "#444"
};

const contact = {
marginTop: "2rem",
color: "#444"
};

return (
<div style={container}>
<h1 style={heading}>🌟 Careers at Happy Grocers</h1>
<p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
Join a passionate and fast-growing team on a mission to transform the way people shop for groceries! 🚀
At <strong>Happy Grocers</strong>, we believe in building smart tools and smarter teams.
</p>

  <h2 style={subheading}>💼 Current Openings</h2>
  <ul style={jobList}>
    <li>👨‍💻 Frontend React Developer</li>
    <li>📦 Warehouse & Logistics Coordinator</li>
    <li>📞 Customer Support Executive</li>
    <li>📊 Digital Marketing Intern</li>
  </ul>

  <h2 style={subheading}>🎯 Why Work With Us?</h2>
  <ul style={jobList}>
    <li>✅ Flexible work culture</li>
    <li>🚀 Opportunities to grow and lead</li>
    <li>🌐 Work on real projects that make a difference</li>
    <li>🎁 Competitive salaries and benefits</li>
  </ul>

  <div style={contact}>
    <h2 style={subheading}>📧 How to Apply?</h2>
    <p>
      Send your resume and portfolio to{" "}
      <strong style={{ color: "#2c7a7b" }}>careers@happygrocers.com</strong>
    </p>
    <p>We’re excited to meet passionate people like you! 💼</p>
  </div>
</div>
);
}