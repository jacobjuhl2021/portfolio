// src/components/Sidebar.js
import React from 'react';
import styles from './Sidebar.module.css'; // Tilføj din CSS-styling

export default function Sidebar({ setActiveProject, activeProject }) { // Modtag activeProject som prop
  return (
    <nav className={styles.sidebar}>
      {/* <h2>Projects</h2> */}
      <ul>
      <li>
          <span
            className={`${styles.link} ${activeProject === 'Project5' ? styles.active : ''}`} // Tilføj aktiv klasse
            onClick={() => setActiveProject('Project5')} // Opdater aktivt projekt
          >
            Thiv very portfolio
          </span>
        </li>
      <li>
          <span
            className={`${styles.link} ${activeProject === 'Project4' ? styles.active : ''}`} // Tilføj aktiv klasse
            onClick={() => setActiveProject('Project4')} // Opdater aktivt projekt
          >
            Valitech - Redesign(ongoing)
          </span>
        </li>
        <li>
          <span
            className={`${styles.link} ${activeProject === 'Project3' ? styles.active : ''}`} // Tilføj aktiv klasse
            onClick={() => setActiveProject('Project3')} // Opdater aktivt projekt
          >
            BIEZY - Bachelor project
          </span>
        </li>
        <li>
          <span
            className={`${styles.link} ${activeProject === 'Project2' ? styles.active : ''}`} // Tilføj aktiv klasse
            onClick={() => setActiveProject('Project2')} // Opdater aktivt projekt
          >
            Ordbogen A/S - internship
          </span>
        </li>
        <li>
          <span
            className={`${styles.link} ${activeProject === 'Project1' ? styles.active : ''}`} // Tilføj aktiv klasse
            onClick={() => setActiveProject('Project1')} // Opdater aktivt projekt
          >
            Geografisk have - Project
          </span>
        </li>
      </ul>
    </nav>
  );
}