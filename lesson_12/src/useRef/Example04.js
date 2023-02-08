import { useRef, useState } from "react";

const Example04 = () => {
    let count = 0;
    const arrayRef = useRef([]);
    const [countState, setCountState] = useState(0);

    console.log("count: ", count);
    console.log("countRef: ", arrayRef.current);
    console.log("countState", countState);

    const increase = () => {
        count++;
    };

    const increaseRef = () => {
        arrayRef.current = [...arrayRef.current, countState];
    };

    const increaseState = () => {
        setCountState(countState + 1);
    };

    return (
        <div style={{ marginLeft: "10px" }}>
            <div>
                <h1>{count}</h1>
                <button className="btn btn-success" onClick={increase}>
                    Increase Count
                </button>
            </div>
            <div>
                <ul>{arrayRef.current.map( (item, index) => {
                    return <li key={index}> {item} </li>
                })}</ul>
                <button className="btn btn-success" onClick={increaseRef}>
                    Increase CountRef
                </button>
            </div>
            <div>
                <h1>{countState}</h1>
                <button className="btn btn-success" onClick={increaseState}>
                    Increase CountState
                </button>
            </div>
        </div>
    );
};

export default Example04;
