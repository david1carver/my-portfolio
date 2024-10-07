import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

// Lazy load components for better performance
const Hero = lazy(() => import('./Components/Hero/Hero'));
const About = lazy(() => import('./Components/About/About'));
const Services = lazy(() => import('./Components/Services/Services'));
const MyWork = lazy(() => import('./Components/MyWork/MyWork'));
const ProjectDetail = lazy(() => import('./Components/MyWork/ProjectDetail'));
const Contact = lazy(() => import('./Components/Contact/Contact'));
const Resume = lazy(() => import('./Components/Resume/Resume'));
const Terms = lazy(() => import('./Components/Terms/Terms'));
const Privacy = lazy(() => import('./Components/Privacy/Privacy'));

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<MyWork />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<div>Page not found</div>} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;