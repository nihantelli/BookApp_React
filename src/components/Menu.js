import React from "react";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <div className="navbar-expand-lg">
      <ul className="navbar-nav d-flex justify-content-center align-items-center pt-5">
        <li className="px-3 nav-item">
          <Link to={"/"} className="nav-link">
            HOME
          </Link>
        </li>
        <li className="px-3 nav-item">
          <Link to={"/favourites"} className="nav-link">
            FAVOURITES
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
