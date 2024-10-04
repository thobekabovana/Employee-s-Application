// import React, { useState } from "react";
// import Remove from "./Remove";
// import UserList from "./list";
// import Myteam from "./list";

// function employee() {
//   const [List, setList] = useState(JSON.parse(localStorage.getItem("inputs")));
//   const [editing, setEditing] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredEmployees, setFilteredEmployees] = useState(List);
// //   const handleEdit = (index) => {
// //     setEditing(index);
// //   };
 
//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     const filteredList = List.filter((employee) => {
//       return employee.id.toString().includes(e.target.value);
//     });
//     setFilteredEmployees(filteredList);
//   };


//   console.log(filteredEmployees)
//   return (
//     <div style={{
//         display: "flex",
//         flexDirection: "column",
//         alignIitems: "center",
//        //  border: '1px solid #ccc"
//         padding: "15px",
//         margin: "4%",
//         width: "60%",
//         borderRadius: "5px",
//         boxShadow: "0 5px 10px rgba(2, 2, 2, 2.1)",
//         backgroundColor: "white",
//     }}> 

// <h1>Employee's Registration</h1>

// <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search by ID" style={{
//         width: "20%",
//         height: "30px",
//         padding: "10px",
//         fontSize: "16px",
//         border: "1px solid #ccc",
//         borderRadius: "5px",
//         marginBottom: "20px"
//       }}/>

    
//     </div>
//   )
// }
// export default employee;


// import React, { useState, useEffect } from 'react';
// import cover from '../assets/images/strategic-planning-for-success-through-people-business-development-concept-by-choosing-professional-leaders-employee-competency-businessman-holding-magnifying-glass-hrm-or-human-resource-m.jpg'

// function Card() {


//   return (
//     <div style={{ /* your styles */ }}>
//       <h2>{employee.name}</h2>
//       <p>Email: {employee.email}</p>
//       <p>Phone: {employee.phone}</p>
//       <button onClick={() => handleClick(employee.id)}>Delete</button>
//     </div>
//   );
// }

// export default Card;

// <Card employee={employee} handleDeleteEmployee={handleDeleteEmployee} filtedList={filtedList} setFiltedList={setFiltedList} />