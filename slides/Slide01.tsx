import React from 'react';
import './Slide01.css';

// importa as imagens locais
import IlpiLogo from './imagens/slide 1.jpeg';
import A2DataLogo from './imagens/slide 2.jpeg';

export const Slide01: React.FC = () => {
  return (
    <section className="slide01">
      {/* Elementos decorativos de fundo */}
      <div className="slide01__bg-container">
        <div className="slide01__bg-orb slide01__bg-orb--1" />
        <div className="slide01__bg-orb slide01__bg-orb--2" />
        <div className="slide01__bg-orb slide01__bg-orb--3" />
      </div>

      {/* Grid pattern suave */}
      <div className="slide01__grid-pattern" />

      {/* Container principal */}
      <div className="slide01__container">
        <div className="slide01__wrapper">
          {/* Grid de conteúdo */}
          <div className="slide01__content">
            {/* Coluna esquerda - Conteúdo principal */}
            <div className="slide01__main">
              {/* Tag superior */}
              <div className="slide01__tag-wrapper">
                <div className="slide01__tag-line" />
                <span className="slide01__tag">Apresentação</span>
              </div>

              {/* Barra de marcas ILPI + A2 Data */}
              <div className="slide01__brand-bar">
                <div className="slide01__brand">
                  <img
                    src={IlpiLogo}
                    alt="ILPI Aconchego dos Avós"
                    className="slide01__brand-logo"
                  />
                  <span className="slide01__brand-name">ILPI Aconchego dos Avós</span>
                </div>

                <span className="slide01__brand-divider" />

                <div className="slide01__brand">
                  <img
                    src={A2DataLogo}
                    alt="A2 Data"
                    className="slide01__brand-logo"
                  />
                  <span className="slide01__brand-name slide01__brand-name--muted">
                    Experiência digital por A2 Data
                  </span>
                </div>
              </div>

              {/* Título principal */}
              <div className="slide01__header">
                <h1 className="slide01__title">
                  ILPI
                  <br />
                  <span className="slide01__title-highlight">Aconchego dos Avós</span>
                </h1>

                <h2 className="slide01__subtitle">
                  Landing page moderna criada pela A2 Data para uma experiência digital acolhedora
                </h2>
              </div>

              {/* Descrição */}
              <p className="slide01__description">
                Nova identidade com animações suaves, contraste sofisticado e narrativa que apresenta a
                casa de forma humana, segura e clara.
              </p>

              {/* Pills informativos */}
              <div className="slide01__pills">
                <span className="slide01__pill">Landing page moderna</span>
                <span className="slide01__pill">Experiência acolhedora</span>
                <span className="slide01__pill">Identidade digital A2 Data</span>
              </div>
            </div>

            {/* Coluna direita - Cards */}
            <div className="slide01__cards">
              {/* Card Visual */}
              <div className="slide01__card">
                <div className="slide01__card-header">
                  <span className="slide01__card-badge slide01__card-badge--visual">Visual</span>
                  <div className="slide01__card-dot" />
                </div>
                <h3 className="slide01__card-title">Capa viva</h3>
                <p className="slide01__card-text">
                  Gradientes dinâmicos, tipografia editorial e luz suave para destacar a marca.
                </p>
              </div>

              {/* Card Experiência */}
              <div className="slide01__card">
                <div className="slide01__card-header">
                  <span className="slide01__card-badge slide01__card-badge--experience">Experiência</span>
                  <div className="slide01__card-dot" />
                </div>
                <h3 className="slide01__card-title">Navegação fluida</h3>
                <p className="slide01__card-text">
                  Microinterações e botões destacados para uma jornada intuitiva.
                </p>
              </div>

              {/* Card Conteúdo */}
              <div className="slide01__card">
                <div className="slide01__card-header">
                  <span className="slide01__card-badge slide01__card-badge--content">Conteúdo</span>
                  <div className="slide01__card-dot" />
                </div>
                <h3 className="slide01__card-title">Mensagem humana</h3>
                <p className="slide01__card-text">
                  História centrada no cuidado familiar e na rotina acolhedora da casa.
                </p>
              </div>

              {/* Card Ação */}
              <div className="slide01__card">
                <div className="slide01__card-header">
                  <span className="slide01__card-badge slide01__card-badge--action">Ação</span>
                  <div className="slide01__card-dot" />
                </div>
                <h3 className="slide01__card-title">CTA chamativo</h3>
                <p className="slide01__card-text">
                  Contato imediato e destaque para agendamento de visita.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
