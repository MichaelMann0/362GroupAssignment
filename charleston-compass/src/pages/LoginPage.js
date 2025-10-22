import React, { useState } from 'react';
import UserTypeToggle from '../components/UserTypeToggle';
import LoginForm from '../components/LoginForm';
import './LoginPage.css';

const LoginPage = () => {
  const [userType, setUserType] = useState('traveler');

  const handleUserTypeChange = (newType) => {
    setUserType(newType);
  };

  const handleLogin = (loginData) => {
    console.log('Login attempt:', loginData);
    // Here you would typically make an API call to authenticate the user
    // For now, we'll just log the data as specified in the requirements
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Sign in to your account</p>
        </div>
        
        <div className="login-content">
          <UserTypeToggle 
            onToggle={handleUserTypeChange}
            defaultType={userType}
          />
          
          <LoginForm 
            userType={userType}
            onSubmit={handleLogin}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
