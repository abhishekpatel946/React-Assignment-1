import React from "react";
import "./test-style.css";

function Text(props) {
  return (
    <div>
      <h1 className="textHeading"> Hello {props.displayMsg} </h1>
    </div>
  );
}

export default Text;
