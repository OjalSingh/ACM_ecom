import Navbar from "../components/navbar";

import { useContext, useState } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext.jsx";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const [showBill, setShowBill] = useState(false);
  const [loading, setLoading] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const confirmCheckout = async () => {
    if (!cart.length) return;

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      return;
    }

    try {
      setLoading(true);

      await axios.post(
        "http://localhost:5000/api/orders/checkout",
        { items: cart, total },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("✅ Order placed successfully");
      setCart([]);
      setShowBill(false);
    } catch (err) {
      console.error(err);
      alert("❌ Checkout failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar/>
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
            onClick={() => setShowBill(true)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#ff6f61",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Checkout
          </button>
        </>
      )}

      {/* BILL MODAL */}
      {showBill && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <h2>Order Summary</h2>

            {cart.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <span>{item.name}</span>
                <span>₹{item.price}</span>
              </div>
            ))}

            <hr />
            <h3>Total: ₹{total}</h3>

            <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
              <button
                onClick={confirmCheckout}
                disabled={loading}
                style={confirmBtn}
              >
                {loading ? "Placing..." : "Confirm Order"}
              </button>

              <button
                onClick={() => setShowBill(false)}
                style={cancelBtn}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const modalStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "8px",
  width: "350px",
};

const confirmBtn = {
  flex: 1,
  padding: "10px",
  backgroundColor: "#4caf50",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const cancelBtn = {
  flex: 1,
  padding: "10px",
  backgroundColor: "#ccc",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};
