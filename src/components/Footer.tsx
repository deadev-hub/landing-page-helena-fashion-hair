import { MapPin, Clock, Link } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa'
import React, { useState } from 'react';


const Footer: React.FC = () => {
  const lat = -23.5209;
  const lng = -46.8293;
  const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Carapicu%C3%ADba%2C+SP';
  const defaultMap = 'https://picsum.photos/seed/map/600/300';
  const fallbackMap = 'https://via.placeholder.com/600x300?text=Mapa';
  const [imgSrc, setImgSrc] = useState(defaultMap);
  
  return (
    <footer id="contato" className="bg-helena-bg pt-20 pb-10 border-t border-stone-200">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">          
          
          <div className=" space-y-6 max-w-sm">
             <div className="flex flex-col items-center w-full">
              <span className="font-serif text-2xl tracking-widest text-helena-wine font-semibold uppercase">Helena</span>
              <span className="text-[10px] tracking-[0.3em] text-stone-500 uppercase">Fashion Hair</span>
            </div>
            <p className="text-stone-500 font-light leading-relaxed max-w-sm">
              Realçando sua beleza natural com tratamentos personalizados e profissionais experientes em um ambiente acolhedor.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg text-stone-800 mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-stone-600 font-light">
                <MapPin className="text-helena-wine flex-shrink-0 mt-1" size={18} />
                <p>Av. Barueri, 98, Vila Três Irmãos<br />Carapicuíba/SP</p>
              </div>
              <div className="flex items-start gap-3 text-stone-600 font-light">
                <Clock className="text-helena-wine flex-shrink-0 mt-1" size={18} />
                <div>
                  <p>Ter - Sáb: 09:00 - 19:00</p>
                  <p>Dom - Seg: Fechado</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-stone-600 font-light">
                <a 
                  className="text-helena-wine hover:text-helena-accent transition-colors"
                  href="https://instagram.com/helena-fashionhair"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={18} />
                </a>
                <p className="text-stone-600">Instagram</p>
              </div>
            </div>
          </div>            

          <div>
            <h4 className="font-serif text-lg text-stone-800 mb-6">Localização</h4>
  
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              aria-label="Abrir localização de Carapicuíba em nova aba"
            >
              <div className="rounded-xl overflow-hidden border border-stone-200 h-40 bg-gray-200 relative hover:cursor-pointer">
                <iframe
                  title="Mapa de localização — Carapicuíba, SP"
                  src="https://www.google.com/maps?q=Centro,+Carapicuíba+-+SP&z=15&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 p-2 rounded shadow-sm text-xs flex flex-col items-center">
                    <MapPin className="text-red-500 mb-1" size={20} />
                    <span className="font-bold text-stone-700">Carapicuíba, SP</span>
                  </div>
                </div>
                <span className="sr-only">Abrir mapa de Carapicuíba</span>
              </div>
            </a>
          </div>

        </div>

        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-400 font-light">
          <p>&copy; 2026 Helena Fashion Hair. Todos os direitos reservados.</p>
          <div className="hidden md:flex items-center gap-5 mt-4 md:mt-0">
             <span>|</span>
             <span>By De@Dev🩶</span>             
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


