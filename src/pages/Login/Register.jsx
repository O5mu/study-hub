import styles from './login.module.css';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className={styles.loginContainer}>
    <div className={styles.wrapper}>
      <h1>Register</h1>
      <form action="">
        <div className={styles["input-box"]} id={styles.name}>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <div className={styles["input-box"]}>
          <input type="text" placeholder="KFUPM Email" required />
        </div>
        <div className={styles["input-box"]}>
          <input type="password" placeholder="Password" required />
        </div>
        <div className={styles["input-box"]}>
          <input type="password" placeholder="Confirm Password" required />
        </div>
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