import { useState } from "react";
import useFormInput from "../hooks/useFormInput";

export default function Example02() {

    const firstNameProps = useFormInput("Hello");
    const lastNameProps = useFormInput("World");

    return (
        <div className="container">
            <div className="mb-3">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" {...firstNameProps}/>
            </div>

            <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" {...lastNameProps}/>
            </div>
        </div>
    );
}
