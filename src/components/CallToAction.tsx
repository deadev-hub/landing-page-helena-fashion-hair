import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-[#4a3d3f] py-10 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
          Pronta para uma transformação?
        </h2>
        <p className="text-white/90 text-lg mb-6 max-w-1xl mx-auto font-light">
          Entre em contato conosco pelo WhatsApp e agende seu horário. Estamos ansiosos para recebê-la!
        </p>
        <a 
          href="https://wa.me/11983160820" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-[#823a45] text-[#fcf3f2] font-semibold py-3 px-10 rounded-full text-lg hover:bg-helena-accent transition-colors shadow-lg"
        >
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CallToAction;