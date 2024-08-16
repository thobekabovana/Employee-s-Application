import React, { useState } from "react";
import Remove from "./Remove";
import UserList from "./list";

function employee() {
  const [List, setList] = useState(JSON.parse(localStorage.getItem("inputs")));
  const [editing, setEditing] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState(List);
//   const handleEdit = (index) => {
//     setEditing(index);
//   };
 
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredList = List.filter((employee) => {
      return employee.id.toString().includes(e.target.value);
    });
    setFilteredEmployees(filteredList);
  };
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignIitems: "center",
       //  border: '1px solid #ccc"
        padding: "15px",
        margin: "4%",
        width: "60%",
        borderRadius: "5px",
        boxShadow: "0 5px 10px rgba(2, 2, 2, 2.1)",
        backgroundColor: "white",
    }}> 

<h1>Employee's Registration</h1>

<input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search by ID" style={{
        width: "20%",
        height: "30px",
        padding: "10px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginBottom: "20px"
      }}/>

      
      
      
      <ul>
        {filteredEmployees.map((inputs, index) => (
          <li key={index}>
            {editing === index ? (
              <input id={`name-${index}`} type="text" defaultValue={inputs.name} placeholder="name" />
            ) : (
              <span>{inputs.name}</span>
            )}
           
           
            ({editing === index ? (
              <input id={`surname-${index}`} type="text" defaultValue={inputs.position} placeholder="surname" />
            ) : (
              <span>{inputs.surname}</span>
            )})

            ({editing === index ? (
              <input id={`id-${index}`} type="text" defaultValue={inputs.position} placeholder="id" />
            ) : (
              <span>{inputs.position}</span>
            )})

            ({editing === index ? (
              <input id={`email-${index}`} type="text" defaultValue={inputs.position} placeholder="email" />
            ) : (
              <span>{inputs.position}</span>
            )})

           ({editing === index ? (
              <input id={`position-${index}`} type="text" defaultValue={inputs.position} placeholder="position" />
            ) : (
              <span>{inputs.position}</span>
            )})

            ({editing === index ? (
              <input id={`number-${index}`} type="text" defaultValue={inputs.position} placeholder="number" />
            ) : (
              <span>{inputs.position}</span>
            )})



<Remove id={inputs.id}/>
<UserList/>

          
          </li>
        ))}
      </ul>
    </div>
  )
}
export default employee;





















// import React, { useState, useEffect } from 'react';

// const EmployeeList = () => {
//   const [employees, setEmployees] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const storedEmployees = JSON.parse(localStorage.getItem('inputs'));
//     setEmployees(storedEmployees || []);
//   }, []);

//   const handleNext = () => {
//     setCurrentIndex(currentIndex + 1);
//   };

//   const handlePrevious = () => {
//     setCurrentIndex(currentIndex - 1);
//   };
//   const currentEmployee = employees[currentIndex];

//   return (
//     <div style={{
//         display: "flex",
//         flexDirection: "column",
//         alignIitems: "center",
//        //  border: '1px solid #ccc"
//         padding: "15px",
//         margin: "4%",
//         width: "40%",
       
//         borderRadius: "5px",
//         boxShadow: "0 5px 10px rgba(2, 2, 2, 2.1)",
//         backgroundColor: "white",
//     }}>

//  <h1>Employee's Register</h1>
//       {currentEmployee && (
//         <div>
//           <h2>{currentEmployee.name}</h2>
//           <p>{currentEmployee.email}</p>
//           <p>{currentEmployee.phone}</p>
//         </div>
//       )}
//       <button onClick={handlePrevious} disabled={currentIndex === 0}>
//         Previous
//       </button>
//       <button onClick={handleNext} disabled={currentIndex === employees.length - 1}>
//         Next
//       </button>
//     </div>
//   );
// };
// export default EmployeeList;