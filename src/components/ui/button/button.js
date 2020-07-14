import React from "react";
import classes from "./button.module.css";

const Button = ({ text, clicked, type }) => {
  let btnClass = null;
  switch (type) {
    case "back":
      btnClass = classes.Back;
      break;
    case "normal":
      btnClass = classes.Normal;
      break;
    default:
      break;
  }
  return (
    <button onClick={clicked} className={`${classes.Button} ${btnClass}`}>
      {text}
    </button>
  );
};

export default Button;
