import { motion } from "framer-motion";

const mockOrders = [
  { id: 1, name: "Apples", status: "Processing" },
  { id: 2, name: "Milk", status: "Ready for Pickup" },
];

export default function AdminDashboard() {
  return (
    <motion.div
      className="p-6 min-h-screen bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-green-700">Admin Dashboard</h2>

      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-2">Orders</h3>
        {mockOrders.map((order) => (
          <div key={order.id} className="bg-white p-4 rounded shadow mb-2">
            <div className="flex justify-between">
              <span>{order.name}</span>
              <span className="text-sm text-gray-600">Status: {order.status}</span>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-2">Inventory</h3>
        <p className="text-gray-600">Inventory management coming soon...</p>
      </div>
    </motion.div>
  );
}
