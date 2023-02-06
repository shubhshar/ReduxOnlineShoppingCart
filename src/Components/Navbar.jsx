import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <span className="logo">
          <a href="/" style={{ textDecoration: "none" }}>
            Online Store
          </a>
        </span>
        <div>
          <Link className="navLink" to="/">
            Home
          </Link>
          <Link className="navLink" to="/Cart">
            Cart
          </Link>
          <span className="cartCount">Cart items: 0</span>
        </div>
      </div>
    </>
  );
};
export default Navbar;
