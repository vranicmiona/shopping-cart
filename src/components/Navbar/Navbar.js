import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
// import logo from "../../assets/images/logo.png";

export default function Navbar() {
  return (
    <header className="navbar">
      <section className="first">
        <NavLink to={"/"}>
          <img
            src={require("../../assets/logo.png")}
            style={{ width: "70px" }}
          />
        </NavLink>
        <NavLink to={"/"} style={{ textDecoration: "none" }}>
          <h2
            style={{
              position: "relative",
              color: "white",
              right: "330px",
              fontSize: "28px",
            }}
          >
            ShoppingCart
          </h2>
        </NavLink>
      </section>
      <section className="second">
        <NavLink
          to={"/products"}
          style={{ textDecoration: "none", color: "white" }}
        >
          <h2>Products</h2>
        </NavLink>
        <NavLink
          to={"/cart"}
          style={{ textDecoration: "none", color: "white" }}
        >
          <h2>Cart</h2>
        </NavLink>
      </section>
    </header>
  );
}
