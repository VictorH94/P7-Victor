import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

// Fonction permettante de gérer la navigation
function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className="accueil">
                Accueil
            </NavLink>
            <NavLink to="/about" className="apropos">
                A propos
            </NavLink>
        </nav>
    );
}

export default Navbar;
