import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './login.module.css';

function Register() {
  const navigate = useNavigate();

  // State for form inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Handle registration
  const handleRegister = async (e) => {
    e.preventDefault();

    // Validate that passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Prepare user data
    const userData = {
      firstName,
      lastName,
      email,
      password
    };

    try {
      // Make the API request to register the user
      const response = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.message || 'Something went wrong!');
      } else {
        // Registration successful, redirect to login
        navigate('/login');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.wrapper}>
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
          <div className={styles['input-box']} id={styles.name}>
            <input 
              type="text" 
              placeholder="First Name" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)} 
              required 
            />
            <input 
              type="text" 
              placeholder="Last Name" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)} 
              required 
            />
          </div>
          <div className={styles['input-box']}>
            <input 
              type="email" 
              placeholder="KFUPM Email" 
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
          <div className={styles['input-box']}>
            <input 
              type="password" 
              placeholder="Confirm Password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" className={styles.btn}>Register</button>
          <div className={styles.register}>
            <p>Have an account? <Link to="/login">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
