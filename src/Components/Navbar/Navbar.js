import React from "react";
import { BsBagFill } from "react-icons/bs";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm py-3 d-flex">
      <div className="container">
        <a href="#" className="navbar-brand">
          Moji Shop
        </a>

        <ul className="navbar-nav me-auto-ms-3">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
        </ul>

        <div className="bag-box">
          <a href="#" className="bag">
            <BsBagFill className="text-white" />
            <span className="bag-item-counter">0</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
