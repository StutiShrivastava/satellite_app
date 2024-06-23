import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/actions/authActions';
import '../css/Login.css';
import '../css/Home.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username: formData.username }));
    navigate('/home');
  };
  

  return (
    <div className="login-page">
    <div className='login-container'>
      <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="input-container">
          <label htmlFor="username">Username:</label>
          <input 
          type="text" 
          id="username" 
          name="username"
          value={formData.username}
          onChange={handleChange}
          required />
        </div>
        <div className="input-container">
        <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
    </div>
  );
};

export default Login;
