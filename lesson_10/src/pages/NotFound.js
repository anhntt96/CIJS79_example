import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h3>NotFound content</h3>
            <button
                className="btn btn-success"
                onClick={() => {
                    navigate("/");
                }}
            >
                Back to homepage
            </button>
        </div>
    );
};

export default NotFound;
