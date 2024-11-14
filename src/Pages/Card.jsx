import React from 'react';

function EmployeesCard({ employee, onDelete, onUpdate }) {
  return (
    <div style={{
      border: '1px solid #f6a4c0',  // Pink border
      backgroundColor: '#fff',  // White background
      padding: '20px',
      borderRadius: '8px',  // Rounded corners
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Light shadow for depth
      margin: '10px',
      maxWidth: '300px',  // Limit the width of the card
    }}>
      <h2 style={{ color: '#f6a4c0' }}>{employee.name} {employee.surname}</h2>  {/* Pink text for name */}
      <p style={{ color: '#333' }}>Email: {employee.email}</p>
      <p style={{ color: '#333' }}>Phone: {employee.number}</p>
      <p style={{ color: '#333' }}>Position: {employee.position}</p>

      <div>
        <button
          onClick={() => onDelete(employee.id)}
          style={{
            backgroundColor: '#f6a4c0',  // Pink background for button
            color: '#fff',  // White text
            padding: '8px 16px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            marginRight: '10px',
          }}
        >
          Delete
        </button>
        <button
          onClick={() => onUpdate(employee.id)}
          style={{
            backgroundColor: '#f6a4c0',  // Pink background for button
            color: '#fff',  // White text
            padding: '8px 16px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default EmployeesCard;
