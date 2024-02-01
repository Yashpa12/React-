import { useRef } from "react";
import { MdAddToPhotos } from "react-icons/md";

function AddTodo({ onNewtodo }) {
  const todoNameElement = useRef();
  const DuedateElement = useRef();

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const todoname = todoNameElement.current.value;
    const todoDate = DuedateElement.current.value;

    if (onNewtodo && typeof onNewtodo === "function") {
      onNewtodo(todoname, todoDate);
    }

    // Clear input values
    todoNameElement.current.value = "";
    DuedateElement.current.value = "";
  };

  return (
    <div className="container text-center">
      <form className="row mg-row" onSubmit={handleAddButtonClick}>
        <div className="col-3">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="enter the text here"
          />
        </div>
        <div className="col-3">
          <input type="date" ref={DuedateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success s-btn">
            <MdAddToPhotos />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;









