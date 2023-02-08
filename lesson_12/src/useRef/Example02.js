import { useRef, useState } from "react";

export default function Example02() {

    const inputRef = useRef();

    const handleFocus = () => {
        inputRef.current.focus();
    }
    
    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleFocus}>Focus</button>
        </div>
    );
}