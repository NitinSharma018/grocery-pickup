import React from "react";

export default function PrivacyPolicy() {
return (
<div style={styles.container}>
<h1 style={styles.heading}>🔒 Privacy Policy</h1>
<p style={styles.text}>
We collect basic personal information such as your name, phone number, and address only to fulfill your orders.
</p>
<h2 style={styles.subheading}>🛡️ Data Protection</h2>
<p style={styles.text}>
We use secure servers and do not share your data with third parties. You can request to delete your data anytime.
</p>
</div>
);
}

const styles = {
container: { padding: "2rem", maxWidth: "800px", margin: "0 auto", fontFamily: "sans-serif" },
heading: { fontSize: "2rem", color: "#2d3748" },
subheading: { fontSize: "1.3rem", marginTop: "1.5rem", color: "#00796b" },
text: { fontSize: "1.05rem", lineHeight: "1.7", color: "#444" }
};

