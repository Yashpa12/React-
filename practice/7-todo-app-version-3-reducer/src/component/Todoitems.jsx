import TodoItem from "./Todoitem";

const Todoitems = ({ onDeletClick, todoitem }) => {
  return (
    <>
      {todoitem.map((item) => (
        <TodoItem
        key={item.naam}
          Todoitem={item.naam}
          TodoDate={item.dueDate}
          onDeletClick={onDeletClick}
        />
      ))}
    </>
  );
};
export default Todoitems;
