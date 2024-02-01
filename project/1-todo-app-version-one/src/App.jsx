// import "./App.css";

import AddTodo from "./component/AddTodo";
import AppName from "./component/AppName";
import TodoItem from "./component/Todoitem";
import TodoItem2 from "./component/Todoitem2";
import "./App.css";

function App() {
  return (
    <div className="con" style={{ textAlign: "center" }}>
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div className="item">
      <TodoItem></TodoItem>
      <TodoItem2></TodoItem2>
      </div>
      
    </div>
  );
}

export default App;
