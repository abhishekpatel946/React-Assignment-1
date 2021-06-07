import React from "react";
import "./input-text-style.css";

function InputText(props) {
  return (
    <div className="InputText-container">
      <input
        className="InputText"
        type="text"
        placeholder="Enter Some Text"
        onChange={props.changeHandle}
        value={props.text}
      />
    </div>
  );
}

export default InputText;
