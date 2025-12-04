import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Settings, Server, Wrench, Check } from 'lucide-react';

export const Slide4_Proposal: React.FC = () => {
  return (
    <div className="h-full flex flex-col p-10 bg-white text-slate-800">
      
      {/* Header */}
      <div className="flex justify-between items-end border-b border-slate-100 pb-4 mb-6">
        <div>
           <span className="bg-slate-100 text-slate-600 font-bold px-2 py-1 rounded text-xs uppercase mb-2 inline-block">Proposta</span>
           <h2 className="text-3xl font-extrabold text-slate-900">Investimento e condições</h2>
           <p className="text-sm text-slate-500 mt-1 uppercase tracking-widest font-semibold">Apresentação</p>
        </div>
        <div className="text-right max-w-md hidden md:block">
           <h3 className="text-lg font-bold text-[#AD8DF2]">Proposta Comercial – Integração Digital TWork</h3>
           <p className="text-sm text-slate-500">Valores transparentes para estruturar a operação integrada entre Bling, site e Shopee.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-grow">
        
        {/* Left Column: Investment Highlight */}
        <motion.div 
           className="lg:col-span-5 flex flex-col gap-6"
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.2 }}
        >
          {/* Main Price Card */}
          <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl flex-grow flex flex-col justify-center text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#AD8DF2] via-[#B79BF2] to-[#D99543]"></div>
            
            <span className="text-slate-400 uppercase tracking-widest text-xs font-bold mb-4">Valor total do projeto</span>
            <div className="text-5xl font-extrabold mb-2">R$ 2.400<span className="text-2xl text-slate-400">,00</span></div>
            <p className="text-slate-300 text-sm mb-8 px-4">Projeto completo de integração entre Bling, site e Shopee, com mapeamento, configuração e testes.</p>
            
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
               <h4 className="text-[#F2D98D] font-bold uppercase text-sm mb-1">Parcelas do projeto</h4>
               <div className="text-2xl font-bold">10x de R$ 240,00</div>
               <p className="text-xs text-slate-400 mt-2">Cobrança inicia após a solução estar configurada e em uso pela TWork.</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Breakdown */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Initial Costs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="border border-slate-200 p-5 rounded-xl bg-slate-50"
             >
                <div className="flex justify-between items-start mb-2">
                   <h4 className="font-bold text-slate-800 flex items-center gap-2"><Settings className="w-4 h-4 text-[#AD8DF2]"/> Taxa de Implantação (35%)</h4>
                </div>
                <p className="text-xs text-slate-500 mb-3 h-10">Configuração inicial do Bling, integrações com site e Shopee, testes e ajustes de fluxo.</p>
                <div className="text-lg font-bold text-slate-900">R$ 840,00</div>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="border border-slate-200 p-5 rounded-xl bg-white"
             >
                <div className="flex justify-between items-start mb-2">
                   <h4 className="font-bold text-slate-800 flex items-center gap-2"><Server className="w-4 h-4 text-slate-400"/> Licenças de sistemas</h4>
                </div>
                <p className="text-xs text-slate-500 mb-3 h-10">Planos do Bling e da plataforma do site são pagos diretamente pela cliente, conforme necessidade.</p>
                <div className="text-lg font-bold text-slate-400 italic">Contratadas à parte</div>
             </motion.div>
          </div>

            {/* Maintenance */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="border-l-4 border-[#B79BF2] pl-6 py-2"
            >
               <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2"><Wrench className="w-4 h-4 text-slate-400"/> Manutenções e ajustes</h4>
               <ul className="space-y-2">
                  <li className="text-sm text-slate-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#AD8DF2] rounded-full mt-1.5"></div>
                    Manutenções futuras avaliadas conforme complexidade e necessidade da operação.
                  </li>
                  <li className="text-sm text-slate-600 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#AD8DF2] rounded-full mt-1.5"></div>
                    Possibilidade de plano mensal de suporte e pequenos ajustes a partir de R$ 120,00/mês.
                  </li>
               </ul>
            </motion.div>

            {/* Timeline / Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-auto bg-[#F2D98D]/15 border border-[#F2D98D] p-5 rounded-xl"
            >
               <h4 className="font-bold text-[#D99543] mb-1">Fluxo simplificado</h4>
               <p className="text-sm text-[#D99543] mb-3">Implantação, integrações e início da cobrança alinhados à data de go-live da operação integrada.</p>
               <div className="flex gap-2">
                  <span className="px-2 py-1 bg-white text-[#AD8DF2] text-xs font-bold rounded shadow-sm flex items-center gap-1"><Check size={12}/> Entrega e publicação</span>
                  <span className="px-2 py-1 bg-white text-[#AD8DF2] text-xs font-bold rounded shadow-sm flex items-center gap-1"><CreditCard size={12}/> Cobrança após go-live</span>
               </div>
            </motion.div>

        </div>
      </div>
    </div>
  );
};