import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Regions from './pages/Regions';
import RegionDetail from './pages/RegionDetail';
import VillageDetail from './pages/VillageDetail';
import Accommodations from './pages/Accommodations';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import ExperienceDetail from './pages/ExperienceDetail';
import About from './pages/About';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import Experiences from './pages/Experiences';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/regions" element={<Regions />} />
        <Route path="/regions/:id" element={<RegionDetail />} />
        <Route path="/villages/:id" element={<VillageDetail />} />
        <Route path="/accommodations" element={<Accommodations />} />
        <Route path="/accommodations/:id" element={<PropertyDetail />} />
        <Route path="/stays" element={<Accommodations />} />
        <Route path="/stays/:id" element={<PropertyDetail />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/experiences/:id" element={<ExperienceDetail />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/sustainability" element={<div>Sustainability Page</div>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
