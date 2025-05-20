import styles from './about.module.css';
import { Link } from 'react-router-dom';
import cvImage from '../assets/mebg.png';
import cvFile from '../assets/cv.pdf';


export default function About() {
  
    return (
    
      <section>
        
          <div className={styles.flexContainer}>
            <div className={styles.subFlexContainer}>
              <h3 className={styles.header} >Hi, I’m Jacob Juhl🌮 </h3>
              <p className={styles.paragraph}>
                I develop web applications – frontend and backend.
                <br />
                I’ve toyed with Linux servers💻
                <br />
                I live in Odense and studied it at UCL.
                <br /><br />
                I like coding in HTML, CSS, JS (Vue.js & React), and PHP (Laravel).
                <br />
                I like teamwork, comradery, and good communication.
                <br />
                <span className={styles.inline}>I dislike overselling myself.</span>
              </p>
              <ul className={styles.list}>
                <li>
                  Research me more here:
                </li>
                <li className={styles.liLink}>
                  <span
                    onClick={() => window.open('https://github.com/jacobjuhl2021', '_blank')}>
                    &#8618; Github
                  </span>
                </li>
                <li className={styles.liLink}>
                  <span
                    onClick={() => window.open('https://www.linkedin.com/in/jacob-h%C3%B8jer-juhl-181b6521b/', '_blank')}>
                    &#8618; LinkedIn
                  </span>
                </li>
                <li className={styles.liLink}>
                  <span
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = cvFile;
                      link.download = 'Jacob_Juhl_CV.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    &#8618; Download my CV/Resume
                  </span>
                </li>
                <li>
                  Or send me a mail at: Jacobjuhlprivat@gmail.com
                </li>
              </ul>
              
              <div>
                <p> Click here to see what i have previously made:</p>
                <Link to="/projects" className="button">Projects📖</Link>
              </div>

            </div>
            <img src={cvImage} alt="Jacob Juhl CV" className={styles.cvImage} />
          </div>
      </section>
    );
  }
  