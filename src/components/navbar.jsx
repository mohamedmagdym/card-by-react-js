import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="links">
          <Link to="/"> Shop </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
        </div>
      </div>
      <nav>
        <Link className="hover-line" to="cart/toys">
          Toys
        </Link>
        <Link className="hover-line" to="cart/homeessentials">
          home essentials
        </Link>
        <Link className="hover-line" to="cart/devices">
          devices
        </Link>
        <Link className="hover-line" to="cart/clothings">
          clothings
        </Link>
        <Link className="hover-line" to="cart/books">
          books
        </Link>
        <a href="/cart">cart</a>
      </nav>
    </>
  );
};
