import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './style.module.scss';
export function SignInButton() {
  const isUserLoggedIn = true;
  return isUserLoggedIn ? (
    <button className={styles.signInButton}>
      <FaGithub className={styles.signInButtonLogged} />
      esterfania
      <FiX className={styles.signInButtonCloseIcon} />
    </button>
  ) : (
    <button className={styles.signInButton}>
      <FaGithub className={styles.signInButtonNotLogged} />
      Sign in with GitHub
    </button>
  );
}
