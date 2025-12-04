import React from 'react';
import './Slide03.css';

// Ícone de laptop inline
const LaptopIcon: React.FC = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);

export const Slide03: React.FC = () => {
  const pillars = [
    { 
      label: 'Eficiência', 
      desc: 'CTA fixo e acesso rápido ao WhatsApp e agendamento.' 
    },
    { 
      label: 'Automação', 
      desc: 'Formulários inteligentes e integrações para responder rápido.' 
    },
    { 
      label: 'Personalização', 
      desc: 'Conteúdo e seções destacando diferenciais reais da casa.' 
    }
  ];

  return (
    <section className="slide03">
      {/* Elementos decorativos de fundo */}
      <div className="slide03__bg-container">
        <div className="slide03__bg-orb slide03__bg-orb--1" />
        <div className="slide03__bg-orb slide03__bg-orb--2" />
        <div className="slide03__bg-orb slide03__bg-orb--3" />
      </div>

      {/* Grid pattern suave */}
      <div className="slide03__grid-pattern" />

      {/* Container principal */}
      <div className="slide03__container">
        <div className="slide03__wrapper">
          {/* Header do slide */}
          <div className="slide03__header">
            <div className="slide03__tag-wrapper">
              <div className="slide03__tag-line" />
              <span className="slide03__tag">Estratégia</span>
            </div>
            <h2 className="slide03__title">Proposta do site</h2>
          </div>

          {/* Grid de conteúdo */}
          <div className="slide03__content">
            {/* Coluna esquerda - Conteúdo principal */}
            <div className="slide03__main">
              <h3 className="slide03__headline">
                Uma landing page moderna, acolhedora e orientada à conversão para a ILPI Aconchego dos Avós.
              </h3>
              
              <p className="slide03__text">
                Estruturamos a página para transmitir confiança imediata, reforçar cuidados humanizados e simplificar o contato. 
                O design usa nossos tons de azul com animações sutis para guiar a jornada.
              </p>

              {/* Pilares */}
              <div className="slide03__pillars">
                {pillars.map((item) => (
                  <div key={item.label} className="slide03__pillar">
                    <p className="slide03__pillar-title">{item.label}</p>
                    <p className="slide03__pillar-text">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Coluna direita - Panel */}
            <div className="slide03__panel">
              <div className="slide03__panel-card">
                <div className="slide03__panel-icon">
                  <LaptopIcon />
                </div>
                <p className="slide03__panel-title">Experiência pronta para navegar</p>
                <p className="slide03__panel-text">
                  Link direto para o protótipo funcional com transições suaves e CTAs em destaque.
                </p>

                {/* CTA dentro do card, bem alinhado */}
                <a href="http://localhost:5173/" className="slide03__cta" target="_blank" rel="noreferrer">
                  <span className="slide03__cta-text">Ver mockup ao vivo</span>
                  <span className="slide03__cta-subtitle">localhost:5173</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
