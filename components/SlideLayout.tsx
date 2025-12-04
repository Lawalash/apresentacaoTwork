
import React from 'react';

interface SlideLayoutProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({ children, title, className = '' }) => {
  return (
    <div className={`relative w-full h-full p-6 lg:p-12 overflow-hidden ${className}`}>
      <div className="absolute inset-0 brand-surface animate-gradient" aria-hidden></div>
      <div className="absolute -left-24 -top-24 w-72 h-72 bg-[#466fa6]/28 rounded-full blur-[120px] animate-float" aria-hidden></div>
      <div className="absolute -right-16 bottom-0 w-80 h-80 bg-[#8ea3bf]/24 rounded-full blur-[120px] animate-float animate-delay-1" aria-hidden></div>
      <div className="relative h-full flex flex-col gap-6 max-w-6xl mx-auto text-slate-800">
        <div className="flex items-center justify-between gap-4 p-6 lg:p-8 rounded-2xl bg-white/70 shadow-xl backdrop-blur-md border border-white/50">
          {title && (
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight animate-fade-up">
              {title}
            </h2>
          )}
          <span className="brand-pill animate-fade-up animate-delay-1">A2 Data</span>
        </div>
        <div className="flex-grow px-2 lg:px-4">
          {children}
        </div>
        <footer className="text-sm text-slate-600 mt-2 flex items-center justify-between px-2 lg:px-4 pb-4 animate-fade-up animate-delay-2">
          <span>A2 Data • Consultoria e Tecnologia</span>
          <span className="text-slate-400">Soluções digitais sob medida</span>
        </footer>
      </div>
    </div>
  );
};
