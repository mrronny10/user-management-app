// App.js
import React, { useState } from 'react';
import UserForm from './Userform';
import UserList from './UserList';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const updateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
  };

  const deleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h1>User Management Application</h1>
      <UserForm addUser={addUser} />
      <UserList users={users} updateUser={updateUser} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
