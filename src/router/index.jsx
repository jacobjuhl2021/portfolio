import { Routes, Route } from 'react-router-dom';
import Projects from '../views/projects';
import About from '../views/about';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}
