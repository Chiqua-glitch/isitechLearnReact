import React from "react";
import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navigation />
      <div>
        <form>
          <input type="text" />
        </form>
        <i class="fa-solid fa-bag-shopping"></i>
        <NavLink to="/sign-up" className="sign-up">
          sign up
        </NavLink>
        <NavLink to="/sign-in" className="sign-in">
          sign in
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
