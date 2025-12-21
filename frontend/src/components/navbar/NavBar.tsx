import { NavLink } from "react-router-dom";
import './navbar.css';
import { useEffect, useState } from "react";

export default function NavBar() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const accountId = sessionStorage.getItem("account_id");
    setLogged(!!accountId);
  }, []); // 👈 run once on mount

  return (
    <section className="nav-container">
      <nav className="nav-links">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/products">Products</NavLink>

        {logged ? (
          <NavLink to="/profile">Account</NavLink>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}

        <NavLink to="/cart" className="cart-link">
          <img src="/cart.svg" alt="Cart" className="cart-icons" />
          <span className="cart-badge">0</span>
        </NavLink>
      </nav>
    </section>
  );
}
