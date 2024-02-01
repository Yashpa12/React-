function TodoItem() {
  let item = 'BUY ICE'
  let date = '11-12-2023'
  return (
    <div class="container">
      <div class="row mg-row ">
        <div class="col-3">{item}</div>
        <div class="col-3">{date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger s-btn">
            DELETE
          </button>
        </div>
      </div>    
    </div>
  );
}
export default TodoItem;
