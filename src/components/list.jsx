import React, { useState, useEffect } from 'react';
import UpdateForm from './UpdateForm';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  const handleUpdate = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
            <button onClick={() => handleUpdate(user)}>Update</button>
          </li>
        ))}
      </ul>
      {selectedUser && <UpdateForm user={selectedUser} />}
    </div>
  );
};

export default UserList;