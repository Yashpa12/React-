const ListSpinner = () => {
  return (
    <>
      <div
        class="spinner-border spinner"
        style={{ width: "10rem", height: "10rem" }}
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </>
  );
};
export default ListSpinner;