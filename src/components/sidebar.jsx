import React, { useState } from 'react';
import styles from './sidebar.module.css'; 

export default function Sidebar({ setActiveProject, activeProject }) { 
  const [open, setOpen] = useState(false);

  // Luk menu når der vælges et projekt (på mobil)
  const handleSelect = (project) => {
    setActiveProject(project);
    setOpen(false);
  };

  return (
    <nav className={styles.sidebar}>
      {/* Burger menu knap */}
      <button 
        className={styles.burger} 
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className={styles.burgerBar}></span>
        <span className={styles.burgerBar}></span>
        <span className={styles.burgerBar}></span>
      </button>
      <ul className={`${styles.menu} ${open ? styles.open : ''}`}>
        {/* Luk-knap kun på mobil */}
        <li>
          <span
            className={`${styles.link} ${activeProject === 'Project5' ? styles.active : ''}`} 
            onClick={() => handleSelect('Project5')} >
            This very portfolio
          </span>
        </li>
        <li>
          <span
            className={`${styles.link} ${activeProject === 'Project4' ? styles.active : ''}`} 
            onClick={() => handleSelect('Project4')} >
            Valitech - Redesign(ongoing)
          </span>
        </li>
        <li>
          <span
            className={`${styles.link} ${activeProject === 'Project3' ? styles.active : ''}`} 
            onClick={() => handleSelect('Project3')} >
            BIEZY - Bachelor project
          </span>
        </li>
        <li>
          <span
            className={`${styles.link} ${activeProject === 'Project2' ? styles.active : ''}`} 
            onClick={() => handleSelect('Project2')} >
            Ordbogen A/S - internship
          </span>
        </li>
        <li>
          <span
            className={`${styles.link} ${activeProject === 'Project1' ? styles.active : ''}`} 
            onClick={() => handleSelect('Project1')} >
            Geografisk have - Project
          </span>
        </li>
        <li>
          <button onClick={() => setOpen(false)} aria-label="Luk menu" type="button">
            &times;
          </button>
        </li>
      </ul>
    </nav>
  );
}