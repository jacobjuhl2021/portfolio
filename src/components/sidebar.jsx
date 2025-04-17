// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css'; // Tilføj din CSS-styling

export default function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <ul>
        <li>
          <Link to="/projects/project1" className={styles.link}>Project 1</Link>
        </li>
        <li>
          <Link to="/projects/project2" className={styles.link}>Project 2</Link>
        </li>
        <li>
          <Link to="/projects/project3" className={styles.link}>Project 3</Link>
        </li>
      </ul>
    </nav>
  );
}
