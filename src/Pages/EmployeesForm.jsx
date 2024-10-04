import React, { useState, useEffect, useRef } from 'react';
import '../index.css'
import EmployeesCard from './Card';
import background from '../assets/images/360_F_657874794_myYcKACL3ipw93UHYnsBlWgwSudZdjrH.jpg'
import cover from '../assets/images/strategic-planning-for-success-through-people-business-development-concept-by-choosing-professional-leaders-employee-competency-businessman-holding-magnifying-glass-hrm-or-human-resource-m.jpg'

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

  useEffect(() => {
    const storedData = localStorage.getItem('employees');
    if (storedData) {
      setEmployees(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const handleSubmit = (event) => {
    event.preventDefault();
    employer(inputs);
    console.log(inputs);
    alert("successfully Registered");
    window.location.reload();
  }

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
    setInputs(values => ({...values, [name]: value}))
  }

  const handleDeleteEmployee = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees.splice(index, 1);
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  }

  return (
    <>
      <div style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "120vh",
        flexDirection: "column",
        alignItems: "center",
        padding: "15px",
        margin: "7.5%",
        width: "80%",
        height: "30%",
        borderRadius: "5px",
        boxShadow: "0 5px 10px rgba(2, 2, 2, 2.1)",
      }}>

        <h1>Employee's Application</h1>

        <div className='input-container'>

          <form onSubmit={handleSubmit}>
            <div className='input-field'>

              <input type="text" 
                     id="name" 
                     name="name" 
                     placeholder='Name'
                     value={inputs.name || ""} onChange={handleChange}></input>

              <input type="text" 
                     id="surname" 
                     name="surname"  
                     placeholder='Surname'
                     value={inputs.surname || ""} onChange={handleChange}></input>

              <input type='text' 
                     id='email' 
                     name='email'  
                     placeholder='Email'
                     value={inputs.email || ""} onChange={handleChange}></input>

              <input type='text' 
                     id='number' 
                     name='number'  
                     placeholder='Phone Number'
                     value={inputs.number || ""} onChange={handleChange}></input>

              <input type='text' 
                     id='position' 
                     name='position'  
                     placeholder='Position'
                     value={inputs.position || ""} onChange={handleChange}></input>

              <input type='text' 
                     id='id' 
                     name='id' 
                     placeholder='Employee ID number'
                     value={inputs.id || ""} onChange={handleChange}></input>
            </div>

            <div className='button-container'>
              <button className="button">Submit</button>
            </div>

          </form>

        </div>

        <div>
          <ul>
            <div style={{flexDirection: "column",
              padding: "15px",
              width: "30%",
              height: "30%",
              borderRadius: "5px",
              boxShadow: "0 5px 10px rgba(2, 2, 2, 2.1)",
              backgroundImage: `url(${cover})` ,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center", }}>

              {employees.map((employee, index) => (
                <EmployeesCard
                  key={index}
                  employee={employee}
                  handleDeleteEmployee={() => handleDeleteEmployee(index)}
                />
              ))}
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}