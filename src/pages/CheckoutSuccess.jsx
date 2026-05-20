import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { motion } from "framer-motion";

export default function CheckoutSuccess() {
  const [orderId, setOrderId] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");

  useEffect(() => {
    // Generate a simple order ID (you can replace this with real one from Firebase if needed)
    const generatedId = "ORD" + Math.floor(Math.random() * 1000000);
    setOrderId(generatedId);

    // Calculate delivery date (e.g., +2 days from now)
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 2);
    setDeliveryDate(futureDate.toDateString());
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-6">
      <motion.div
        className="bg-white rounded-2xl shadow-2xl p-10 text-center max-w-lg w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPgrAO-dBNruk19L4IypGpNyDNfGi7auO5ig&s"
          alt="Success"
          className="w-20 h-20 mx-auto mb-4"
        />
        <h2 className="text-3xl font-bold text-green-600 mb-2">
          Order Confirmed!
        </h2>
        <p className="text-gray-700 mb-3">
          Your order has been placed successfully. 🎉
        </p>

        <div className="bg-green-50 p-4 rounded-lg shadow-inner mb-4">
          <p className="text-sm text-gray-800">
            <strong>Order ID:</strong> <span className="text-green-700">{orderId}</span>
          </p>
          <p className="text-sm text-gray-800">
            <strong>Estimated Delivery:</strong>{" "}
            <span className="text-green-700">{deliveryDate}</span>
          </p>
        </div>

        <Button
          label="Continue Shopping"
          icon="pi pi-arrow-right"
          className="p-button-success"
          onClick={() => (window.location.href = "/")}
        />
      </motion.div>
    </div>
  );
}
