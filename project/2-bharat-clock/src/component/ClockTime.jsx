let ClockTime = () => {
  let time = new Date();
  return (
    <>
      <p>
        This is the current Date : {time.toLocaleDateString()} And
        {time.toLocaleTimeString()}
      </p>
    </>
  );
};
export default ClockTime;
