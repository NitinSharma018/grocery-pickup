import React from "react";

export default function RefundPolicy() {
return (
<div style={styles.container}>
<h1 style={styles.heading}>💰 Refund Policy</h1>
<p style={styles.text}>
We offer refunds for products that are expired, damaged, or not collected within the pickup window. Refunds will be processed to the original payment method within 3–5 working days.
</p>
<h2 style={styles.subheading}>📞 Contact Us</h2>
<p style={styles.text}>
If you're unsatisfied with your order, contact us at support@ns027220@gmail.com within 24 hours.
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