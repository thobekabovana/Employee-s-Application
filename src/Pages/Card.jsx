import React from 'react';
import cover from '../assets/images/strategic-planning-for-success-through-people-business-development-concept-by-choosing-professional-leaders-employee-competency-businessman-holding-magnifying-glass-hrm-or-human-resource-m.jpg';
// import Remove from '../components/Remove';



function Card({ employee, onDelete }) {

  const handleDeleteEmployee = (id) => {
    setEmployees(employee.filter((employee, index) => index !== id));
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '10px',
      margin: '10px',
      padding: "15px",
      width: "30%",
      height: "30%",
      borderRadius: "5px",
      boxShadow: "0 5px 10px rgba(2, 2, 2, 2.1)",
      backgroundImage: `url(${cover})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}>
      <h2>{employee.name}</h2>
      <p>Email: {employee.email}</p>
      <p>Phone: {employee.phone}</p>
      {/* <Remove onDelete={() => onDelete(employee.id)}> // Pass the onDelete function and employee id as props */}
        <button onClick={handleDeleteEmployee}>Delete</button>
      {/* </Remove> */}
    </div>
  );
}

export default Card;