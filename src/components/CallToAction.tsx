import React from 'react';

// Use React.createElement to avoid requiring JSX intrinsic element typings
const CallToAction = () => {
  return React.createElement(
    'section',
    { className: 'bg-[#4a3d3f] py-10 px-4' },
    React.createElement(
      'div',
      { className: 'container mx-auto text-center' },
      React.createElement(
        'h2',
        { className: 'text-3xl md:text-5xl font-serif text-white mb-6' },
        'Pronta para uma transformação?'
      ),
      React.createElement(
        'p',
        { className: 'text-white/90 text-lg mb-6 max-w-1xl mx-auto font-light' },
        'Entre em contato conosco pelo WhatsApp e agende seu horário. Estamos ansiosos para recebê-la!'
      ),
      React.createElement(
        'a',
        {
          href: 'https://wa.me/5511983160820',
          target: '_blank',
          rel: 'noopener noreferrer',
          className:
            'inline-block bg-[#823a45] text-[#fcf3f2] font-semibold py-3 px-10 rounded-full text-lg hover:bg-helena-accent transition-colors shadow-lg',
        },
        'Falar no WhatsApp'
      )
    )
  );
};

export default CallToAction;