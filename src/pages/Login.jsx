import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { users } from '../data/users';
import './Login.css';
import kfupmLogo from '../assets/kfupm.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle login logic: check email and password, then redirect based on role
  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      setError('');
      if (user.role === 'student') {
        navigate('/student');
      } else if (user.role === 'moderator') {
        navigate('/moderator');
      } else if (user.role === 'admin') {
        navigate('/admin');
      }
    } else {
      setError('Invalid email or password');
    }
  };
  return (
    <div className="login-wrapper">
    <div className="login-left">
      <h1>KFUPM</h1>
      <h1>STUDY HUB</h1>
      <img src={kfupmLogo} alt="KFUPM Logo" />
    </div>
    
    <div className="login-right">
      <div className="login-box">
      <h2>Sign-in</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
      </div> 
    </div>   
  </div>    
  );
}

export default Login;