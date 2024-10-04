import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="navbar-title">
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Sports HD</Link>
            </span>
        </div>
    )
}

export default Navbar