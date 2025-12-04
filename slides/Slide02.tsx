import React from 'react';
import './Slide02.css';

// Ícone de coração inline
const HeartIcon: React.FC = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

export const Slide02: React.FC = () => {
  return (
    <section className="slide02">
      {/* Elementos decorativos de fundo */}
      <div className="slide02__bg-container">
        <div className="slide02__bg-orb slide02__bg-orb--1" />
        <div className="slide02__bg-orb slide02__bg-orb--2" />
        <div className="slide02__bg-orb slide02__bg-orb--3" />
      </div>

      {/* Grid pattern suave */}
      <div className="slide02__grid-pattern" />

      {/* Container principal */}
      <div className="slide02__container">
        <div className="slide02__wrapper">
          {/* Header do slide */}
          <div className="slide02__header">
            <div className="slide02__tag-wrapper">
              <div className="slide02__tag-line" />
              <span className="slide02__tag">Sobre nós</span>
            </div>
            <h2 className="slide02__title">Quem é a A2 Data?</h2>
          </div>

          {/* Conteúdo principal (somente texto + cards + métricas) */}
          <div className="slide02__content">
            <div className="slide02__main">
              <h3 className="slide02__headline">
                Consultoria e tecnologia para organizar operações digitais e automatizar vendas.
              </h3>

              <p className="slide02__text">
                A A2 Data Consultoria e Tecnologia é especialista em soluções digitais sob medida para pequenas e médias empresas.
                Atuamos com integrações entre ERPs como o Bling, lojas virtuais, marketplaces (como a Shopee) e painéis de
                acompanhamento, sempre com foco em simplicidade, eficiência e visão de dados.
              </p>

              {/* Cards de destaque */}
              <div className="slide02__cards">
                <div className="slide02__card">
                  <div className="slide02__badge">
                    <HeartIcon />
                  </div>
                  <div>
                    <p className="slide02__card-title">Eficiência real</p>
                    <p className="slide02__card-text">
                      Automação para reduzir tarefas manuais, como atualização de estoque e cadastro de produtos, liberando tempo para atendimento e estratégia.
                    </p>
                  </div>
                </div>

                <div className="slide02__card">
                  <div className="slide02__badge slide02__badge--alt">
                    <HeartIcon />
                  </div>
                  <div>
                    <p className="slide02__card-title">Produtos sob medida</p>
                    <p className="slide02__card-text">
                      Ferramentas e fluxos personalizados para a realidade da TK Twork, sem excesso de complexidade.
                    </p>
                  </div>
                </div>
              </div>

              {/* Métricas */}
              <div className="slide02__metrics">
                <div className="slide02__metric">
                  <p className="slide02__metric-label">Crescimento com tecnologia</p>
                  <p className="slide02__metric-value">Automação aplicada ao dia a dia</p>
                </div>
                <div className="slide02__metric">
                  <p className="slide02__metric-label">Simplicidade e agilidade</p>
                  <p className="slide02__metric-value">Integrações que evitam retrabalho</p>
                </div>
              </div>
            </div>
          </div>
          {/* fim slide02__content */}
        </div>
      </div>
    </section>
  );
};
