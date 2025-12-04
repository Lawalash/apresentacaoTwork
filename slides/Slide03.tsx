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
      desc: 'Menos tempo atualizando estoque e anúncios, mais tempo focada nas clientes e nos produtos certos.'
    },
    {
      label: 'Automação',
      desc: 'Bling como cérebro da operação, atualizando site e Shopee automaticamente a cada venda.'
    },
    {
      label: 'Visibilidade',
      desc: 'Informações centralizadas para enxergar o que mais vende, planejar compras e tomar decisões com base em dados.'
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
            <h2 className="slide03__title">O que vamos construir</h2>
          </div>

          {/* Grid de conteúdo */}
          <div className="slide03__content">
            {/* Coluna esquerda - Conteúdo principal */}
            <div className="slide03__main">
              <h3 className="slide03__headline">
                Integração entre Bling, site e Shopee para uma operação enxuta e organizada.
              </h3>
              
              <p className="slide03__text">
                Vamos mapear e automatizar o fluxo completo da [NOME DA MARCA]: cadastro de produtos, atualização de estoque e acompanhamento das vendas em todos os canais. A ideia é reduzir atividades manuais, evitar furos de estoque e deixar a operação pronta para escalar.
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
                <p className="slide03__panel-title">Fluxo da operação integrado</p>
                <p className="slide03__panel-text">
                  Representação visual do fluxo entre Bling, site e Shopee, destacando os principais pontos de automação e controle de estoque.
                </p>

                {/* CTA dentro do card, bem alinhado */}
                <a href="#" className="slide03__cta" target="_blank" rel="noreferrer">
                  <span className="slide03__cta-text">Ver fluxo da operação</span>
                  <span className="slide03__cta-subtitle">Diagrama da integração</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
