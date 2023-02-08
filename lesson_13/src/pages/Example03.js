import useCounter from "../hooks/useCounter"
export default function Example03() {

    const count01 = useCounter(1000);
    const count02 = useCounter(2000);

    return <div className="container">
        <h1>Count 01: {count01}</h1>
        <h1>Count 02: {count02}</h1>
    </div>
}