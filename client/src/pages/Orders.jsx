import { useEffect, useState } from "react";
import axios from "axios";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await axios.get("http://localhost:5000/api/orders/my-orders", {
          headers: { Authorization: token },
        });
        setOrders(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Orders</h1>
      {orders.length === 0 && <p>No orders yet.</p>}
      {orders.map((order) => (
        <div key={order._id} style={{ border: "1px solid #ccc", marginBottom: "10px", padding: "10px" }}>
          <h3>Order ID: {order._id}</h3>
          <p>Total: ₹{order.total}</p>
          <p>Items:</p>
          <ul>
            {order.items.map((item, idx) => (
              <li key={idx}>{item.name} - ₹{item.price}</li>
            ))}
          </ul>
          <p>Ordered at: {new Date(order.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
