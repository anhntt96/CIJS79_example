import { useRef, useState } from "react";

export default function Example01() {
    const [count, setCount] = useState(0);

    const timerInterval = useRef();

    

    const handleStart = () => {
        timerInterval.current = setInterval(() => {
            setCount((count) => count + 1);
        }, 1000);

        console.log("handleStart, timerInterval:", timerInterval.current);
    };

    const handleStop = () => {
        clearInterval(timerInterval.current);
        console.log("handleStop, timerInterval:", timerInterval.current);
    };

    return (
        <div className="container">
            <h1>Timer: {count}</h1>
            <button className="btn btn-success" onClick={handleStart}>
                Start
            </button>
            <button className="btn btn-warning ms-3" onClick={handleStop}>
                Stop
            </button>
        </div>
    );
}
