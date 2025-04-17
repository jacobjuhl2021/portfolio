import { Link, useLocation } from 'react-router-dom';

import styled from 'styled-components';


export default function Navbar() {
  const location = useLocation(); // for at markere aktiv side

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">About</Link>
        </li>
        <li className={location.pathname === '/about' ? 'active' : ''}>
          <Link to="/projects">Projekter</Link>
        </li>
      </ul>
    </nav>
  );
}
