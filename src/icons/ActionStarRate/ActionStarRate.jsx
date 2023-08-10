/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ActionStarRate = ({ color = "#C3CAD9", className }) => {
  return (
    <svg
      className={`action-star-rate ${className}`}
      fill="none"
      height="71"
      viewBox="0 0 70 71"
      width="70"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M34.0145 45.5267L41.6678 51.0956C42.8812 51.9978 44.5301 50.7845 44.0634 49.3534L41.1389 40.3623L48.6989 34.9801C49.9434 34.1089 49.3212 32.1489 47.7967 32.1489H38.5256L35.5078 22.7534C35.0412 21.3223 33.0189 21.3223 32.5523 22.7534L29.5034 32.1489H20.2323C18.7078 32.1489 18.0856 34.1089 19.3301 34.9801L26.8901 40.3623L23.9656 49.3534C23.499 50.7845 25.1478 51.9667 26.3612 51.0956L34.0145 45.5267Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

ActionStarRate.propTypes = {
  color: PropTypes.string,
};
