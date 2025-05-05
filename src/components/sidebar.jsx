// src/components/Sidebar.js
import React from 'react';
import styles from './Sidebar.module.css'; 

export default function Sidebar({ setActiveProject, activeProject }) { 
  return (
    <nav className={styles.sidebar}>
      {/* <h2>Projects</h2> */}
      <ul>
      <li>
          <span
            className={`${styles.link} ${activeProject === 'Project5' ? styles.active : ''}`} 
            onClick={() => setActiveProject('Project5')} 
          >
            This very portfolio
          </span>
        </li>
      <li>
          <span
            className={`${styles.link} ${activeProject === 'Project4' ? styles.active : ''}`} 
            onClick={() => setActiveProject('Project4')} 
          >
            Valitech - Redesign(ongoing)
          </span>
        </li>
        <li>
          <span
            className={`${styles.link} ${activeProject === 'Project3' ? styles.active : ''}`} 
            onClick={() => setActiveProject('Project3')} 
          >
            BIEZY - Bachelor project
          </span>
        </li>
        <li>
          <span
            className={`${styles.link} ${activeProject === 'Project2' ? styles.active : ''}`} 
            onClick={() => setActiveProject('Project2')} 
          >
            Ordbogen A/S - internship
          </span>
        </li>
        <li>
          <span
            className={`${styles.link} ${activeProject === 'Project1' ? styles.active : ''}`} 
            onClick={() => setActiveProject('Project1')} 
          >
            Geografisk have - Project
          </span>
        </li>
      </ul>
    </nav>
  );
}