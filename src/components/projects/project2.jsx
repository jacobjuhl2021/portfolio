import styles from './projectStyles.module.css';

import ordbogenImage from '../../assets/projectImages/ordbogen.png';


export default function Project3() {
  return (
    <>
      <div className={styles.projectContainer}>

          <p className={styles.projectDescription}>
            Internship at Ordbogen A/S
            <br />
            <br />
            During the 3. semester of my webdeveloper education, I had an internship at Ordbogen A/S.
            During the internship my classmate and i had been given the task of creating a Business Intelligence tool for the sales department.
            <br />
            <br />
            For the project we used the following technologies:
            <br />
            <ul>
              <li>Vue.js - For the frontend</li>
              <li>PHP - For the Backend</li>
              <li>SQL - For the database</li>
            </ul>
            <br />
            The project ended in a succes with a finished product for the sales department.
          </p>
          <img className={styles.projectImage} src={ordbogenImage} alt="Bachelor project image" />

      </div>
    </>
  )}
  