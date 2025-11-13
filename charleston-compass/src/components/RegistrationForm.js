import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import './LoginForm.css'; // Reuse the same styles

const RegistrationForm = ({ userType, onSuccess, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { register, error } = useAuth();
  const [localError, setLocalError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setLocalError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError('');
    setIsLoading(true);

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setLocalError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setLocalError('Password must be at least 6 characters');
      setIsLoading(false);
      return;
    }

    try {
      const user = await register(formData.email, formData.password, formData.name, userType);
      console.log('Registration successful:', user);
      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      console.error('Registration error:', err);
      setLocalError(err.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      {/* Sign in link */}
      {onSwitchToLogin && (
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '24px', 
          padding: '12px',
          background: '#f0f8f5',
          borderRadius: '8px',
          border: '1px solid #006A4E'
        }}>
          <p style={{ margin: 0, fontSize: '0.95em', color: '#2c3e50' }}>
            Already have an account?{' '}
            <button
              type="button"
              onClick={onSwitchToLogin}
              style={{
                background: 'none',
                border: 'none',
                color: '#006A4E',
                cursor: 'pointer',
                textDecoration: 'underline',
                fontWeight: '700',
                fontSize: '1em',
                padding: '0',
                marginLeft: '4px'
              }}
            >
              Sign in here
            </button>
          </p>
        </div>
      )}

      <div className="form-group">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
          placeholder="Enter your name"
          required
          disabled={isLoading}
        />
      </div>

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
          disabled={isLoading}
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
          placeholder="Enter your password (min 6 characters)"
          required
          disabled={isLoading}
        />
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="form-input"
          placeholder="Confirm your password"
          required
          disabled={isLoading}
        />
      </div>

      {/* Error messages */}
      {(error || localError) && (
        <div style={{
          color: '#d32f2f',
          fontSize: '0.9em',
          marginBottom: '15px',
          padding: '12px',
          background: '#ffebee',
          borderRadius: '8px',
          border: '1px solid #ffcdd2'
        }}>
          <strong>Error:</strong> {localError || error}
        </div>
      )}

      <button 
        type="submit" 
        className="login-button"
        disabled={isLoading}
        style={{
          opacity: isLoading ? 0.7 : 1,
          cursor: isLoading ? 'not-allowed' : 'pointer'
        }}
      >
        {isLoading ? 'Creating Account...' : 'Create Account'}
      </button>
    </form>
  );
};

export default RegistrationForm;