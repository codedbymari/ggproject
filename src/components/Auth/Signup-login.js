// src/components/Auth/Authmodal.js

import React, { useState, useRef } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import './Signup-login.css';

const AuthModal = ({ isOpen, onClose, activeTab, setActiveTab }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  if (!isOpen) return null;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    if (passwordInputRef.current) {
      passwordInputRef.current.focus();
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setShowForgotPassword(true);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    //  implement the password reset logic
    console.log('Password reset requested for:', resetEmail);
    // Show success message or handle accordingly
    alert(`Password reset link sent to ${resetEmail}`);
    setShowForgotPassword(false);
    setResetEmail('');
  };

  const handleBackToLogin = () => {
    setShowForgotPassword(false);
  };

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={e => e.stopPropagation()}>
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        
        <div className="auth-modal-header">
          <h2>Create account or login</h2>
        </div>
        
        {!showForgotPassword ? (
          <>
            <div className="auth-modal-tabs">
              <button 
                className={`auth-modal-tab ${activeTab === 'login' ? 'active' : ''}`}
                onClick={() => setActiveTab('login')}
                aria-selected={activeTab === 'login'}
                role="tab"
              >
                Login
              </button>
              <button 
                className={`auth-modal-tab ${activeTab === 'signup' ? 'active' : ''}`}
                onClick={() => setActiveTab('signup')}
                aria-selected={activeTab === 'signup'}
                role="tab"
              >
                Sign Up
              </button>
            </div>
            
            <div className="auth-modal-content" role="tabpanel">
              {activeTab === 'login' ? (
                <form className="login-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      ref={emailInputRef}
                      placeholder="Enter your email" 
                      required
                      autoComplete="email"
                    />
                  </div>
                  
                  <div className="form-group">
                    <div className="password-label-group">
                      <label htmlFor="password">Password</label>
                      <button 
                        type="button" 
                        className="forgot-password-link" 
                        onClick={handleForgotPassword}
                      >
                        Forgot password?
                      </button>
                    </div>
                    <div className="password-input-wrapper">
                      <input 
                        type={showPassword ? "text" : "password"} 
                        id="password" 
                        ref={passwordInputRef}
                        placeholder="Enter your password" 
                        required
                        autoComplete="current-password"
                      />
                      <button 
                        type="button"
                        className="toggle-password-btn"
                        onClick={togglePasswordVisibility}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                      </button>
                    </div>
                  </div>
                  
                  <div className="form-actions">
                    <div className="auth-buttons-container">
                      <button type="submit" className="auth-btn">Login</button>
                      <div className="vertical-divider">
                      </div>
                      <button type="button" className="google-btn">
                        <svg className="google-icon" viewBox="0 0 24 24">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Login with Google
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="Enter your full name" 
                      required
                      autoComplete="name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="signup-email">Email</label>
                    <input 
                      type="email" 
                      id="signup-email" 
                      placeholder="Enter your email" 
                      required
                      autoComplete="email"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="signup-password">Password</label>
                    <div className="password-input-wrapper">
                      <input 
                        type={showPassword ? "text" : "password"} 
                        id="signup-password" 
                        placeholder="Create a password" 
                        required
                        autoComplete="new-password"
                      />
                      <button 
                        type="button"
                        className="toggle-password-btn"
                        onClick={togglePasswordVisibility}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                      </button>
                    </div>
                  </div>
                  
                  <div className="form-actions">
                    <div className="auth-buttons-container">
                      <button type="submit" className="auth-btn">Create Account</button>
                      <div className="vertical-divider">
                      </div>
                      <button type="button" className="google-btn">
                        <svg className="google-icon" viewBox="0 0 24 24">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Sign up with Google
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </>
        ) : (
          <div className="forgot-password-container">
            <button 
              className="back-to-login" 
              onClick={handleBackToLogin}
              aria-label="Back to login"
            >
              ← Back to login
            </button>
            
            <h3>Reset Your Password</h3>
            <p>Enter your email address and we'll send you a link to reset your password.</p>
            
            <form onSubmit={handleResetPassword}>
              <div className="form-group">
                <label htmlFor="reset-email">Email Address</label>
                <input 
                  type="email" 
                  id="reset-email" 
                  placeholder="Enter your email" 
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  required
                  autoFocus
                />
              </div>
              
              <button type="submit" className="auth-btn">Send Reset Link</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;