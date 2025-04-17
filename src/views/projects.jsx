import { Link } from 'react-router-dom';
import styles from './projects.module.css';


export default function Projects() {
  return (
    <>
      <header>
        <div className={styles.pageTop}>
            <Link to="/" className="button">Page about me</Link>
          <h1>My Projects</h1>
        </div>
      </header>
      <content>
        <menu />
        <project />
      </content>
    </>
  )}
  