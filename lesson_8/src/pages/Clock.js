import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log("Create interval")
    const interval = setInterval(() => {
      console.log("Running...");
      console.log(time);
      setTime(time+1);
    }, 1000);

    return () => {
      console.log("Clear interval");
      clearInterval(interval);
    };
  }, []);
  return <h2>{time} Seconds</h2>;
};

export default Clock;