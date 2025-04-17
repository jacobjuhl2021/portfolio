import styles from './about.module.css';
import cvImage from '../assets/mebg.png';

export default function About() {
    return (
    
      <section>
        <div className={styles.container}>
          <h3 className={styles.header} >Hi, I’m Jacob Juhl.</h3>
          <div className={styles.flexContainer}>
            <div className={styles.subFlexContainer}>
              <p className={styles.paragraph}>
                I develop web applications – frontend and backend.
                <br />
                I’ve toyed with Linux servers.
                <br />
                I live in Odense and studied it at UCL.
                <br /><br />
                I like coding in HTML, CSS, JS (Vue.js & React), and PHP (Laravel).
                <br />
                I like teamwork, comradery, and good communication.
                <br />
                I dislike overselling myself.
              </p>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <img src={cvImage} alt="Jacob Juhl CV" className={styles.cvImage} />
          </div>
        </div>


      </section>


    );
  }
  