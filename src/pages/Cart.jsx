import { useCart } from "../context/CartContext";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { Badge } from "primereact/badge";
import { db } from "../firebase";
import { ref, push } from "firebase/database";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const order = {
      items: cartItems,
      total: total.toFixed(2),
      timestamp: new Date().toISOString(),
    };

    const ordersRef = ref(db, "orders");

    push(ordersRef, order)
      .then(() => {
        clearCart();
        navigate("/checkout-success");
      })
      .catch((error) => {
        console.error("❌ Checkout error:", error);
        alert("Failed to place order. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-pink-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          🛒 Your Shopping Cart
        </h2>

        {cartItems.length === 0 ? (
          <Card
            className="text-center shadow-md"
            title="Cart is Empty"
            subTitle="Add some items to get started! 🎉"
          />
        ) : (
          <>
            {cartItems.map((item) => (
              <Card
                key={item.id}
                className="mb-4 shadow-lg border-l-4 border-green-400"
                style={{ display: "flex", alignItems: "center", padding: "1rem" }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    marginRight: "1rem",
                    borderRadius: "10px",
                  }}
                />
                <div className="flex-grow">
                  <h4 className="text-lg font-semibold mb-1">{item.name}</h4>
                  <p className="text-sm text-gray-600">
                    ₹{item.price} x {item.quantity} = ₹
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <Badge value={item.quantity} severity="info" className="mr-2" />
                <Button
                  icon="pi pi-trash"
                  className="p-button-rounded p-button-danger p-button-sm"
                  onClick={() => removeFromCart(item.id)}
                />
              </Card>
            ))}

            <Divider />

            <div className="text-right">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Total: ₹{total.toFixed(2)}
              </h3>
              <Button
                label="Clear Cart"
                icon="pi pi-times"
                className="p-button-outlined p-button-danger mr-2"
                onClick={clearCart}
              />
              <Button
                label="Checkout"
                icon="pi pi-check"
                className="p-button-success"
                onClick={handleCheckout}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
