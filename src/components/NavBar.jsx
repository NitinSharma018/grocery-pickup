import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-green-700">🛒 Grocery Pickup</Link>
      <div className="space-x-4 text-sm font-medium">
        <Link to="/" className="text-gray-700 hover:text-green-600">Home</Link>
        <Link to="/dashboard" className="text-gray-700 hover:text-green-600">Shop</Link>
        <Link to="/login" className="text-gray-700 hover:text-green-600">Login</Link>
        <Link to="/register" className="text-gray-700 hover:text-green-600">Register</Link>
      </div>
    </nav>
  );
}
