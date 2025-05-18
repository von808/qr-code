import { Link } from 'react-router';

import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Link to='/qr-code/generate'>generate</Link>
      <Link to='/qr-code/scan'>scanning</Link>
      <Link to='/qr-code/generateHistory'>history generate</Link>
      <Link to='/qr-code/scanHistory'>history scanning</Link>
    </nav>
  );
};

export { Navigation };
