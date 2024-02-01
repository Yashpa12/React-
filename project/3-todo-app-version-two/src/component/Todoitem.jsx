function TodoItem({ Todoitem, TodoDate }) {
  return (
    <div className="container">
      <div className="row mg-row ">
        <div className="col-3">{Todoitem}</div>
        <div className="col-3">{TodoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger s-btn">
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
