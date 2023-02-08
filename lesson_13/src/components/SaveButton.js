import useOnlineStatus from "../hooks/useOnlineStatus";

export default function SaveButton() {

    const isOnline = useOnlineStatus();

    return (
        <div className="container mt-5">
            <h1>Xử lí 1 số tác vụ</h1>
            <button className="btn btn-primary" disabled={!isOnline}> {isOnline ? "Save": "Your internet is having a problem"} </button>
        </div>
    );
}