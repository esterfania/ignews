import { SignInButton } from '../SignInButton';
import styles from './style.module.scss';
export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src='/images/logo.svg' />
        <nav className={styles.headerNavbar}>
          <a
            className={`${styles.headerLink} ${styles.headerLinkActive}`}
            href=''
          >
            Home
          </a>
          <a className={styles.headerLink} href=''>
            Posts
          </a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
