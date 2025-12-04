import React from 'react';
import './Slide04.css';

// Ícone de check circle inline
const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const Slide04: React.FC = () => {
  const custosIniciais = [
    {
      titulo: 'Hospedagem Hostgator (1 ano)',
      valor: 'R$ 118,75',
      detalhe: 'Pagamento único para colocar o site no ar.',
    },
    {
      titulo: 'Taxa de Implantação (30%)',
      valor: 'R$ 240,00',
      detalhe: 'Ativação, configuração, publicação e integrações.',
    },
  ];

  const recorrente = {
    titulo: 'Desenvolvimento',
    valor: '10x de R$ 80,00',
    detalhe: 'Parcelas iniciam após entrega em produção.',
  };

  const manutencao = [
    'Ajustes futuros precificados por complexidade.',
    'Possibilidade de pagamento único ou distribuído nas parcelas restantes.',
  ];

  return (
    <section className="slide04">
      {/* Elementos decorativos de fundo */}
      <div className="slide04__bg-container">
        <div className="slide04__bg-orb slide04__bg-orb--1" />
        <div className="slide04__bg-orb slide04__bg-orb--2" />
        <div className="slide04__bg-orb slide04__bg-orb--3" />
      </div>

      {/* Grid pattern suave */}
      <div className="slide04__grid-pattern" />

      {/* Container principal */}
      <div className="slide04__container">
        <div className="slide04__wrapper">
          {/* Header do slide */}
          <div className="slide04__slide-header">
            <div className="slide04__tag-wrapper">
              <div className="slide04__tag-line" />
              <span className="slide04__tag">Proposta</span>
            </div>
            <h2 className="slide04__slide-title">Investimento e condições</h2>
          </div>

          {/* Grid de conteúdo */}
          <div className="slide04__grid">
            {/* Coluna esquerda - Conteúdo principal */}
            <section className="slide04__main">
              <header className="slide04__header">
                <p className="slide04__eyebrow">Apresentação</p>
                <h3 className="slide04__title">
                  Proposta Comercial – ILPI Aconchego dos Avós
                </h3>
                <p className="slide04__text">
                  Valores claros e diluídos para facilitar a contratação e a
                  sustentação do projeto.
                </p>

                {/* Totais */}
                <div className="slide04__totals">
                  <div className="slide04__total-card">
                    <p className="slide04__total-label">
                      Valor total do projeto
                    </p>
                    <p className="slide04__value">R$ 800,00</p>
                    <p className="slide04__total-text">
                      Pagamento dividido para acompanhar a implantação sem pesar
                      no caixa.
                    </p>
                  </div>
                  <div className="slide04__installments">
                    <p className="slide04__installments-title">
                      Pagamento recorrente
                    </p>
                    <p className="slide04__installments-value">
                      {recorrente.valor}
                    </p>
                    <p className="slide04__installments-text">
                      {recorrente.detalhe}
                    </p>
                  </div>
                </div>
              </header>

              {/* Custos iniciais */}
              <div className="slide04__costs">
                {custosIniciais.map((item, index) => (
                  <div key={item.titulo} className="slide04__cost-card">
                    <div className="slide04__cost-inner">
                      <div className="slide04__cost-number">
                        0{index + 1}
                      </div>
                      <div className="slide04__cost-content">
                        <p className="slide04__cost-title">{item.titulo}</p>
                        <p className="slide04__cost-text">{item.detalhe}</p>
                        <span className="slide04__cost-pill">
                          <span className="slide04__cost-dot" />
                          {item.valor}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Coluna direita - Sidebar */}
            <aside className="slide04__sidebar">
              <div className="slide04__card">
                <p className="slide04__card-title">Manutenções e ajustes</p>
                <div className="slide04__maintenance">
                  {manutencao.map((info) => (
                    <div
                      key={info}
                      className="slide04__maintenance-item"
                    >
                      <CheckCircleIcon className="slide04__check-icon" />
                      <span className="slide04__maintenance-text">
                        {info}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="slide04__flow">
                <p className="slide04__flow-title">Fluxo simplificado</p>
                <p className="slide04__flow-text">
                  Entrega, publicação e início da cobrança alinhados à data de
                  go-live para manter previsibilidade.
                </p>
                <div className="slide04__flow-tags">
                  <div className="slide04__flow-tag">
                    Entrega e publicação
                  </div>
                  <div className="slide04__flow-tag">
                    Cobrança após go-live
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};
