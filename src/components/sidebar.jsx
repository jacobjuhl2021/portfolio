// src/components/Sidebar.js
import React from 'react';
import styles from './Sidebar.module.css'; // Tilføj din CSS-styling

export default function Sidebar({ setActiveProject }) { // Modtag setActiveProject som prop
  return (
    <nav className={styles.sidebar}>
        <h2>Projects</h2>
      <ul>
      <li>
          <button
            className={styles.link}
            onClick={() => setActiveProject('Project3')} // Opdater aktivt projekt
          >
            Project 3
          </button>
        </li>

        <li>
          <button
            className={styles.link}
            onClick={() => setActiveProject('Project2')} // Opdater aktivt projekt
          >
            Project 2
          </button>
        </li>

        <li>
          <button
            className={styles.link}
            onClick={() => setActiveProject('Project1')} // Opdater aktivt projekt
          >
            Project 1
          </button>
        </li>
      </ul>
    </nav>
  );
}
