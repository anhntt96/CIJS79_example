import { useState, useCallback } from "react";
import Content from "./Content";

export default function Example05() {
    const [count, setCount] = useState(0);

    const handleIncrease = useCallback(() => {
        setCount((count) => count + 1);
    }, []);

    return (
        <div>
            <Content handleIncrease={handleIncrease} />
            <h1>{count}</h1>
        </div>
    );
}
