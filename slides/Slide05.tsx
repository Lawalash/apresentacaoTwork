import React from 'react';
import './Slide05.css';

export const Slide05: React.FC = () => {
  return (
    <section className="slide05">
      {/* Elementos decorativos de fundo */}
      <div className="slide05__bg-container">
        <div className="slide05__bg-orb slide05__bg-orb--1" />
        <div className="slide05__bg-orb slide05__bg-orb--2" />
        <div className="slide05__bg-orb slide05__bg-orb--3" />
      </div>

      {/* Grid pattern suave */}
      <div className="slide05__grid-pattern" />

      {/* Ícones flutuantes decorativos */}
      <div className="slide05__floating-icons">
        <div className="slide05__icon">✨</div>
        <div className="slide05__icon">💎</div>
        <div className="slide05__icon">🚀</div>
        <div className="slide05__icon">⚡</div>
      </div>

      {/* Container principal */}
      <div className="slide05__container">
        <div className="slide05__wrapper">
          
          {/* OBRIGADO - Elemento principal */}
          <div className="slide05__thanks">
            <h1 className="slide05__thanks-text"> Muito Obrigado!</h1>
          </div>

          {/* Frase de efeito */}
          <div className="slide05__tagline">
            <p className="slide05__tagline-text">
              Transformando <span className="slide05__tagline-highlight">dados em decisões</span> e <span className="slide05__tagline-highlight">tecnologia em resultados</span> para pequenas e médias empresas.
            </p>
          </div>

          {/* Cards de detalhes opcionais */}
          <div className="slide05__details">
            <div className="slide05__detail-item">
              <p className="slide05__detail-label">Nossa missão</p>
              <p className="slide05__detail-value">Eficiência real</p>
            </div>
            <div className="slide05__detail-item">
              <p className="slide05__detail-label">Nosso diferencial</p>
              <p className="slide05__detail-value">Soluções sob medida</p>
            </div>
            <div className="slide05__detail-item">
              <p className="slide05__detail-label">Nosso compromisso</p>
              <p className="slide05__detail-value">Resultados práticos</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};