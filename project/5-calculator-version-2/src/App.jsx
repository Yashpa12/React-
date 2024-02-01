import style from "./App.module.css";
import Display from "./component/input";
import BtnCoantainer from "./component/buttoncontainer";
import { useState } from "react";
function App() {
  let [calValu, setcaValue] = useState("");

  const click = (buttonText) => {
    if (buttonText === "C") {
      setcaValue("");
    } else if (buttonText === "=") {
      setcaValue(eval(calValu));
    } else {
      let NewdislayValue = calValu + buttonText;
      setcaValue(NewdislayValue);
    }
    console.log(buttonText);
  };
  return (
    <div className={style.calculator}>
      <Display displayValue={calValu}></Display>
      <BtnCoantainer onButtoncick={click}> </BtnCoantainer>
    </div>
  );
}

export default App;
