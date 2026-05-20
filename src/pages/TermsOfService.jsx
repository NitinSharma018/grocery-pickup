import React from "react";

export default function TermsOfService() {
return (
<div style={styles.container}>
<h1 style={styles.heading}>📜 Terms of Service</h1>
<p style={styles.text}>
By using our grocery pickup platform, you agree to comply with and be bound by these terms. Orders placed are for personal use and must be collected within the pickup time slot.
</p>
<h2 style={styles.subheading}>🔐 User Responsibilities</h2>
<p style={styles.text}>
You agree to provide accurate information, not misuse the platform, and honor payment terms.
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