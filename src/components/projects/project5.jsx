import styles from './projectStyles.module.css';

import pImage from '../../assets/projectImages/portfolio.png';


export default function Project5() {
  return (
    <>
      <div className={styles.projectContainer}>

          <p className={styles.projectDescription}>
            This portfolio
            <br />
            <br />
            This portfolio is a project that ive done after graduating from UCL. 
            <br />
            Ive made it to showcase what i have made as a developer.
            <br />
            <br />
            For this project i have used React without a backend or database, given that the scope of this project really didnt need it, since i also didnt want to add any extra needless flair.
            <li className={styles.liLink}>
                  <span
                    onClick={() => window.open('https://github.com/jacobjuhl2021/portfolio', '_blank')}>
                    &#8618; Github Repository
                  </span>
            </li>
          </p>
          <img className={styles.projectImage} src={pImage} alt="Bachelor project image" />

      </div>
    </>
  )}
  