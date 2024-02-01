// import "./App.css";

import AddTodo from "./component/AddTodo";
import AppName from "./component/AppName";
import Todoitems from "./component/Todoitems";
import Writemsg from "./component/witems";

import "./App.css";
import { useState } from "react";

function App() {
  const [todoitem, setTodoitem] = useState([]);

  const handleChange = (itemname, itemdate) => {
    // console.log(`new item added : ${itemname} Date : ${itemdate}`);
    let NewTodoitem = [
      ...todoitem,
       { naam: itemname, dueDate: itemdate }
      ];
    setTodoitem(NewTodoitem) ;
  };
  const handleDeleteItem = (todoitemName) => {
    let NewtodoItems = todoitem.filter((item) => item.naam !== todoitemName);
    setTodoitem(NewtodoItems);
    // console.log(`item delete${todoitemName}`);
  };
  return (
    
    <div className="con" style={{ textAlign: "center" }}>
      <AppName></AppName>
      <AddTodo onNewtodo={handleChange}></AddTodo>
      {todoitem.length == 0 && <Writemsg></Writemsg>}
      <Todoitems
        todoitem={todoitem}
        onDeletClick={handleDeleteItem}
      ></Todoitems>
    </div>
  );
}

export default App;
