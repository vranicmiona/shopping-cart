import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

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
      </section>
      <section className="third">
        <NavLink to={"/"} style={{ textDecoration: "none" }}>
          <h2
            style={{
              color: "white",

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
