import React, { useState } from 'react'
import EmployeesForm from '../Pages/EmployeesForm'

export default function EmployeesList() {
 
    const {employees} = useState({EmployeesForm})

  return (
    <div>
          <ul>
        {employees.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>{item.surname}</span>
            <span>{item.email}</span>
            <span>{item.position}</span>
            <span>{item.id}</span>
            {/* <button onClick={() => handleDelete(item.id)}>Delete</button> */}
            {/* <button onClick={() => handleEdit(item)}>Edit</button> */}
          </li>
        ))}
      </ul>
    </div>
  )
}
