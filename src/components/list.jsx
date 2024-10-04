import React, { useState } from "react";



function Myteam() {

  const [List, setList] = useState(JSON.parse(localStorage.getItem("employees")));
  const [editing, setEditing] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState(List);

  const handleEdit = (index) => {
    setEditing(index);
  };

  const handleSave = (index) => {
    const updatedList = [...List];
    updatedList[index].name = document.getElementById(`name-${index}`).value;
    updatedList[index].position = document.getElementById(`position-${index}`).value;
    setList(updatedList);
    localStorage.setItem("employees", JSON.stringify(updatedList));
    setEditing(null);
  };

  const handleDelete = (index) => {
    console.log(`Delete button clicked for employee ${List[index].name}`);
    const updatedList = List.filter((employee, i) => i !== index);
    setList(updatedList);
    localStorage.setItem("employees", JSON.stringify(updatedList));
    window.location.reload();
  };
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredList = List.filter((employee) => {
      return employee.id.toString().includes(e.target.value);
    });
    setFilteredEmployees(filteredList);
  };
  return (
    <div className="Team" style={{
      backgroundColor: "white",
      width: "100%",
      height: "400px",
      marginTop: "-410px",
      borderRadius: "20px",
       marginLeft:"140px",
      padding:"60px",
      boxShadow:"11px 11px rgb(124, 151, 142",
       borderStyle:"solid",
       borderColor:"green"
    }}>
      <h1 style={{
        color: "green",
        marginLeft: "150px",
      }} id="back">My Team</h1>
      <br></br>
      <br></br>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search by ID" style={{
        width: "100%",
        height: "30px",
        padding: "10px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginBottom: "20px"
      }}/>
      <ul style={{
        position:"absolute",
        marginTop:"40px"
      }}>
        {filteredEmployees.map((input, index) => (
          <li key={index}>
            {editing === index ? (
              <input id={`name-${index}`} type="text" defaultValue={input.name} placeholder="name" />
            ) : (
              <span>{input.name}</span>
            )}
<br></br>
            ({editing === index ? (
              <input id={`position-${index}`} type="text" defaultValue={input.position} placeholder="position" />
            ) : (
              <span>{input.position}</span>
            )})
<br></br>
            ({editing === index ? (
              <input  id={`email-${index}`} type="text" defaultValue={input.email} placeholder="email" />
            ) : (
              <span
              >{input.email}</span>
            )})
<br></br>
              ({editing === index ? (
              <input  id={`password-${index}`} type="text" defaultValue={input.password} placeholder="password" />
            ) : (
              <span
              >{input.password}</span>
            )})
            <br></br>
            <div className="btn">
              {editing === index ? (
                <button style={{
                  backgroundColor: "greenyellow",
                  borderColor: "white",
                  height: "20px",
                  width: "100px",
                  borderRadius: "10px",
                  marginRight: "-30px",
                  color:"green"
                }} onClick={() => handleSave(index)}>Save</button>
              ) :
              (
                <button style={{
                  backgroundColor: "greenyellow",
                  borderColor: "white",
                  height: "20px",
                  width: "100px",
                  borderRadius: "10px",
                  marginRight: "-30px",
                  color:"green"
                }} onClick={() => handleEdit(index)}>Edit</button>
              )}
              <button style={{
                backgroundColor: "red",
                borderColor: "white",
                height: "20px",
                width: "100px",
                borderRadius: "10px",
                marginLeft: "30px",
                color:"white"
              }} onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Myteam;

// import React, { useState, useEffect } from 'react';
// import UpdateForm from './update';

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);

//   useEffect(() => {
//     const storedUsers = localStorage.getItem('inputs');
//     if (storedUsers) {
//       setUsers(JSON.parse(storedUsers));
//     }
//   }, []);

//   const handleUpdate = (user) => {
//     setSelectedUser(user);
//   };

//   return (
//     <div>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             {user.name} ({user.email})
//             <button onClick={() => handleUpdate(user)}>Update</button>
//           </li>
//         ))}
//       </ul>
//       {selectedUser && <UpdateForm user={selectedUser} />}
//     </div>
//   );
// };

// export default UserList;