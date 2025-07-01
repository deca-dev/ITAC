import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Team from '../components/Team';
import AcademicOfferHome from '../components/AcademicOfferHome';
import FAQ from '../components/FAQ';
import Testimonial from '../components/Testimonial';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Team />
      < AcademicOfferHome />
      <FAQ />
      <Testimonial />
    </div>
  );
};

export default Home;