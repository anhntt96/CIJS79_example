import { useState, useEffect, useCallback } from "react";
import useInterval from "./useInterval";

export default function useCounter(delay) {
    const [count, setCount] = useState(0);
    // useEffect( () => {
    //     const id = setInterval(() => {
    //         setCount(c => c + 1)
    //     }, 1000);
    //     return () => {
    //         clearInterval(id);
    //     }
    // }, [])
    const callback = useCallback(() => {
        setCount((c) => c + 1);
    }, []);
    useInterval(callback, delay);
    return count;
}
