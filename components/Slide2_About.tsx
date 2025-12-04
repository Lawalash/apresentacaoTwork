import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Puzzle, TrendingUp, CheckCircle } from 'lucide-react';

export const Slide2_About: React.FC = () => {
  return (
    <div className="h-full flex flex-col p-12 bg-white text-slate-800">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-10"
      >
        <span className="text-[#AD8DF2] font-semibold tracking-wide uppercase text-sm">Sobre nós</span>
        <h2 className="text-4xl font-extrabold text-slate-900 mt-2">Quem é a A2 Data?</h2>
        <h3 className="text-xl text-slate-500 mt-2 font-medium">Consultoria e tecnologia para organizar operações digitais e automatizar vendas.</h3>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 h-full">
        {/* Left Column: Main Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-7 flex flex-col justify-between"
        >
          <p className="text-lg leading-loose text-slate-700">
            A A2 Data Consultoria e Tecnologia é especialista em soluções digitais sob medida para pequenas e médias empresas. Atuamos com integrações entre ERPs como o Bling, lojas virtuais, marketplaces (como a Shopee) e painéis de acompanhamento, sempre com foco em simplicidade, eficiência e visão de dados.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
             {[
               "Crescimento com tecnologia",
               "Automação aplicada ao dia a dia",
               "Simplicidade e agilidade",
               "Integrações que evitam retrabalho"
             ].map((badge, idx) => (
               <motion.div 
                key={idx}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 + (idx * 0.1) }}
                className="flex items-center gap-2 bg-[#AD8DF2]/10 text-[#AD8DF2] px-4 py-3 rounded-lg font-medium text-sm"
               >
                 <CheckCircle className="w-4 h-4 flex-shrink-0 text-[#AD8DF2]" />
                 {badge}
               </motion.div>
             ))}
          </div>
        </motion.div>

        {/* Right Column: Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6 justify-center">
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap size={80} />
            </div>
            <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Zap className="text-[#D99543] w-5 h-5" /> Eficiência real
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Automação para reduzir tarefas manuais, como atualização de estoque e cadastro de produtos, liberando tempo para atendimento e estratégia.
            </p>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white border border-slate-200 p-6 rounded-2xl shadow-lg relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-4 opacity-5">
              <Puzzle size={80} />
            </div>
            <h4 className="text-xl font-bold mb-3 flex items-center gap-2 text-slate-800">
              <Puzzle className="text-[#AD8DF2] w-5 h-5" /> Produtos sob medida
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Ferramentas e fluxos personalizados para a realidade da TWork, sem excesso de complexidade.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};