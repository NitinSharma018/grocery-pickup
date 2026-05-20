import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

export default function Auth() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleAuth = async () => {
    if (!email || !password || (!isLogin && !name)) {
      setError('⚠️ Please fill all required fields.');
      return;
    }

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }

      setError('');
      navigate('/'); // ✅ Redirect after login/register
    } catch (err) {
      setError(`❌ ${err.message}`);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setEmail('');
    setPassword('');
    setName('');
    setError('');
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>{isLogin ? 'Welcome Back!' : 'Create an Account'}</h2>

        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button onClick={handleAuth} style={buttonStyle}>
          {isLogin ? 'Login' : 'Register'}
        </button>

        <p style={switchText}>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <a href={isLogin ? '/register' : '/login'} style={linkStyle}>
            {isLogin ? 'Register' : 'Login'}
          </a>
        </p>

        <button onClick={handleLogout} style={logoutStyle}>
          Logout
        </button>

        {error && <p style={errorStyle}>{error}</p>}
      </div>
    </div>
  );
}

// 🌟 CSS-in-JS Styles

const pageStyle = {
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #fceabb, #f8b500)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
};

const cardStyle = {
  background: 'rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  borderRadius: '20px',
  padding: '2.5rem',
  width: '360px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
  color: '#333',
  textAlign: 'center',
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  margin: '10px 0',
  borderRadius: '8px',
  border: '1px solid #ccc',
  outline: 'none',
  transition: 'all 0.3s ease',
  fontSize: '16px',
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  background: '#4caf50',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  marginTop: '10px',
  transition: 'background 0.3s ease',
};

const logoutStyle = {
  ...buttonStyle,
  background: '#f44336',
};

const titleStyle = {
  marginBottom: '1.5rem',
  fontWeight: '600',
  fontSize: '1.8rem',
};

const errorStyle = {
  color: '#b00020',
  marginTop: '1rem',
  fontSize: '14px',
};

const linkStyle = {
  color: '#007bff',
  textDecoration: 'none',
  fontWeight: 'bold',
};

const switchText = {
  marginTop: '1rem',
  fontSize: '14px',
};
