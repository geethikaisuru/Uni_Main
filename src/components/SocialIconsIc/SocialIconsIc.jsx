/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SocialIconsIc = ({
  className,
  iconClassName,
  icon = "https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/icon-107.svg",
}) => {
  return (
    <div className={`social-icons-ic ${className}`}>
      <img className={`icon-3 ${iconClassName}`} alt="Icon" src={icon} />
    </div>
  );
};

SocialIconsIc.propTypes = {
  icon: PropTypes.string,
};
