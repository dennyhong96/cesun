import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/products">
        Products
      </NavLink>
      <NavLink exact to="/product/123">
        Product
      </NavLink>
      <NavLink exact to="/about">
        About
      </NavLink>
      <NavLink exact to="/contact">
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
