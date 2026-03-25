import React from 'react';
import Navbar from './src/components/Navbar';
import Hero from './src/components/Hero';
import About from './src/components/About';
import Services from './src/components/Services';
import CallToAction from './src/components/CallToAction';
import Footer from './src/components/Footer';
import FloatingWhatsApp from './src/components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="font-sans text-stone-700 antialiased scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CallToAction />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;