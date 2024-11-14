import React, { useState, useEffect } from 'react';
import EmployeesCard from './Card'; // Import the Card component
import UpdateForm from '../components/update';
import '../index.css';

export default function EmployeesList() {
  const [employees, setEmployees] = useState([]);
  const [editEmployeeId, setEditEmployeeId] = useState(null); // State to track which employee is being edited

  // Fetch employees data from localStorage when the component mounts
  useEffect(() => {
    const storedData = localStorage.getItem('employees');
    if (storedData) {
      setEmployees(JSON.parse(storedData));
    }
  }, []);

  // Handle Delete Employee
  const handleDelete = (id) => {
    const updatedEmployees = employees.filter(employee => employee.id !== id);
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees)); // Update localStorage after deletion
  };

  // Handle Update Employee - Show the update form when the "Update" button is clicked
  const handleUpdate = (id) => {
    setEditEmployeeId(id); // Set the employee ID to show the update form for that employee
  };

  const handleSaveUpdate = (updatedEmployee) => {
    const updatedEmployees = employees.map(employee =>
      employee.id === updatedEmployee.id ? updatedEmployee : employee
    );
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees)); // Update localStorage after saving changes
    setEditEmployeeId(null); // Hide the update form after saving
  };

  return (
    <div className="employees-list-container">
      <h1 className="employees-list-title">Employees List</h1>
      <div className="employees-list">
        {employees.length > 0 ? (
          employees.map((employee) => (
            <div key={employee.id} className="employee-card-container">
              <EmployeesCard
                employee={employee}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
              {editEmployeeId === employee.id && (
                <UpdateForm
                  employee={employee}
                  onSave={handleSaveUpdate}
                  onCancel={() => setEditEmployeeId(null)} // Hide the form if cancel is clicked
                />
              )}
            </div>
          ))
        ) : (
          <p>No employees found.</p>
        )}
      </div>
    </div>
  );
}
