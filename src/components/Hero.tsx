import { Import } from 'lucide-react';
import React from 'react';

import heroImage from '../assets/img/beleza_boas_maos.png'

const Hero: React.FC = () => {
  return (
    <section className="relative h-[60vh] md:h-[75vh] w-full flex items-center justify-center overflow-hidden">
      
     
      <div
        className="absolute inset-0 z-0 bg-cover bg-[center_30%] bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
       
        <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>
      </div>     
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-7xl text-white font-serif mb-6 leading-tight">
          Sua Beleza em <br/>
          <span className="italic text-helena-wine">Boas Mãos</span>
        </h1>
        
        <p className="text-stone-200 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
          Descubra o melhor da sua autoestima no Helena Fashion Hair.
          Profissionais qualificados e um ambiente acolhedor esperam por você.
        </p>

        <a
          href="https://wa.me/11983160820" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-helena-wine hover:bg-helena-wine-dark text-white py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg border border-transparent"
        >
          Agende seu Horário
        </a>
      </div>
    </section>
  );
};

export default Hero;