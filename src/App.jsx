// src/App.jsx
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import MainContent from "./components/main.content";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="app">
          <Header />
          <MainContent /> {/* <Auth /> will be shown based on route inside this */}
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
