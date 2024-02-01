import style from "./button.module.css";
const BtnCoantainer = ({onButtoncick}) => {
  const btnNum = [
    "1",
    "2",
    "C",
    "3",
    "4",
    "+",
    "5",
    "6",
    "-",
    "7",
    "8",
    "*",
    "9",
    ".",
    "/",
    "0",
    "=",
  ];
  return (
    <div className={style.btn}>
      {btnNum.map((btn) => {
        return <button className={style.button} onClick={ ()=> onButtoncick(btn)}>{btn}</button>;
      })}
      
    </div>
  );
};
export default BtnCoantainer;
