import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="nav-container">
            <Link to="/" className="accueil">
                Accueil
            </Link>
            <Link to="/about" className="apropos">
                A propos
            </Link>
        </nav>
    );
}

export default Navbar;
