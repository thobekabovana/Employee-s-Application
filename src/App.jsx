import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import UserList from './components/list'
import Employee from './components/Dislay'





function App (){
  const [inputs, setInputs] = useState({})


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  
  
 function employer(){
    const worker = localStorage.getItem("inputs");
    let employees = worker ? JSON.parse(worker):[]
    console.log(worker)
    employees.push(inputs)
    localStorage.setItem("inputs", JSON.stringify(employees))
    // console.log(inputs)
      }

  
  const handleSubmit = (event) => {
    event.preventDefault();
    employer(inputs)
    console.log(inputs);
    alert("successfully Registered");
    window.location.reload();
  }

  
    



  return (
    <>
    <div>
      <h1>Employee's Application</h1>
     </div>
     <input type="search" id="search" name="search" placeholder='Search'></input>
   <div>

     <form onSubmit={handleSubmit}>
      <div>
  <label htmlFor="name">Name:</label>
  <input type="text" id="name" name="name" value={inputs.name || ""} onChange={handleChange}></input>
 
  
  <label htmlFor="surname">Surname:</label>
  <input type="text" id="surname" name="surname"  value={inputs.surname || ""} onChange={handleChange}></input>
  
  <label htmlFor="email">Email Adress</label>
  <input type='text' id='email' name='email'  value={inputs.email || ""} onChange={handleChange}></input>
  
  <label htmlFor="number">Phone number</label>
  <input type='text' id='number' name='number'  value={inputs.number || ""} onChange={handleChange}></input>
  
  <label htmlFor="position">Position</label>
  <input type='text' id='position' name='position'  value={inputs.position || ""} onChange={handleChange}></input>
  
  <label htmlFor="id">ID no.</label>
  <input type='text' id='id' name='id'  value={inputs.id || ""} onChange={handleChange}></input>
  </div>

  <button className="create">Submit</button>

 



  
</form>
</div>
     

<Employee/>
{/* <UserList/> */}

    </>
  )
}

export default App
