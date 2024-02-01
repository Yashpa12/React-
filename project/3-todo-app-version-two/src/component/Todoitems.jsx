import TodoItem from "./Todoitem";

const Todoitems = ( {todoitem}) => {
  return (
    <>
    {todoitem.map((item)=>(
         <TodoItem Todoitem={item.naam} TodoDate={item.dueDate} />
    ))}
    </>
  );
};
export default Todoitems;