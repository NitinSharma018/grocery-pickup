import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./context/CartContext";
import { SearchProvider } from "./context/SearchContext";
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
<CartProvider>
<SearchProvider>
<App />
</SearchProvider>
</CartProvider>
</React.StrictMode>
);