import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={nav}>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/orders">Orders</Link>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

const nav = {
  display: "flex",
  gap: "15px",
  padding: "15px",
  background: "#ff6f61",
  color: "#fff",
};
