import React from "react";
import "./button-style.css";

function Button(props) {
  return (
    <div className="Button-container">
      <button className="Button" type="submit" onClick={props.clickHandle}>
        Click Me
      </button>
    </div>
  );
}

export default Button;
