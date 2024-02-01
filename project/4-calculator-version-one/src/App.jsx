import style from "./App.module.css";
import Display from "./component/input";
import BtnCoantainer from "./component/buttoncontainer";
function App() {
  return (
    <div className={style.calculator}>
     <Display></Display>
      <BtnCoantainer></BtnCoantainer>
    </div>
  );
}

export default App;
