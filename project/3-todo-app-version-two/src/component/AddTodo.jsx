function AddTodo(){
return (
    <div className="container text-center">
    <div className="row mg-row">
      <div className="col-3">
        <input type="text" placeholder="enter the text here" />
      </div>
      <div className="col-3">
        <input type="date" />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success s-btn">
          Success
        </button>
      </div>
    </div>
    </div>
)
}
export default AddTodo;