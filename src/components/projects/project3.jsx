import styles from './projectStyles.module.css';

import baImage from '../../assets/projectImages/BA-project.png';


export default function Project3() {
  return (
    <>
      <div className={styles.projectContainer}>

          <p className={styles.projectDescription}>
            BIEZY - was my bachelor project i made with a classmate of mine. 
            <br />
            <br />
            The project was to make a Business Intelligence tool for small to medium sized businesses.
            <br />
            The purpose of Biezy was to make Business Intelligence easy and accessible without hiring a data scientist.
            <br />
            <br />
            For the project we used the following technologies:
            <br />
            <ul>
              <li>Vue.js - For the frontend</li>
              <li>Laravel - For the Backend</li>
              <li>MySQL - For the database with datawarehouse architechture</li>
            </ul>
            <br />
            All of this was hosted on a VPS (Virtual Private Server) that i set up with a LAMP stack (Linux, Apache, MySQL, PHP) and used phpmyadmin as the DBMS.
            <li className={styles.liLink}>
                  <span
                    onClick={() => window.open('https://github.com/jacobjuhl2021/Bachelor_BI', '_blank')}>
                    &#8618; Github Repository - Backend
                  </span>
            </li>
            <li className={styles.liLink}>
                  <span
                    onClick={() => window.open('https://github.com/Nikolaihoej/BA-BI-frontend', '_blank')}>
                    &#8618; Github Repository - Frontend
                  </span>
            </li>
            </p>
          <img className={styles.projectImage} src={baImage} alt="Bachelor project image" />

      </div>
    </>
  )}
  