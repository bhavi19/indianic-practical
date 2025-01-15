import React, { useState } from 'react';

const Dashboard = () => {
    const data = [
        { name: "John Doe", dob: "1990-05-15", email: "johndoe@example1.com", role: "Admin", gender: "Male" },
        { name: "Alice Smith", dob: "1985-11-22", email: "alicesmith@example.com", role: "Editor", gender: "Male" },
        { name: "Bob Johnson", dob: "1992-08-30", email: "bobjohnson@example.com", role: "Viewer", gender: "Male" },
        { name: "Charlie Brown", dob: "1994-02-10", email: "charliebrown@example.com", role: "Admin", gender: "Female" },
    ];

    const [searchValue, setSearchValue] = useState("");

    const handleSearch = (event) => {
        setSearchValue(event.target.value);
    };

    const filteredTableData = data.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()) || item.email.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <h1>User Information</h1>

            {/* Search Bar */}
            <input
                type="text"
                className="form-control my-3"
                placeholder="Search by Name"
                value={searchValue}
                onChange={handleSearch}
            />

            {/* Table */}
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTableData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.dob}</td>
                            <td>{item.email}</td>
                            <td>{item.gender}</td>
                            <td>{item.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default Dashboard;