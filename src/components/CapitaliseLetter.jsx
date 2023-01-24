import React from "react";

const CapitaliseLetter = (str) => {
  return str
    .toLowerCase()
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default CapitaliseLetter;
