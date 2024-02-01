import style from "./input.module.css";

const Display = ({ displayValue }) => {
  return (
    <input type="text" className={style.input} value={displayValue} readOnly />
  );
};
export default Display;
