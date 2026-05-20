import { useCart } from "../context/CartContext";
import { Button } from "primereact/button";

export default function Checkout() {
const { cartItems, clearCart } = useCart();

const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

const handlePlaceOrder = () => {
alert("✅ Order placed successfully!");
clearCart();
};

return (
<div style={{ padding: "2rem", background: "linear-gradient(to right, #ffe0cc, #e0f7fa)" }}>
<h2 style={{ color: "#2e7d32" }}>Checkout Summary</h2>
<ul style={{ listStyle: "none", paddingLeft: 0 }}>
{cartItems.map((item, index) => (
<li key={index} style={{ marginBottom: "1rem", borderBottom: "1px solid #ccc" }}>
<strong>{item.name}</strong> — ₹{item.price} × {item.quantity}
</li>
))}
</ul>
<h3>Total Amount: ₹{total.toFixed(2)}</h3>
<Button label="Place Order" icon="pi pi-check" className="p-button-success p-mt-3" onClick={handlePlaceOrder} />
</div>
);
}