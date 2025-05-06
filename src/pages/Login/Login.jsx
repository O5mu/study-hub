import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useApi from '../../hooks/useAPI.js';
import styles from './login.module.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!email || !password) {
      setFormError('Please fill in all fields');
      return;
    }

    try {
      // Make a POST request to your backend to validate the login
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        setFormError(result.message || 'Login failed. Please try again.');
        return;
      }

      // If login is successful, redirect based on user role
      const { role } = result.user;
      if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/student');
      }
    } catch (err) {
      setFormError('An error occurred. Please try again.');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.wrapper}>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className={styles['input-box']}>
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className={styles['input-box']}>
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          {formError && <p style={{ color: 'red' }}>{formError}</p>}
          <button type="submit" className={styles.btn}>Login</button>
          <div className={styles.register}>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
