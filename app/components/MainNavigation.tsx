import React from "react";
import { NavLink } from "@remix-run/react";

interface MainNavigationProps {}

const MainNavigation: React.FC<MainNavigationProps> = () => {
  return (
    <nav id="main-navigation">
      <ul>
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/notes">My Notes</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
