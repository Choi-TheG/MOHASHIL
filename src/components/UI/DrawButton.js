import React, { useState } from "react";
import classes from "./DrawButton.module.css";

const DrawButton = (props) => {
  const [a, setA] = useState();
  console.log(props.children);
  return (
    <button className={`${classes.DrawButton} ${classes.Button}`}>
      {props.children}
    </button>
  );
};

export default DrawButton;
