import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // adjust if needed
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { motion } from 'framer-motion';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (email === '' || password === '') {
      setErrorMsg('Please enter both email and password');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setErrorMsg('');
      navigate('/');
    } catch (error) {
      setErrorMsg('Invalid credentials. Please try again.');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        background: 'linear-gradient(to bottom right, #ffecd2, #fcb69f)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        boxSizing: 'border-box',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: 'rgba(255, 255, 255, 0.85)',
          borderRadius: '16px',
          padding: '3rem 2rem',
          maxWidth: '400px',
          width: '100%',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
          backdropFilter: 'blur(8px)',
          border: '1px solid #ddd',
          textAlign: 'center',
        }}
      >
        <h2 style={{ color: '#2c3e50', marginBottom: '2rem' }}>Login</h2>

        <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
          <label htmlFor="email">Email</label>
          <InputText
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%' }}
          />
        </div>

        <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
          <label htmlFor="password">Password</label>
          <Password
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            toggleMask
            feedback={false}
            style={{ width: '100%' }}
          />
        </div>

        {errorMsg && (
          <p style={{ color: 'red', marginBottom: '1rem' }}>{errorMsg}</p>
        )}

        <Button
          label="Login"
          icon="pi pi-sign-in"
          className="p-button-raised p-button-rounded p-button-success"
          style={{ width: '100%', marginBottom: '1rem' }}
          onClick={handleLogin}
        />

        <p>
          Don’t have an account?{' '}
          <span
            onClick={() => navigate('/register')}
            style={{ color: '#007bff', cursor: 'pointer', fontWeight: 500 }}
          >
            Sign Up
          </span>
        </p>
      </motion.div>
    </div>
  );
}

