import Navbar from "../components/navbar";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get("http://localhost:5000/api/orders/my-orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ padding: "20px" }}>Loading orders...</p>;

  return (
    <><Navbar />
    <div style={{ padding: "20px" }}>
      <h1>My Orders</h1>

      {orders.length === 0 && <p>No orders placed yet.</p>}

      {orders.map(order => (
        <div
          key={order._id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "15px",
            marginBottom: "15px",
          }}
        >
          <p>
            <strong>Date:</strong>{" "}
            {new Date(order.createdAt).toLocaleString()}
          </p>

          {order.items.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </div>
          ))}

          <hr />
          <strong>Total: ₹{order.total}</strong>
        </div>
      ))}
    </div>
    </>
  );
}
