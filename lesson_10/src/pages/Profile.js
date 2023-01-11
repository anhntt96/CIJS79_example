import React from "react";
import { Link, Outlet } from "react-router-dom";
const Profile = () => {
    return (
        <>
            <div className="btn-group" role="group" aria-label="Basic example">
                <Link to="." type="button" className="btn btn-primary">
                    About Me
                </Link>
                <Link to="course" type="button" className="btn btn-primary">
                    Courses
                </Link>
                <Link to="edit" type="button" className="btn btn-primary">
                    Edit Profile
                </Link>
                <Link to="setting" type="button" className="btn btn-primary">
                    Setting
                </Link>
            </div>
            <hr />
            <Outlet/>
        </>
    );
};

export default Profile;
