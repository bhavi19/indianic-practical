import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function UserUpdateForm() {
    // Initial state for user details
    const [userDetails, setUserDetails] = useState({
        name: "",
        dob: "",
        email: "",
        role: "viewer", // Default role
        gender: "male", // Default gender
    });

    // Handle input change for each field
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserDetails({
            ...userDetails,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("User Details Updated:", userDetails);
        // Here you can implement an API call to update the user details
    };

    return (
        <div className="container mt-4">
            <h1>Update User Details</h1>
            <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={userDetails.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                {/* Date of Birth */}
                <div className="mb-3">
                    <label htmlFor="dob" className="form-label">
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        id="dob"
                        name="dob"
                        value={userDetails.dob}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                {/* Email */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={userDetails.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                {/* Role Dropdown */}
                <div className="mb-3">
                    <label htmlFor="role" className="form-label">
                        Role
                    </label>
                    <select
                        className="form-select"
                        id="role"
                        name="role"
                        value={userDetails.role}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="viewer">Viewer</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                {/* Gender Radio Buttons */}
                <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <div>
                        <div className="form-check form-check-inline">
                            <input
                                type="radio"
                                className="form-check-input"
                                id="male"
                                name="gender"
                                value="male"
                                checked={userDetails.gender === "male"}
                                onChange={handleInputChange}
                                required
                            />
                            <label className="form-check-label" htmlFor="male">
                                Male
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                type="radio"
                                className="form-check-input"
                                id="female"
                                name="gender"
                                value="female"
                                checked={userDetails.gender === "female"}
                                onChange={handleInputChange}
                                required
                            />
                            <label className="form-check-label" htmlFor="female">
                                Female
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                type="radio"
                                className="form-check-input"
                                id="other"
                                name="gender"
                                value="other"
                                checked={userDetails.gender === "other"}
                                onChange={handleInputChange}
                                required
                            />
                            <label className="form-check-label" htmlFor="other">
                                Other
                            </label>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
                <button type="submit" className="btn btn-primary">
                    Cancel
                </button>
            </form>
        </div>
    );
}

export default UserUpdateForm;
