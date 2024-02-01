import { RiDeleteBin2Line } from "react-icons/ri";

function TodoItem({ Todoitem, TodoDate,onDeletClick}) {
  let removewithItem = ()=>{
    onDeletClick(Todoitem
      )
  }
  return (
    <div className="container">
      <div className="row mg-row ">
        <div className="col-3">{Todoitem}</div>
        <div className="col-3">{TodoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger s-btn"
            onClick={removewithItem}
          >
            <RiDeleteBin2Line />

          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
