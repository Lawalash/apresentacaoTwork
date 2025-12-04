import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentSlide, totalSlides, onNext, onPrev }) => {
  return (
    <div className="fixed bottom-6 right-6 flex items-center gap-4 z-50">
      <div className="bg-white/90 backdrop-blur shadow-lg rounded-full px-4 py-2 text-xs font-mono font-medium text-slate-500 border border-slate-200">
        {currentSlide + 1} / {totalSlides}
      </div>
      <div className="flex gap-2">
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="p-3 rounded-full bg-slate-800 text-white shadow-lg hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="p-3 rounded-full bg-[#AD8DF2] text-white shadow-lg shadow-[0_10px_25px_rgba(173,141,242,0.4)] hover:bg-[#B79BF2] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};