import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Blog from '../components/Blog';
import Appointments from '../components/Appointments';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Testimonials />
      <Blog />
      <Appointments />
    </main>
  );
};

export default Home;