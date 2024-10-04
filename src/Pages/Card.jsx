import React from 'react';
import cover from '../assets/images/strategic-planning-for-success-through-people-business-development-concept-by-choosing-professional-leaders-employee-competency-businessman-holding-magnifying-glass-hrm-or-human-resource-m.jpg';
import Remove from '../components/Remove';

function Card({ employee, onDelete }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '10px',
      margin: '10px',
     
    }}>
      <h2>{employee.name}</h2>
      <p>Email: {employee.email}</p>
      <p>Phone: {employee.phone}</p>
      <Remove onDelete={() => onDelete(employee.id)}> // Pass the onDelete function and employee id as props
        <button>Delete</button>
      </Remove>
    </div>
  );
}

export default Card;