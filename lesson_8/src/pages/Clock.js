import { useEffect, useState } from "react";

const Clock = () => {
  const [timeStr, setTimeStr] = useState("20:04:02");

  useEffect(() => {
    const timeInterval = setInterval(() => {
        console.log("Time interval is running");
        const now = new Date();
        const hour = now.getHours();
        const min = now.getMinutes();
        const sec = now.getSeconds();
        setTimeStr(`${hour}:${min}:${sec}`);
      }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div className="container">
      <h1>{timeStr}</h1>
    </div>
  );
};

export default Clock;
