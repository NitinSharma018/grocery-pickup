// src/pages/ProductList.jsx
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useSearch } from "../context/SearchContext";
import products from "../data/products";
import { Button } from "primereact/button";
import "../pages/ProductList.css";

const categories = ["vegetables", "fruits", "grocery"];

export default function ProductList() {
  const { addToCart } = useCart();
  const { searchTerm } = useSearch();

  return (
    <div className="product-page">
      <h1 className="page-title">🛍️ Shop Fresh Groceries</h1>

      {categories.map((category) => (
        <section key={category}>
          <h2 className="category-title">{category.toUpperCase()}</h2>
          <div className="product-grid">
            {products
              .filter((product) => {
                const matchCategory = product.category === category;
                const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
                return matchCategory && matchSearch;
              })
              .map((product) => (
                <div className="product-card" key={product.id}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <h3>{product.name}</h3>
                  <p className="price">₹{product.price}</p>
                  <div className="product-buttons">
                    <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
                      <Button
                        label="View Product"
                        icon="pi pi-eye"
                        className="p-button-info p-button-sm"
                        style={{ width: "100%", marginBottom: "0.5rem" }}
                      />
                    </Link>
                    <Button
                      label="Add to Cart"
                      icon="pi pi-shopping-cart"
                      className="p-button-warning p-button-sm"
                      onClick={() => addToCart(product)}
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}