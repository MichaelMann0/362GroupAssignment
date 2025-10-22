import React, { useState } from 'react';
import UserTypeToggle from './UserTypeToggle';
import LoginForm from './LoginForm';
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose }) => {
  const [userType, setUserType] = useState('traveler');

  const handleUserTypeChange = (newType) => {
    setUserType(newType);
  };

  const handleLogin = (loginData) => {
    console.log('Login attempt:', loginData);
    // Here you would typically make an API call to authenticate the user
    // For now, we'll just log the data as specified in the requirements
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="login-modal-overlay" onClick={handleClose}>
      <div className="login-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="login-modal-close" onClick={handleClose}>
          <i className="fas fa-times"></i>
        </button>
        
        <div className="login-modal-header">
          <h2>Welcome Back</h2>
          <p>Sign in to your account</p>
        </div>
        
        <div className="login-modal-body">
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

export default LoginModal;
