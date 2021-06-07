import Text from "./Components/Text/Text";
import InputText from "./Components/InputText/InputText";
import Button from "./Components/Button/Button";
import "./App.css";
import { useState } from "react";

function App() {
  // state for text
  const [text, setText] = useState("");
  const [displayMsg, setDisplayMsg] = useState("");

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
    <div className="App">
      <div className="App-header">
        <Text displayMsg={displayMsg} />
        <InputText changeHandle={changeHandle} text={text} />
        <Button clickHandle={clickHandle} />
      </div>
    </div>
  );
}

export default App;
