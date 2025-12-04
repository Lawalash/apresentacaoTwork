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
                    alt="TK Twork"
                    className="slide01__brand-logo"
                  />
                  <span className="slide01__brand-name">TK Twork</span>
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
                  Operação Digital
                  <br />
                  <span className="slide01__title-highlight">TK Twork</span>
                </h1>

                <h2 className="slide01__subtitle">
                  Integração entre Bling, site e Shopee para organizar estoque, catálogo e vendas em múltiplos canais com leveza.
                </h2>
              </div>

              {/* Descrição */}
              <p className="slide01__description">
                Apresentação do projeto de integração e automação da operação digital da TK Twork, conectando produtos, estoque
                e pedidos em um fluxo único, simples de gerenciar.
              </p>

              {/* Pills informativos */}
              <div className="slide01__pills">
                <span className="slide01__pill">Integração Bling + Site + Shopee</span>
                <span className="slide01__pill">Estoque automatizado</span>
                <span className="slide01__pill">Operação pronta para escalar</span>
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
                <h3 className="slide01__card-title">Painel integrado</h3>
                <p className="slide01__card-text">Visão clara da operação digital em todos os canais de venda.</p>
              </div>

              {/* Card Experiência */}
              <div className="slide01__card">
                <div className="slide01__card-header">
                  <span className="slide01__card-badge slide01__card-badge--experience">Experiência</span>
                  <div className="slide01__card-dot" />
                </div>
                <h3 className="slide01__card-title">Fluxo organizado</h3>
                <p className="slide01__card-text">Do cadastro ao pedido, tudo mapeado e conectado para reduzir retrabalho.</p>
              </div>

              {/* Card Conteúdo */}
              <div className="slide01__card">
                <div className="slide01__card-header">
                  <span className="slide01__card-badge slide01__card-badge--content">Conteúdo</span>
                  <div className="slide01__card-dot" />
                </div>
                <h3 className="slide01__card-title">Catálogo consistente</h3>
                <p className="slide01__card-text">Produtos com informações padronizadas em todas as plataformas.</p>
              </div>

              {/* Card Ação */}
              <div className="slide01__card">
                <div className="slide01__card-header">
                  <span className="slide01__card-badge slide01__card-badge--action">Ação</span>
                  <div className="slide01__card-dot" />
                </div>
                <h3 className="slide01__card-title">Pronta para crescer</h3>
                <p className="slide01__card-text">Base tecnológica preparada para campanhas de tráfego pago e expansão.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
