import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav-fluid">
      <ul>
        <li>
          <NavLink to="/">
            <img src="./img/logo-full.png" alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={(e) => (e.isActive ? "link-active" : "")}>
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop">shop</NavLink>
        </li>
        <li>
          <NavLink to="/featured">featured</NavLink>
        </li>
        <li>
          <NavLink to="/recommanded">recommanded</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
