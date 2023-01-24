import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <Link to="/" className="span">
          <span>Melchow Brau</span>{" "}
        </Link>
        | Built by {/* <a href="https://hammer3/"> */}
        Hammer3
        {/* </a>{" "} */}
      </p>
    </footer>
  );
};

export default Footer;
