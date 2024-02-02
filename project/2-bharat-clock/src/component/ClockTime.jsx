import { useEffect } from "react";
import { useState } from "react";
let ClockTime = () => {
  const[time ,setTime] = useState(new Date())
  useEffect(()=>{
    const intervalID = setInterval(() => {
      setTime(new Date())
    },1000);
    return (
      clearInterval(intervalID)
    )
  },[])
  return (
   
    <>
      <p>
        This is the current Date : {time.toLocaleDateString()}  :::::::  {time.toLocaleTimeString()}
      </p>
    </>
  );
};
export default ClockTime;
