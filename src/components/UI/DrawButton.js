import React, { useState } from "react";
import classes from "./DrawButton.module.css";

const DrawButton = (props) => {
  const [oneMore, setOneMore] = useState(props.children);
  const [count, setCount] = useState(0);

  const randomButtonHandler = () => {
    const JJIN = "찐";
    const MAK = "막?";
    if (count === 0) {
      setOneMore(JJIN + MAK);
      setCount(count + 1);
    } else if (count < 5) {
      setOneMore(JJIN + oneMore);
      setCount(count + 1);
    } else if (count === 5) {
      setOneMore("ㄹㅇ 찐막 ㄱ");
    }
  };

  console.log(props.children);
  return (
    <button
      className={`${classes.DrawButton} ${classes.Button}`}
      onClick={randomButtonHandler}
    >
      {oneMore}
    </button>
  );
};

export default DrawButton;
