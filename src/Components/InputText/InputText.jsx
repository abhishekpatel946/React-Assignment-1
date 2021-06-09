import React from "react";
import "./input-text-style.css";

function InputText(props) {
  return (
    <div className="inputTextContainer">
      <input
        className="inputText"
        type="text"
        placeholder="Enter Some Text"
        onChange={props.changeHandle}
        value={props.text}
      />
    </div>
  );
}

export default InputText;
