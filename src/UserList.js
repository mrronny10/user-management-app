// UserList.js
import React, { useState } from 'react';
import EditUserForm from './EditUserForm';
import './Styles.css';

function UserList({ users, updateUser, deleteUser }) {
  const [editingUserId, setEditingUserId] = useState(null);

  const handleEdit = (userId) => {
    setEditingUserId(userId);
  };

  const handleUpdate = (updatedUser) => {
    updateUser(updatedUser);
    setEditingUserId(null);
  };

  const handleDelete = (userId) => {
    deleteUser(userId);
  };

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <div>
            <strong>Name:</strong> {user.name}
          </div>
          <div>
            <strong>Email:</strong> {user.email}
          </div>
          <div>
            <strong>Phone:</strong> {user.phone}
          </div>
          <button onClick={() => handleEdit(user.id)}>Edit</button>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
          {editingUserId === user.id && (
            <EditUserForm user={user} updateUser={handleUpdate} />
          )}
        </li>
      ))}
    </ul>
  );
}

export default UserList;
