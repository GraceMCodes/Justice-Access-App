import React, { useState } from 'react';
import api from './api';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/auth/register', { username, password, email });
    alert("Registration Successful!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
