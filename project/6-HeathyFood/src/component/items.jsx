import style from "./items.module.css";
const Item = ({ FoodItem }) => {
  const BuyButton = (event, item) => {
    console.log(` beign bought `);
  };
  return (
    <>
      {FoodItem.map((item) => {
        return (
          <ul key={item} className="list-group">
            <li className="list-group-item">
              <span>{item}</span>
              <button
                className={`${style.btn} btn btn-info`}
                onClick={() => BuyButton(event, item)}
              >
                Buy
              </button>
            </li>
          </ul>
        );
      })}
    </>
  );
};
export default Item;
