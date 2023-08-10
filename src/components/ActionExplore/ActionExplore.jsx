/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ActionExplore = ({
  className,
  iconClassName,
  icon = "https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/icon-108.svg",
}) => {
  return (
    <div className={`action-explore ${className}`}>
      <img className={`icon-4 ${iconClassName}`} alt="Icon" src={icon} />
    </div>
  );
};

ActionExplore.propTypes = {
  icon: PropTypes.string,
};
