import React from 'react';
import './Slide01.css';

// Importa as imagens locais
import TKLogo from './imagens/slide 1.jpeg';
import A2DataLogo from './imagens/slide 2.jpeg';

export const Slide01 = () => {
  return (
    <section className="slide01">
      {/* Elementos decorativos de fundo */}
      <div className="slide01__bg-container">
        <div className="slide01__bg-orb slide01__bg-orb--1" />
        <div className="slide01__bg-orb slide01__bg-orb--2" />
        <div className="slide01__bg-orb slide01__bg-orb--3" />
      </div>

      {/* Grid pattern */}
      <div className="slide01__grid-pattern" />

      {/* Container principal */}
      <div className="slide01__container">
        <div className="slide01__wrapper">
          <div className="slide01__content">
            {/* Coluna esquerda - Conteúdo principal */}
            <div className="slide01__main">

              {/* Tag superior */}
              <div className="slide01__tag-wrapper">
                <div className="slide01__tag-line" />
                <span className="slide01__tag">Apresentação</span>
              </div>

              {/* Barra de marcas com conexão animada */}
              <div className="slide01__brand-bar">
                <div className="slide01__brand">
                  <div className="slide01__brand-logo-wrapper">
                    <img
                      src={TKLogo}
                      alt="TK twork"
                      className="slide01__brand-logo"
                    />
                    {/* Pulso de conexão saindo da logo */}
                    <div className="slide01__connection-pulse slide01__connection-pulse--start" />
                  </div>
                  <span className="slide01__brand-name">TK twork</span>
                </div>

                {/* Linha de conexão animada entre as logos */}
                <div className="slide01__brand-connection">
                  <div className="slide01__connection-line" />
                  <div className="slide01__connection-particle slide01__connection-particle--1" />
                  <div className="slide01__connection-particle slide01__connection-particle--2" />
                  <div className="slide01__connection-particle slide01__connection-particle--3" />
                </div>

                <div className="slide01__brand">
                  <div className="slide01__brand-logo-wrapper">
                    <img
                      src={A2DataLogo}
                      alt="A2 Data"
                      className="slide01__brand-logo"
                    />
                    {/* Pulso de conexão chegando na logo */}
                    <div className="slide01__connection-pulse slide01__connection-pulse--end" />
                  </div>
                  <span className="slide01__brand-name slide01__brand-name--muted">
                    Por A2 Data
                  </span>
                </div>
              </div>

              {/* Header */}
              <div className="slide01__header">
                <h1 className="slide01__title">
                  Loja Online
                  <br />
                  <span className="slide01__title-highlight">TK twork</span>
                </h1>

                <h2 className="slide01__subtitle">
                  Integração entre Bling, site e Shopee para organizar estoque,
                  catálogo e vendas em múltiplos canais, criando a base ideal
                  para campanhas de tráfego pago.
                </h2>
              </div>

              {/* Descrição */}
              <p className="slide01__description">
                Apresentação do projeto de integração e automação da operação
                digital da TK twork, conectando produtos, estoque e pedidos em
                um fluxo único, simples de gerenciar e pronto para receber
                tráfego qualificado sem bagunçar o operacional.
              </p>

              {/* Pills */}
              <div className="slide01__pills">
                <span className="slide01__pill slide01__pill--purple">
                  Integração Bling + Site + Shopee
                </span>
                <span className="slide01__pill slide01__pill--purple">
                  Estoque automatizado
                </span>
                <span className="slide01__pill slide01__pill--amber">
                  Base pronta para tráfego pago
                </span>
              </div>
            </div>

            {/* Coluna direita - Cards */}
            <div className="slide01__cards">
              {/* Card Visual */}
              <div className="slide01__card">
                <div className="slide01__card-header">
                  <span className="slide01__card-badge slide01__card-badge--visual">
                    Visual
                  </span>
                  <div className="slide01__card-dot" />
                </div>
                <div className="slide01__card-body">
                  <div className="slide01__card-icon slide01__card-icon--purple">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 3l9 4.5v9L12 21l-9-4.5v-9L12 3z"/>
                      <path d="M12 12l9-4.5M12 12v9M12 12L3 7.5"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="slide01__card-title">Painel integrado</h3>
                    <p className="slide01__card-text">
                      Visão clara da operação digital em todos os canais de venda.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Experiência */}
              <div className="slide01__card">
                <div className="slide01__card-header">
                  <span className="slide01__card-badge slide01__card-badge--experience">
                    Experiência
                  </span>
                  <div className="slide01__card-dot" />
                </div>
                <div className="slide01__card-body">
                  <div className="slide01__card-icon slide01__card-icon--purple">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="slide01__card-title">Fluxo organizado</h3>
                    <p className="slide01__card-text">
                      Do cadastro ao pedido, tudo mapeado e conectado para reduzir retrabalho.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Conteúdo */}
              <div className="slide01__card">
                <div className="slide01__card-header">
                  <span className="slide01__card-badge slide01__card-badge--content">
                    Conteúdo
                  </span>
                  <div className="slide01__card-dot" />
                </div>
                <div className="slide01__card-body">
                  <div className="slide01__card-icon slide01__card-icon--purple">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                      <line x1="12" y1="22.08" x2="12" y2="12"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="slide01__card-title">Catálogo consistente</h3>
                    <p className="slide01__card-text">
                      Produtos com informações padronizadas em todas as plataformas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Ação */}
              <div className="slide01__card slide01__card--highlight">
                <div className="slide01__card-header">
                  <span className="slide01__card-badge slide01__card-badge--action">
                    Ação
                  </span>
                  <div className="slide01__card-dot slide01__card-dot--amber" />
                </div>
                <div className="slide01__card-body">
                  <div className="slide01__card-icon slide01__card-icon--amber">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                      <polyline points="17 6 23 6 23 12"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="slide01__card-title">Pronta para crescer</h3>
                    <p className="slide01__card-text">
                      Base tecnológica preparada para campanhas de tráfego pago e expansão, sem perder o controle do estoque.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Elementos flutuantes decorativos */}
      <div className="slide01__floating-element slide01__floating-element--1" />
      <div className="slide01__floating-element slide01__floating-element--2" />
    </section>
  );
};
