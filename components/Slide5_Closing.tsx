import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Gem, Rocket, Mail, Phone, Globe } from 'lucide-react';

export const Slide5_Closing: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-12 bg-gradient-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden">
      
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
         <div className="absolute top-10 left-10 text-blue-300"><Sparkles size={40} /></div>
         <div className="absolute bottom-20 right-20 text-yellow-300"><Gem size={60} /></div>
      </div>

      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-4xl z-10"
      >
        <div className="flex justify-center mb-6">
           <div className="bg-white/10 p-4 rounded-full backdrop-blur-md border border-white/20">
             <Rocket size={48} className="text-white" />
           </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">Muito Obrigado!</h1>
        
        <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed mb-12">
          "Organizando a operação digital da TWork para vender com mais segurança, automação e clareza."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
           {[
             { label: "Nossa missão", value: "Organização e eficiência", icon: "✨" },
             { label: "Nosso diferencial", value: "Integração de sistemas e visão de dados", icon: "💎" },
             { label: "Nosso compromisso", value: "Entrega prática e acompanhamento próximo", icon: "🚀" }
           ].map((item, idx) => (
             <motion.div 
               key={idx}
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.4 + (idx * 0.15) }}
               className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors"
             >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-xs uppercase tracking-widest text-blue-300 font-bold mb-1">{item.label}</div>
                <div className="font-semibold text-lg">{item.value}</div>
             </motion.div>
           ))}
        </div>
      </motion.div>

      {/* Footer Contact Placeholder (Optional but professional) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 text-sm text-slate-400 flex gap-6"
      >
         <span className="flex items-center gap-2"><Mail size={14}/> contato@a2data.com.br</span>
         <span className="flex items-center gap-2"><Globe size={14}/> www.a2data.com.br</span>
      </motion.div>
    </div>
  );
};