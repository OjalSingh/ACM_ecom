import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import Navbar from "../components/navbar";

export default function Products() {
  const { addToCart } = useContext(CartContext);

  const [products] = useState([
    { id: 1, name: "Lip Balm", price: 299 },
    { id: 2, name: "Chanel No. 5", price: 12000 },
    { id: 3, name: "Black Leather Tote", price: 8999 },
    { id: 4, name: "Black Heels", price: 3499 },
  ]);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h1>Products</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {products.map((p) => (
            <div
              key={p.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
                width: "200px",
                textAlign: "center",
              }}
            >
              <h3>{p.name}</h3>
              <p>₹{p.price}</p>
              <button
                onClick={() => handleAddToCart(p)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#ff7f50",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
