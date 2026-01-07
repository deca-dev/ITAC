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
import TermsConditions from "./pages/TermsConditions";
import Nosotros from './pages/Nosotros'
import Publicaciones from "./pages/Publicaciones";
import Libros from "./pages/Libros";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formacion-academica" element={<AcademicOffer />} />
           <Route path="/formacion-academica/:slug" element={<AcademicOfferDetail />} />
          <Route path="/equipo" element={<Team />} />
          <Route path="/equipo/:memberId" element={<WorkInProgress />} />
          <Route path="/aviso-de-privacidad" element={<TermsConditions/>} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/publicaciones" element={<Publicaciones />} />
          <Route path="/libros" element={<Libros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
