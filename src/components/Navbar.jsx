import React, { useContext, useState } from "react";
import { Link } from "gatsby";
import { FiAlignJustify } from "react-icons/fi";
import logo from "../assets/images/logo.png";
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const globalDispatch = useContext(GlobalDispatchContext);
  const globalState = useContext(GlobalStateContext);

  return (
    <nav className="navBar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Melchow Brau logo" />
          </Link>
          <div>
            <button
              className="lang-btn"
              aria-label="language"
              onClick={() => {
                globalDispatch({ type: "TOGGLE_LANG" });
              }}
            >
              {globalState.lang === "de" && (
                <span className="fi fi-gb fib"></span>
              )}
              {globalState.lang === "en" && (
                <span className="fi fi-de fib"></span>
              )}
            </button>

            <button className="nav-btn" onClick={() => setShow(!show)}>
              <FiAlignJustify />
            </button>
          </div>
        </div>
        {/* EN language */}
        {globalState.lang === "en" && (
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
              Beverages
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
              to="/events"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(false)}
            >
              Events
            </Link>
            <Link
              to="/about"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(false)}
            >
              About
            </Link>
          </div>
        )}

        {/* DE language */}
        {globalState.lang === "de" && (
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
              Getränke
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
              to="/events"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(false)}
            >
              Kalender
            </Link>
            <Link
              to="/about"
              className="nav-link"
              activeClassName="active-link"
              onClick={() => setShow(false)}
            >
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
