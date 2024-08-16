import React, { useState } from 'react';

const UpdateForm = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [number, setNumber] = useState(user.number);
  const [position, setPosition] = useState(user.position);
  const [id, setId] = useState(user.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { ...user, name, email, number, position, id };
    const users = JSON.parse(localStorage.getItem('users'));
    const index = users.findIndex((u) => u.id === user.id);
    users[index] = updatedUser;
    localStorage.setItem('users', JSON.stringify(users));
    s
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
  <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
 
  
  <label htmlFor="surname">Surname:</label>
  <input type="text" id="surname" name="surname"  value={surname} onChange={(e) => setSurname(e.target.value)}></input>

  <label htmlFor="email">Email Adress</label>
  <input type='text' id='email' name='email'  value={email} onChange={(e) => setEmail(e.target.value)}></input>
  
  <label htmlFor="number">Phone number</label>
  <input type='text' id='number' name='number'  value={number} onChange={(e) => setNumber(e.target.value)}></input>
  
  <label htmlFor="position">Position</label>
  <input type='text' id='position' name='position'  value={position } onChange={(e) => setPosition(e.target.value)}></input>
  
  <label htmlFor="id">ID no.</label>
  <input type='text' id='id' name='id'  value={id} onChange={(e) => setId(e.target.value)}></input>
  </div>

  <button className="create">Submit</button>

 
</form>
</div>
    </>
  );
};

export default UpdateForm;