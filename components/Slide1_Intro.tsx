import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Layers, FileText, TrendingUp, ShoppingBag } from 'lucide-react';

export const Slide1_Intro: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between p-12 bg-white text-slate-800">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-start border-b border-slate-100 pb-6"
      >
        <div>
          <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
            Apresentação
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            TWork
          </h1>
          <p className="text-slate-500 font-medium text-lg mt-1">
            Experiência digital por A2 Data
          </p>
        </div>
        <div className="text-right hidden md:block">
            <div className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-slate-400" />
            </div>
        </div>
      </motion.div>

      {/* Main Block */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="my-8"
      >
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-1">Loja Online</h2>
          <h3 className="text-xl text-blue-100 font-semibold mb-4">TWork</h3>
          <p className="text-xl font-medium leading-relaxed max-w-3xl mb-4">
            "Integração entre Bling, site e Shopee para organizar estoque, catálogo e vendas em múltiplos canais."
          </p>
          <p className="text-blue-100 text-sm max-w-2xl opacity-90">
            Apresentação do projeto de integração e automação da operação digital da TWork, conectando produtos, estoque e pedidos em um fluxo único, simples de gerenciar.
          </p>
        </div>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
        {[
          { icon: Monitor, title: "Visual", sub: "Painel integrado", txt: "Visão clara da operação digital em todos os canais de venda." },
          { icon: Layers, title: "Experiência", sub: "Fluxo organizado", txt: "Do cadastro ao pedido, tudo mapeado e conectado para reduzir retrabalho." },
          { icon: FileText, title: "Conteúdo", sub: "Catálogo consistente", txt: "Produtos com informações padronizadas em todas as plataformas." },
          { icon: TrendingUp, title: "Ação", sub: "Pronta para crescer", txt: "Base tecnológica preparada para campanhas de tráfego pago e expansão." }
        ].map((card, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + (idx * 0.1) }}
            className="bg-slate-50 p-5 rounded-xl border border-slate-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <card.icon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{card.title}</h4>
                <h5 className="font-bold text-slate-800">{card.sub}</h5>
              </div>
            </div>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              {card.txt}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};