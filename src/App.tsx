
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AcademicOffer from './pages/AcademicOffer';
import AcademicOfferDetail from './pages/AcademicOfferDetail';
import Team from './pages/Team';
import TeamMemberDetail from './pages/TeamMemberDetail';
import WorkInProgress from './pages/WorkInProgress';
import { Layout } from 'lucide-react';

function App() {
  return (
    <Router>
      <Routes>
        {/* no header/footer here */}
        <Route path="/" element={<WorkInProgress />} />

        {/* everything else uses the Layout */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/academic-offer" element={<AcademicOffer />} />
          <Route
            path="/academic-offer/:courseId"
            element={<AcademicOfferDetail />}
          />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:memberId" element={<TeamMemberDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;