import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserTypeToggle from '../components/UserTypeToggle';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';
import { useAuth } from '../contexts/AuthContext';
import './LoginPage.css';

const LoginPage = () => {
  const [userType, setUserType] = useState('traveler');
  const [isRegistering, setIsRegistering] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  React.useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  const handleUserTypeChange = (newType) => {
    setUserType(newType);
  };

  const handleLogin = (loginData) => {
    console.log('Login successful:', loginData);
    // Redirect to home on successful login
    navigate('/');
  };

  const handleRegisterSuccess = () => {
    console.log('Registration successful');
    // Redirect to home on successful registration
    navigate('/');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>{isRegistering ? 'Create Account' : 'Welcome Back'}</h1>
          <p>{isRegistering ? 'Sign up to get started' : 'Sign in to your account'}</p>
        </div>
        
        <div className="login-content">
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

export default LoginPage;