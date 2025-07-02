import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AcademicOffer from "./pages/AcademicOffer";
import AcademicOfferDetail from "./pages/AcademicOfferDetail";
import Team from "./pages/Team";
import TeamMemberDetail from "./pages/TeamMemberDetail";
import WorkInProgress from "./pages/WorkInProgress";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oferta-academica" element={<AcademicOffer />} />
           <Route path="/oferta-academica/:slug" element={<AcademicOfferDetail />} />
          <Route path="/equipo" element={<Team />} />
          <Route path="/equipo/:memberId" element={<WorkInProgress />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
