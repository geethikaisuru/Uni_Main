/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Icon209 = ({ color = "#C3CAD9", className }) => {
  return (
    <svg
      className={`icon-209 ${className}`}
      fill="none"
      height="28"
      viewBox="0 0 28 28"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M17.2317 11.473L13.6103 15.0943L9.989 11.473C9.81463 11.2982 9.57788 11.2 9.331 11.2C9.08412 11.2 8.84738 11.2982 8.673 11.473C8.309 11.837 8.309 12.425 8.673 12.789L12.957 17.073C13.321 17.437 13.909 17.437 14.273 17.073L18.557 12.789C18.921 12.425 18.921 11.837 18.557 11.473C18.193 11.1183 17.5957 11.109 17.2317 11.473Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

Icon209.propTypes = {
  color: PropTypes.string,
};
