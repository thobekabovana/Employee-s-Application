import React, { useState, useEffect } from 'react';
import '../index.css'
import background from '../assets/images/360_F_657874794_myYcKACL3ipw93UHYnsBlWgwSudZdjrH.jpg'

export default function EmployeesForm() {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    employer(inputs);
    console.log(inputs);
    alert("successfully Registered");
    window.location.reload();
  }

  function employer(data) {
    const storedData = localStorage.getItem('employeesData');
    let employees = storedData ? JSON.parse(storedData) : [];
    employees.push(data);
    localStorage.setItem('employeesData', JSON.stringify(employees));
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  return (
    <>
      <div style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "120vh"
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

        {/* Your list component here */}

      </div>
    </>
  )
}