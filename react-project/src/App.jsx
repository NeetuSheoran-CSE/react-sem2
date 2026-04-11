import React from 'react';
import './styles/style.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;