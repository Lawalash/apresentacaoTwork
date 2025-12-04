import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Database, Globe, RefreshCw } from 'lucide-react';

export const Slide3_Strategy: React.FC = () => {
  return (
    <div className="h-full flex flex-col p-12 bg-white text-slate-800">
       {/* Header */}
       <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <span className="text-[#AD8DF2] font-semibold tracking-wide uppercase text-sm bg-[#AD8DF2]/10 px-2 py-1 rounded">Estratégia</span>
        <h2 className="text-4xl font-extrabold text-slate-900 mt-3">O que vamos construir</h2>
        <h3 className="text-xl text-slate-500 mt-2 font-medium">Integração entre Bling, site e Shopee para uma operação enxuta e organizada.</h3>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 h-full">
        {/* Left: Explanation */}
        <motion.div 
          className="lg:w-1/3 flex flex-col gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-slate-700 text-lg leading-relaxed border-l-4 border-[#AD8DF2] pl-4">
            Vamos mapear e automatizar o fluxo completo da TWork, do cadastro ao faturamento, para evitar furos de estoque e deixar a operação pronta para escalar.
          </p>
          
          <div className="mt-auto bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">Fluxo da operação integrado</h4>
            <p className="text-sm text-slate-600 mb-4">
              Representação visual do fluxo entre Bling, site e Shopee, destacando os principais pontos de automação e controle de estoque.
            </p>
            <button className="flex items-center gap-2 bg-gradient-to-r from-[#AD8DF2] to-[#B79BF2] hover:from-[#B79BF2] hover:to-[#AD8DF2] text-white px-5 py-3 rounded-lg font-medium transition-colors w-full justify-center shadow-lg shadow-[0_10px_25px_rgba(173,141,242,0.35)]">
              <span>Ver fluxo da operação</span>
              <span className="text-xs opacity-75 border-l border-[#B79BF2] pl-2 ml-1">Diagrama da integração</span>
            </button>
          </div>
        </motion.div>

        {/* Right: Diagram Visualization */}
        <motion.div 
          className="lg:w-2/3 bg-slate-50 rounded-2xl border border-slate-200 p-8 flex items-center justify-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 opacity-10" 
               style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          </div>

          {/* Diagram */}
          <div className="relative z-10 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-12">
               {/* ERP */}
               <div className="flex flex-col items-center">
                 <div className="w-24 h-24 bg-white rounded-full shadow-lg border-4 border-[#D99543] flex items-center justify-center mb-3 z-10">
                    <Database className="w-10 h-10 text-[#D99543]" />
                 </div>
                 <span className="font-bold text-slate-800">Bling ERP</span>
                 <span className="text-xs text-slate-500">Mestre de Estoque</span>
               </div>

               {/* Animation Arrows */}
               <div className="flex-1 px-4 relative h-10">
                  <motion.div 
                    animate={{ x: [0, 100, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                  >
                     <div className="h-1 bg-slate-300 w-full rounded relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-400 rounded-full"></div>
                     </div>
                  </motion.div>
                  <div className="absolute -top-6 w-full text-center text-xs font-bold text-slate-400 uppercase tracking-widest">Sincronização</div>
               </div>

                {/* Integration Hub */}
                <div className="flex flex-col items-center">
                 <div className="w-20 h-20 bg-[#AD8DF2] rounded-xl shadow-xl flex items-center justify-center mb-3 z-10">
                    <RefreshCw className="w-10 h-10 text-white animate-spin-slow" style={{ animationDuration: '10s' }} />
                 </div>
                 <span className="font-bold text-white/90">Automação</span>
               </div>

               {/* Animation Arrows */}
               <div className="flex-1 px-4 relative h-10">
                  <div className="h-1 bg-slate-300 w-full rounded"></div>
               </div>

               {/* Channels */}
               <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-slate-200">
                    <div className="p-2 bg-[#F2D98D]/40 rounded text-[#D99543]"><ShoppingBag size={18} /></div>
                    <span className="font-bold text-sm text-slate-700">Shopee</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-slate-200">
                    <div className="p-2 bg-[#AD8DF2]/20 rounded text-[#AD8DF2]"><Globe size={18} /></div>
                    <span className="font-bold text-sm text-slate-700">Site Próprio</span>
                  </div>
               </div>
            </div>
            
            <div className="text-center">
              <span className="inline-block bg-white border border-slate-200 rounded-full px-4 py-1 text-xs text-slate-500 shadow-sm">
                Atualização em tempo real de preço e quantidade
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};