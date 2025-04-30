import styles from './projectStyles.module.css';

import vtImage from '../../assets/projectImages/valitech.png';


export default function Project4() {
  return (
    <>
      <div className={styles.projectContainer}>

          <p className={styles.projectDescription}>
            Valitech is a small company that works with sterilization and validation of medical equipment.
            <br />
            <br />
            I am working on a readesign of their website, with the purpose of making the site more enjoyable to be on.
            <br />
            The project dosnt involve coding as it will be made in Wordpress instead its about UI/UX.
            <br />
            <br />
            For the project i use my knowlagde of UI/UX, information arhitechture and usertesting.
          </p>
          <img className={styles.projectImage} src={vtImage} alt="Bachelor project image" />

      </div>
    </>
  )}
  