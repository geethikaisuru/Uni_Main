/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon209 } from "../../icons/Icon209";
import { NavigationColorDot } from "../NavigationColorDot";
import "./style.css";

export const Button = ({
  number = "1",
  showRightIcon = true,
  showLeftIcon = true,
  text = "Button",
  type,
  size,
  corner,
  style,
  className,
  override = (
    <NavigationColorDot icon="https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/icon-253.svg" />
  ),
}) => {
  return (
    <div className={`button style-4-${style} type-5-${type} size-9-${size} corner-4-${corner} ${className}`}>
      {["default", "dropdown", "right-icon", "round"].includes(type) && (
        <div className="div-3">
          {["default", "dropdown", "right-icon"].includes(type) && <>{text}</>}

          {type === "round" && <>{number}</>}
        </div>
      )}

      {type === "icon" && <>{override}</>}

      {["left-icon", "two-icons"].includes(type) && (
        <>
          <>
            {showLeftIcon && (
              <NavigationColorDot
                className={`${size === "small" && "class-6"} ${size === "extra-small" && "class-7"}`}
                icon={
                  style === "primary" && size === "small"
                    ? "https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/icon-232.svg"
                    : size === "extra-small" && style === "primary"
                    ? "https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/icon-184.svg"
                    : style === "light" && ["default", "large"].includes(size)
                    ? "https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/icon-253.svg"
                    : style === "light" && size === "small"
                    ? "https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/icon-231.svg"
                    : size === "extra-small" && style === "light"
                    ? "https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/icon-183.svg"
                    : style === "dark" && ["default", "large"].includes(size)
                    ? "https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/icon-224.svg"
                    : size === "small" && style === "dark"
                    ? "https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/icon-220.svg"
                    : size === "extra-small" && style === "dark"
                    ? "https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/icon-174.svg"
                    : "https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/icon-252.svg"
                }
                iconClassName={`${size === "small" && "class-4"} ${size === "extra-small" && "class-5"}`}
              />
            )}
          </>
          <div className="text-wrapper-2">{text}</div>
        </>
      )}

      {["right-icon", "two-icons"].includes(type) && (
        <>
          <>
            {showRightIcon && (
              <NavigationColorDot
                className={`${size === "extra-small" ? "class-7" : "class-6"}`}
                icon={
                  style === "light" && ["default", "large"].includes(size)
                    ? "https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/icon-253.svg"
                    : style === "primary" && size === "small"
                    ? "https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/icon-232.svg"
                    : style === "light" && size === "small"
                    ? "https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/icon-231.svg"
                    : size === "extra-small" && style === "primary"
                    ? "https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/icon-228.svg"
                    : size === "extra-small" && style === "light"
                    ? "https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/icon-227.svg"
                    : style === "dark" && ["default", "large"].includes(size)
                    ? "https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/icon-224.svg"
                    : size === "small" && style === "dark"
                    ? "https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/icon-220.svg"
                    : size === "extra-small" && style === "dark"
                    ? "https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/icon-218.svg"
                    : "https://generation-sessions.s3.amazonaws.com/0755bf2fc297388ad10f530df2877e6c/img/icon-252.svg"
                }
                iconClassName={`${size === "extra-small" ? "class-5" : "class-4"}`}
              />
            )}
          </>
        </>
      )}

      {type === "dropdown" && (
        <Icon209
          className={`${size === "small" ? "class-8" : size === "extra-small" ? "class-9" : "class-10"}`}
          color={style === "light" ? "#C3CAD9" : style === "dark" ? "#4D5E80" : "white"}
        />
      )}
    </div>
  );
};

Button.propTypes = {
  number: PropTypes.string,
  showRightIcon: PropTypes.bool,
  showLeftIcon: PropTypes.bool,
  text: PropTypes.string,
  type: PropTypes.oneOf(["icon", "default", "round", "two-icons", "left-icon", "right-icon", "dropdown"]),
  size: PropTypes.oneOf(["large", "small", "extra-small", "default"]),
  corner: PropTypes.oneOf(["rounded", "rectangle"]),
  style: PropTypes.oneOf(["primary", "dark", "light"]),
};
