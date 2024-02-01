import FoodHeader from "./component/foodHeader";
import Item from "./component/items";

import Container from "./component/container";
import "./App.css";
import FoodInput from "./component/FoodInput";
import { useState } from "react";

function App({}) {
  // const[Textshow, setTextshow] = useState(); 
  const [items, setItems] = useState([
    "sabzi",
    "Roti",
    "salad",
   
  ]);


  const OnKeyDown = (event) => {
    if (event.key === 'Enter'){
      let NewFood = event.target.value
      let newItem = [...items , NewFood]
      setItems (newItem)
    
    }
    
  };
  return (
    <>
      <Container>
        <FoodHeader></FoodHeader>
        <FoodInput handleKeyDown={OnKeyDown}></FoodInput>

        <Item FoodItem={items}></Item>
      </Container>
    </>
  );
}

export default App;
