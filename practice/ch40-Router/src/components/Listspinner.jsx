const ListSpinner = () => {
  return (
    <>
      <div
        className="spinner-border spinner"
        style={{ width: "10rem", height: "10rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </>
  );
};
export default ListSpinner;