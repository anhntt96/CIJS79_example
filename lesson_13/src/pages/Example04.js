import useHover from "../hooks/useHover";

export default function Example04() {
    const [elemRef, isHover] = useHover();

    return (
        <div className="container">
            <div
                ref={elemRef}
                style={{ width: 100, height: 100, border: "1px solid black" }}
            >
                {isHover ? "Hovering" : "Not hovering"}
            </div>
        </div>
    );
}
