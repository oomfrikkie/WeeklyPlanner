import { NavLink } from "react-router-dom"

import './navbar.css'

export default function NavBar(){
    return(
        <section className="nav-container">
            <nav className="nav-links">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/home">Home</NavLink>
            </nav>
        </section>
    )
}