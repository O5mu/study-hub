import styles from './login.module.css';
import { Link } from 'react-router-dom';

function Forget() {
  return (
    <div className={styles.loginContainer}>
    <div className={styles.wrapper}>
      <h1>Forgot Password</h1>
      <form action="">
        <div className={styles["input-box"]}>
          <input type="text" placeholder="KFUPM Email" required />
        </div>
        <button type="submit" className={styles.btn}>Send</button>
        <div className={styles.register}>
          <p><Link to="/login">&lt; Back to Login</Link></p>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Forget;