import { Link } from 'react-router';

import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Link to='/generate'>generate</Link>
      <Link to='/scan'>scanning</Link>
      <Link to='/generateHistory'>history generate</Link>
      <Link to='/scanHistory'>history scanning</Link>
    </nav>
  );
};

export { Navigation };
