import React, { useState, useEffect } from 'react'
import EmployeesForm from '../Pages/EmployeesForm'
import EmployeeForm from '../Pages/EmployeesForm'
import EmployeesCard from '../Pages/Card';


export default function EmployeesList() {

    
  const [inputs, setInputs] = useState({
    name: '',
    surname: '',
    email: '',
    number: '',
    position: '',
    id: '',
  });

  useEffect(() => {
    const storedData = localStorage.getItem('employees');
    if (storedData) {
      setInputs(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(inputs));
  }, [inputs]);

//   const [employees, setEmployees] = useState([]);
//   const [employee, setEmployee] = useState({ name: '', email: '', phone: '', position: '' });

  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  const handleSubmit = (event) => {
    // console.log(data.current.value)
    // localStorage.setItem(data.current.value)
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
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

    const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({ name: '', email: '', phone: '', position: '' });
  useEffect(() => {
    const storedEmployees = localStorage.getItem('employeesData');
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);
//   useEffect(() => {
//     localStorage.setItem('employeesData', JSON.stringify(employees));
//   }, [employees]);
//   const handleAddEmployee = (newEmployee) => {
//     setEmployees([...employees, newEmployee]);
//     setEmployee({ name: '', email: '', phone: '', position: '' });
//   };
//   const handleDeleteEmployee = (id) => {
//     setEmployees(employees.filter((employee, index) => index !== id));
//   };
 
    // const {employees} = useState({EmployeesForm})

    const [inputs, setInputs] = useState({});
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const storedEmployees = localStorage.getItem('employees');
        if (storedEmployees) {
          setEmployees(JSON.parse(storedEmployees));
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employees));
      }, [employees]);
    
      const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        setEmployees([...employees, inputs]);
        localStorage.setItem('employees', JSON.stringify([...employees, inputs])); // store the updated employees array in local storage
        alert("successfully Registered");
        setInputs({});
        window.location.reload();
      }
    
      const handleDeleteEmployee = (index) => {
        setEmployees(employees.filter((_, i) => i !== index));
      }

  return (
    <div>
          <ul>
       
          {/* <EmployeeForm
        employee={employee}
        setEmployee={setEmployee}
        handleAddEmployee={handleAddEmployee}
      /> */}
      
      {employees.map((employee, index) => (
        <EmployeesCard
          key={index}
          employee={employee}
          handleDeleteEmployee={() => handleDeleteEmployee(index)}
        />
      ))}
      </ul>
    </div>
  )
}
