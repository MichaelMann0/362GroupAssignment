import React, { useState, useEffect } from 'react';
import UserTypeToggle from './UserTypeToggle';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose }) => {
  const [userType, setUserType] = useState('traveler');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleUserTypeChange = (newType) => {
    setUserType(newType);
  };

  const handleLogin = (loginData) => {
    console.log('Login successful:', loginData);
    // Close modal on successful login
    if (onClose) {
      onClose();
    }
  };

  const handleRegisterSuccess = () => {
    console.log('Registration successful');
    // Close modal on successful registration
    if (onClose) {
      onClose();
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  // Reset registration state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setIsRegistering(false);
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="login-modal-overlay" 
      onClick={handleClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000
      }}
    >
      <div 
        className="login-modal-content" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="login-modal-close" 
          onClick={handleClose}
          aria-label="Close modal"
        >
          <i className="fas fa-times"></i>
        </button>
        
        <div className="login-modal-header">
          <h2>{isRegistering ? 'Create Account' : 'Welcome Back'}</h2>
          <p>{isRegistering ? 'Sign up to get started' : 'Sign in to your account'}</p>
        </div>
        
        <div className="login-modal-body">
          <UserTypeToggle 
            onToggle={handleUserTypeChange}
            defaultType={userType}
          />
          
          {isRegistering ? (
            <RegistrationForm 
              userType={userType}
              onSuccess={handleRegisterSuccess}
              onSwitchToLogin={() => setIsRegistering(false)}
            />
          ) : (
            <LoginForm 
              userType={userType}
              onSubmit={handleLogin}
              onSwitchToRegister={() => setIsRegistering(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;