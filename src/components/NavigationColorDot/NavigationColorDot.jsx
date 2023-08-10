/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const NavigationColorDot = ({
  className,
  iconClassName,
  icon = "https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/icon-253.svg",
}) => {
  return (
    <div className={`navigation-color-dot ${className}`}>
      <img className={`icon-6 ${iconClassName}`} alt="Icon" src={icon} />
    </div>
  );
};

NavigationColorDot.propTypes = {
  icon: PropTypes.string,
};
