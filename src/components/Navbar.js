import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "./logos/x.svg";
import { ReactComponent as MenuIcon } from "./logos/menu.svg";
import "./navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="navItems">
      <div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option">
            <a href="#">ABOUT</a>
          </li>
          <li className="option">
            <a href="#">CONTACT</a>
          </li>
          <li className="option">
            <a href="#">BLOG</a>
          </li>
        </ul>
      </div>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
