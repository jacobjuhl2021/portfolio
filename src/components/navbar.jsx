import { Link, useLocation } from 'react-router-dom';


export default function Navbar() {
  const location = useLocation(); // for at markere aktiv side

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Forside</Link>
        </li>
        <li className={location.pathname === '/about' ? 'active' : ''}>
          <Link to="/about">Om os</Link>
        </li>
      </ul>
    </nav>
  );
}
