function AddTodo(){
return (
    <div class="container text-center">
    <div class="row mg-row">
      <div class="col-3">
        <input type="text" placeholder="enter the text here" />
      </div>
      <div class="col-3">
        <input type="date" />
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-success s-btn">
          Success
        </button>
      </div>
    </div>
    </div>
)
}
export default AddTodo;