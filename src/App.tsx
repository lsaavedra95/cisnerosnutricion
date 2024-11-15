import React from 'react';
import { Salad, Calendar, BookOpen, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Blog from './components/Blog';
import Appointments from './components/Appointments';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Blog />
        <Appointments />
      </main>
      <Footer />
    </div>
  );
}

export default App;