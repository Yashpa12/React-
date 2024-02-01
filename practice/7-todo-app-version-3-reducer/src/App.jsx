// import "./App.css";

import AddTodo from "./component/AddTodo";
import AppName from "./component/AppName";
import Todoitems from "./component/Todoitems";
import Writemsg from "./component/witems";

import "./App.css";
import { useReducer, useState } from "react";
import { MdNewLabel } from "react-icons/md";

const NewTodoitemReducer = (currentvalue,action)=>{
  let NewtodoItems = currentvalue
  if  (action.type === 'NEW_ITEM') {
    NewtodoItems = [
      ...currentvalue,
      { naam : action.payload.itemname , dueDate : action.payload.itemdate}
    ]
  }
  else if (action.type === 'DEL_ITEM'){
    NewtodoItems = currentvalue.filter ((item)=> item.naam !== action.payload.itemname)
  }
return NewtodoItems;
}

function App() {
  // const [todoitem, setTodoitem] = useState([]);
  const [todoitem, DisptchTodoItem] = useReducer(NewTodoitemReducer , []);

  const handleChange = (itemname, itemdate) => {
    // console.log(`new item added : ${itemname} Date : ${itemdate}`);
   let Addnewaction = {
    type : 'NEW_ITEM',
    payload : {
      itemname,
      itemdate
    }
   }
   DisptchTodoItem(Addnewaction)
  };
  const handleDeleteItem = (todoitemName) => {
   let DeleteAction = {
    type : "DEL_ITEM",
    payload : {
      itemname : todoitemName
    }
   }
   DisptchTodoItem (DeleteAction)
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
