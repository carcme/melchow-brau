import React, { useState } from "react";
import { Link } from "gatsby";
import { FiAlignJustify } from "react-icons/fi";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="navBar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Melchow Brau logo" />
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>

        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Home
          </Link>
          <Link
            to="/brews"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Brews
          </Link>
          <Link
            to="/tags"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Tags
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            About
          </Link>
          <Link
            to="/gallery"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Gallery
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
