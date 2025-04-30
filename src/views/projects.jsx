import { Link } from 'react-router-dom';
import { useState } from 'react'; // Import useState
import styles from './projects.module.css';
import Sidebar from '../components/sidebar'; // Import Sidebar-komponenten
import Project1 from '../components/projects/project1'; // Import Project1
import Project2 from '../components/projects/project2'; // Import Project2
import Project3 from '../components/projects/project3'; // Import Project3

export default function Projects() {
  const [activeProject, setActiveProject] = useState('Project1'); // State for aktivt projekt

  const renderActiveProject = () => {
    switch (activeProject) {
      case 'Project1':
        return <Project1 />;
      case 'Project2':
        return <Project2 />;
      case 'Project3':
        return <Project3 />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className={styles.pageTop}>
        <Link to="/" className="button">Page about me</Link>
        <h1>My Projects</h1>
      </div>

      <div className={styles.container}>
        <div className={styles.navContainer}>
          {/* Pass both setActiveProject and activeProject to Sidebar */}
          <Sidebar setActiveProject={setActiveProject} activeProject={activeProject} />
        </div>
        
        <div className={styles.contentContainer}>
          {renderActiveProject()} {/* Render det aktive projekt */}
        </div>
      </div>
    </>
  );
}