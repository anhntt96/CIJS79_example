import useOnlineStatus from "../hooks/useOnlineStatus";

export default function StatusBar() {

    const isOnline = useOnlineStatus();

    return (
        <div className="container">
            <h1>Status: { isOnline ? "Online" :"Offline"} </h1>
        </div>
    );
}