import { NavLink } from "react-router-dom"
import "./navbar.css"
import { useEffect, useState } from "react"
import axios from "axios"

export default function NavBar() {
  const [logged, setLogged] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const accountId = sessionStorage.getItem("account_id")
    setLogged(!!accountId)

    if (accountId) {
      axios
        .get(`http://localhost:3000/cart/${accountId}`)
        .then(res => {
          setCartCount(res.data.items.length) // or res.data.length
        })
        .catch(console.error)
    }
  }, [])

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
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </NavLink>
      </nav>
    </section>
  )
}
