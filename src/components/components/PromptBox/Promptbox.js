import React from "react";
import "./Promptbox.css";
const Promptbox = (props) => {
  return (
    <>
      <p>"{props.promptText}"</p>
      <img src={props.imageSrc} alt="" />
    </>
  );
};

export default Promptbox;
