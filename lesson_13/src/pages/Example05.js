import useLocalStorage from "../hooks/useLocalStorage";

export default function Example05() {
    const [count, setCount] = useLocalStorage("count");

    return (
        <div className="container">
            <h1>{count}</h1>
            <button className="btn btn-success"
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Increase
            </button>
        </div>
    );
}
