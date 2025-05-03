import styles from './login.module.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/student');
  };

  return (
    <div className={styles.loginContainer}>
        <div className={styles.wrapper}>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div className={styles["input-box"]}>
                <input type="text" placeholder="Email" required />
                </div>
                <div className={styles["input-box"]}>
                <input type="password" placeholder="Password" required />
                </div>
                <div className={styles["rem-forg"]}>
                <label><input type="checkbox" /> Remember me</label>
                <Link to="/forgot-password">Forgot password?</Link>
                </div>
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