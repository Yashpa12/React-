// import "./App.css";

import AddTodo from "./component/AddTodo";
import AppName from "./component/AppName";
import Todoitems from "./component/Todoitems";

import "./App.css";

function App() {
  const todoItem = [
    {
      naam: "Buy milk",
      dueDate: "4/10/2023",
    },
    {
      naam: "go to collage",
      dueDate: "4/10/2023",
    },
    {
      naam: "come from collage",
      dueDate: "4/10/2023",
    },
  ];
  return (
    <div className="con" style={{ textAlign: "center" }}>
      <AppName></AppName>
      <AddTodo></AddTodo>
     <Todoitems todoitem={todoItem}></Todoitems>
    </div>
  );
}

export default App;
