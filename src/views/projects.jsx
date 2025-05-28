import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './projects.module.css';
import Sidebar from '../components/sidebar'; // Import Sidebar-komponenten
import Project1 from '../components/projects/project1'; // Import Project1
import Project2 from '../components/projects/project2'; // Import Project2
import Project3 from '../components/projects/project3'; // Import Project3
import Project4 from '../components/projects/project4'; // Import Project4
import Project5 from '../components/projects/project5'; // Import Project5

export default function Projects() {
  const [activeProject, setActiveProject] = useState('Project1'); // State for aktivt projekt
  const [emojiIndex, setEmojiIndex] = useState(0); // State for emoji-indeks

  const emojis = ['🧐', '😊', '🤓', '🫡', '😋']; 

  // Skift emoji hvert 5. sekund
  useEffect(() => {
    const interval = setInterval(() => {
      setEmojiIndex((prevIndex) => (prevIndex + 1) % emojis.length); // Cirkulerer gennem emojis
    }, 5000);

    return () => clearInterval(interval); // Rydder intervallet ved unmount
  }, [emojis.length]);

  const renderActiveProject = () => {
    switch (activeProject) {
      case 'Project5':
        return <Project5 />;
      case 'Project4':
        return <Project4 />;
      case 'Project3':
      return <Project3 />;
      case 'Project2':
      return <Project2 />;
      case 'Project1':
      return <Project1 />;
      default:
        return null;
    }
  };

return (
  <>
    <div className={styles.pageTop}>
      <Link to="/" className="button1">
        About me {emojis[emojiIndex]} 
      </Link>
      <h2>My Projects</h2>
    </div>


    <div className={styles.container}>
      {/* Fjern navContainer helt */}
      <Sidebar setActiveProject={setActiveProject} activeProject={activeProject} />
      <div className={styles.contentContainer}>
        {renderActiveProject()}
      </div>
    </div>
  </>
);
}