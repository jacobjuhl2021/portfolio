import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';



export default function Navbar() {
  const location = useLocation(); // for at markere aktiv side

  return (
    <nav className={styles.nav}>
        <button className={location.pathname === '/' ? styles.active : ''}>
          <Link to="/">About me</Link>
        </button>
        <button className={location.pathname === '/projects' ? styles.active : ''}>
          <Link to="/projects">Projekter</Link>
        </button>
    </nav>
  );
}
