import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = ({ userType, onSubmit }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({
        ...formData,
        userType
      });
    } else {
      // Default behavior - console.log for now
      console.log('Login attempt:', {
        email: formData.email,
        password: formData.password,
        userType: userType
      });
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-input"
          placeholder="Enter your email"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="form-input"
          placeholder="Enter your password"
          required
        />
      </div>
      
      <button type="submit" className="login-button">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
