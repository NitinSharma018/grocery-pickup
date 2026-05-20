// src/pages/ProductDetails.jsx
import { useParams } from "react-router-dom";
import products from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: 200, height: 200 }} />
      <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>Price: ₹{product.price}</p>
      <p style={{ marginTop: "0.5rem", color: "#555" }}>
        Category: {product.category}
      </p>
    </div>
  );
}
