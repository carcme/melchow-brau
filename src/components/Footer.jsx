import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>Melchow Brau</span> | Built with{" "}
        <a href="https://www.gatsbyjs.com/">GatsbyJS</a>{" "}
      </p>
    </footer>
  );
};

export default Footer;
