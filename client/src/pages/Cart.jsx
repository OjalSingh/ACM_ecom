import { useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext.jsx";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);

  // Calculate total price
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // Checkout function
  const checkout = async () => {
    if (!cart.length) {
      alert("Cart is empty!");
      return;
    }

    try {
      // JWT token stored in localStorage
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login first");
        return;
      }

      await axios.post(
        "http://localhost:5000/api/orders/checkout",
        { items: cart, total },
        { headers: { Authorization: token } }
      );

      alert("✅ Order placed successfully!");
      setCart([]); // Clear cart after checkout
    } catch (err) {
      console.error(err);
      alert("❌ Checkout failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cart</h1>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
            borderBottom: "1px solid #ccc",
            paddingBottom: "5px",
          }}
        >
          <span>{item.name}</span>
          <span>₹{item.price}</span>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h3>Total: ₹{total}</h3>
          <button
            onClick={checkout}
            style={{
              padding: "10px 20px",
              backgroundColor: "#4caf50",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}
