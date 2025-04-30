import styles from './projectStyles.module.css';

import ghImage from '../../assets/projectImages/geografiskhave.jpg';


export default function Project1() {
  return (
    <>
      <div className={styles.projectContainer}>

          <p className={styles.projectDescription}>
            Geografisk have is a project that I did in my 2. semester of my webdeveloper education.
            <br />
            <br />
            The project was to accept a handover from one of the other classes at UCL and develop it.
            <br />
            The project involved a CMS and a interactive map where the user could see diffrent locations in the garden
            <br />
            <br />
            For the project we used the following technologies:
            <br />
            <ul>
              <li>Vue.js - For the frontend</li>
              <li>Leaflet - For interactive maps</li>
              <li>Firebase - For the database</li>
            </ul>
            <li className={styles.liLink}>
                  <span
                    onClick={() => window.open('https://github.com/WEB-Team5-2024/Geografisk-Have-Team5', '_blank')}>
                    &#8618; Github Repository
                  </span>
            </li>
          </p>
          
          <img className={styles.projectImage} src={ghImage} alt="Bachelor project image" />

      </div>
    </>
  )}
  