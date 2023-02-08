import { memo } from "react";

function Content({handleIncrease}) {
    console.log("Content is rendering");
    return (
        <div>
            <h1>Hello 500 anh em Mindx</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
}

export default memo(Content);
