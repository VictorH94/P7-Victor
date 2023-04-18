import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

// Fonction composant Navbar permettante de gérer la navigation
function Navbar() {
    return (
        <nav className="navbar">
            <NavLink 
            to="/" 
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "inactive"}>
                Accueil
            </NavLink>
            <NavLink 
            to="/a-propos"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "inactive"}>
                A propos
            </NavLink>
        </nav>
    );
}

export default Navbar;
