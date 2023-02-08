import { useState, useEffect, useRef } from "react";
const useHover = () => {
    const [isHover, setHover] = useState(false);
    const elemRef = useRef();

    useEffect(() => {
        const elem = elemRef.current;
        const handleMouseenter = () => {
            setHover(true);
        };
        const handleMouseleave = () => {
            setHover(false);
        };

        elem.addEventListener("mouseenter", handleMouseenter);
        elem.addEventListener("mouseleave", handleMouseleave);
        return () => {
            elem.removeEventListener("mouseenter", handleMouseenter);
            elem.removeEventListener("mouseleave", handleMouseleave);
        };
    }, []);

    return [elemRef, isHover];
};

export default useHover;
