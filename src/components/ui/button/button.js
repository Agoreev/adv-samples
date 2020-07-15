import React from "react";
import classes from "./button.module.css";

const Button = ({ text, clicked, type }) => {
  let btnClass = null;
  let disabled = false;
  switch (type) {
    case "back":
      btnClass = classes.Back;
      break;
    case "normal":
      btnClass = classes.Normal;
      break;
    case "disabled":
      btnClass = classes.Disabled;
      disabled = true;
      break;
    default:
      break;
  }
  return (
    <button
      onClick={clicked}
      className={`${classes.Button} ${btnClass}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
