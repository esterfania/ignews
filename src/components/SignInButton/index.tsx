import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, useSession, signOut } from 'next-auth/client';

import styles from './style.module.scss';

export function SignInButton() {
  const [session] = useSession();
  return session ? (
    <button className={styles.signInButton} onClick={() => signOut()}>
      <FaGithub className={styles.signInButtonLogged} />
      {session.user.name}
      <FiX className={styles.signInButtonCloseIcon} />
    </button>
  ) : (
    <button className={styles.signInButton} onClick={() => signIn('github')}>
      <FaGithub className={styles.signInButtonNotLogged} />
      Sign in with GitHub
    </button>
  );
}
