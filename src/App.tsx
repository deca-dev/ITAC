
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AcademicOffer from './pages/AcademicOffer';
import AcademicOfferDetail from './pages/AcademicOfferDetail';
import Team from './pages/Team';
import TeamMemberDetail from './pages/TeamMemberDetail';
import WorkInProgress from './pages/WorkInProgress';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<WorkInProgress />} />
          <Route path="/home1" element={<Home />} />
          <Route path="/academic-offer" element={<AcademicOffer />} />
          <Route path="/academic-offer/:courseId" element={<AcademicOfferDetail />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:memberId" element={<TeamMemberDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;