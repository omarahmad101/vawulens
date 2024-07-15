import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import { links } from "../data";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Nav Logo" />
        </Link>

        <ul className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}>
          {links.map(({ name, path }, index) => (
            <li key={index}>
              <NavLink to={path} className={({ isActive }) => (isActive ? "active-nav" : "")}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="nav__toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
