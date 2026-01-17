
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServicesOverview from './pages/ServicesOverview';
import ServiceDetail from './pages/ServiceDetail';
import TrainingPage from './pages/Training';
import CaseStudies from './pages/CaseStudies';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import PortalHub from './pages/Portal/PortalHub';
import SystemAudit from './pages/SystemAudit';
import BackgroundEffects from './components/BackgroundEffects';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <BackgroundEffects />
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portal" element={<PortalHub />} />
          <Route path="/system-audit" element={<SystemAudit />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
