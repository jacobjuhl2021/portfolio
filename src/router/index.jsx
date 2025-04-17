import { Routes, Route } from 'react-router-dom';
import Projects from '../views/Projects';
import About from '../views/About';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}
