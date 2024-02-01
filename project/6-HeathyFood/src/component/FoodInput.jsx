import style from "./FoodInput.module.css";
const FoodInput = ({handleKeyDown}) => {
 
  return (
    <input
      type="text"
      className={style.input}
      placeholder="Enter the Text"
      onKeyDown={handleKeyDown}
    />
  );
};
export default FoodInput;
