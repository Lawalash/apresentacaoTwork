import React, { useState, useEffect, useCallback } from 'react';
import { Slide01, Slide02, Slide03, Slide04, Slide05 } from './slides';

const slides: React.FC[] = [Slide01, Slide02, Slide03, Slide04, Slide05];

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev < slides.length - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <main className="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#031e2e] via-[#043959] to-[#0b4f75] overflow-hidden p-4 text-slate-100">
      <div className="absolute inset-0 opacity-50 brand-surface animate-gradient" aria-hidden></div>
      <div className="absolute -left-24 top-10 w-72 h-72 bg-[#466fa6]/35 rounded-full blur-[160px]" aria-hidden></div>
      <div className="absolute right-0 bottom-10 w-96 h-96 bg-[#8ea3bf]/30 rounded-full blur-[180px]" aria-hidden></div>

      <div className="relative aspect-video w-full max-w-6xl shadow-[0_30px_80px_rgba(4,57,89,0.45)] rounded-3xl overflow-hidden transition-all duration-500">
        <CurrentSlideComponent />
      </div>
      
      {/* Navigation Controls */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center space-x-4 z-10">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="px-4 py-2 bg-white rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-opacity text-slate-700 hover:bg-slate-100"
        >
          <i className="fas fa-arrow-left"></i>
        </button>
            <span className="text-black font-medium text-lg">
        {currentSlide + 1} / {slides.length}
      </span>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="px-4 py-2 bg-white rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-opacity text-slate-700 hover:bg-slate-100"
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>

      {/* Progress Bar - cores ILPI */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-[#f8ecd1]/70">
        <div
          className="h-1.5 bg-gradient-to-r from-[#F2D06B] via-[#BF8C2C] to-[#8C5C03] transition-all duration-300 ease-in-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </main>
  );
};

export default App;
