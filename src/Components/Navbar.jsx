import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  //using state.cart here to show item count added to cart
  const addedItems = useSelector((state) => state.cart);

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
        <div className="navWrapper">
          <Link className="navLink" to="/">
            Home
          </Link>
          <Link className="navLink" to="/Cart">
            Cart
          </Link>
          <span className="cartCount">Items: {addedItems.length}</span>
        </div>
      </div>
    </>
  );
};
export default Navbar;
