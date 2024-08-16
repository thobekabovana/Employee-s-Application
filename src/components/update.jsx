import React, { useState } from 'react';

const UpdateForm = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { ...user, name, email, phone };
    const users = JSON.parse(localStorage.getItem('users'));
    const index = users.findIndex((u) => u.id === user.id);
    users[index] = updatedUser;
    localStorage.setItem('users', JSON.stringify(users));
    // You can also send the updated data to your server or API here
    // using fetch or Axios
  };

  return (
    <>
    <div>
      <h1>Employee's Application</h1>
     </div>
     
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
    </>
  );
};

export default UpdateForm;