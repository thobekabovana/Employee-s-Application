import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import EmployeesCard from './Card';

export default function EmployeesForm() {
    const [inputs, setInputs] = useState({
        name: '',
        surname: '',
        email: '',
        number: '',
        position: '',
        id: '',
    });

    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate(); // Hook for navigation

    // Fetch the employee data from localStorage when the component mounts
    useEffect(() => {
        const storedData = localStorage.getItem('employees');
        if (storedData) {
            setEmployees(JSON.parse(storedData));
        }
    }, []);

    useEffect(() => {
        if (employees.length > 0) {
            localStorage.setItem('employees', JSON.stringify(employees));
        }
    }, [employees]);

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if the employee ID or email already exists
        const isDuplicateId = employees.some((employee) => employee.id === inputs.id);
        const isDuplicateEmail = employees.some((employee) => employee.email === inputs.email);

        if (isDuplicateId) {
            alert("Employee ID already exists!");
            return; // Stop form submission if duplicate ID
        }

        if (isDuplicateEmail) {
            alert("Email already exists!");
            return; // Stop form submission if duplicate email
        }

        // If no duplicates, save the new employee data
        employer(inputs);
        alert("Successfully Registered");

        // Navigate to the list page after submission
        navigate('/employees-list');
    };

    function employer(data) {
        const storedData = localStorage.getItem('employees');
        let employees = storedData ? JSON.parse(storedData) : [];
        employees.push(data);
        localStorage.setItem('employees', JSON.stringify(employees));
        setEmployees(employees);
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    };

    const handleButtonClick = () => {
        navigate('/employees-list'); // Navigate to the list page when button is clicked
    };

    return (
        <div className="form-container">
            <div className="form-box">
                <button
                    className="button-start"
                    onClick={handleButtonClick}
                >
                    List
                </button>
                <h1 className="form-title">Employee's Application</h1>

                <div className="input-container">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                value={inputs.name || ""}
                                onChange={handleChange}
                                className="input-field"
                            />
                            <input
                                type="text"
                                id="surname"
                                name="surname"
                                placeholder="Surname"
                                value={inputs.surname || ""}
                                onChange={handleChange}
                                className="input-field"
                            />
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={inputs.email || ""}
                                onChange={handleChange}
                                className="input-field"
                            />
                            <input
                                type="text"
                                id="number"
                                name="number"
                                placeholder="Phone Number"
                                value={inputs.number || ""}
                                onChange={handleChange}
                                className="input-field"
                            />
                            <input
                                type="text"
                                id="position"
                                name="position"
                                placeholder="Position"
                                value={inputs.position || ""}
                                onChange={handleChange}
                                className="input-field"
                            />
                            <input
                                type="text"
                                id="id"
                                name="id"
                                placeholder="Employee ID number"
                                value={inputs.id || ""}
                                onChange={handleChange}
                                className="input-field"
                            />
                        </div>

                        <div className="button-container">
                            <button type="submit" className="submit-button">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
