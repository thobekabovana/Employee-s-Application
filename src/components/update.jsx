import React, { useState, useEffect } from 'react';

function UpdateForm({ employee, onSave, onCancel }) {
  // Ensure that employee is not undefined
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    number: '',
    position: '',
    id: '',
  });

  useEffect(() => {
    if (employee) { // Check if employee data is provided
      setFormData({
        name: employee.name,
        surname: employee.surname,
        email: employee.email,
        number: employee.number,
        position: employee.position,
        id: employee.id,
      });
    }
  }, [employee]); // Re-run the effect if the employee prop changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Save the updated employee details
  };

  // Render loading or form based on the presence of employee data
  if (!employee) {
    return <p>Loading...</p>; // Display a loading message if employee is undefined
  }

  return (
    <form onSubmit={handleSubmit} className="update-form">
      <h3>Edit Employee</h3>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="surname"
        value={formData.surname}
        onChange={handleChange}
        placeholder="Surname"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="number"
        value={formData.number}
        onChange={handleChange}
        placeholder="Phone Number"
      />
      <input
        type="text"
        name="position"
        value={formData.position}
        onChange={handleChange}
        placeholder="Position"
      />
      <div>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default UpdateForm;
