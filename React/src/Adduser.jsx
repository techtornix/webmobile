import React, { useState, useEffect } from 'react';

const Adduser = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [editId, setEditId] = useState(null);

  const apiUrl = "http://localhost:3000/users";

  // Fetch users
  const fetchUsers = async () => {
    const res = await fetch(apiUrl);
    const data = await res.json();
    setUsers(data.filter(user => user.name && user.email && user.password));
  };


// update function from json file 









  useEffect(() => {
    fetchUsers();
  }, []);

  // Add or update user
  const handleSubmit = async () => {
    const userData = { name, email, password }; 

    if (editId) {
      await fetch(`${apiUrl}/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      setEditId(null);
    } else {
      await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
    }

    // Clear inputs and refresh
    setName('');
    setEmail('');
    setPassword('');
    fetchUsers();
  };

  // Delete user
  const handleDelete = async (id) => {
    await fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    });
    fetchUsers();
  };

  // Load values into input fields
  const handleEdit = (user) => {
    setEditId(user.id);
    setName(user.name);
    setEmail(user.email);
    setPassword(user.password);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>{editId ? 'Update User' : 'Add User'}</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{' '}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />{' '}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />{' '}
      <button onClick={handleSubmit}>
        {editId ? 'Update' : 'Add'}
      </button>

      <h3>User List</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: '8px' }}>
            <strong>{user.name}</strong> - {user.email} - {user.password}{' '}
            <button onClick={() => handleEdit(user)}>Update</button>{' '}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default Adduser;
