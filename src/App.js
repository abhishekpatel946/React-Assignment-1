import { useState } from "react";
import Button from "./Components/Button/Button";
import InputText from "./Components/InputText/InputText";
import Text from "./Components/Text/Text";
import "./App.css";

function App() {
  // state for text
  const [displayMsg, setDisplayMsg] = useState("");
  const [text, setText] = useState("");

  // onChange for input
  const changeHandle = (e) => {
    setText(e.target.value);
  };

  // clickHandle for button
  const clickHandle = (e) => {
    setDisplayMsg(text);
    setText("");
  };

  return (
    <div className="app">
      <div className="appHeader">
        <Text displayMsg={displayMsg} />
        <InputText changeHandle={changeHandle} text={text} />
        <Button clickHandle={clickHandle} />
      </div>
    </div>
  );
}

export default App;
