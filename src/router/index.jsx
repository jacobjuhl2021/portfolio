import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
