import React, { useState, useEffect, useCallback } from 'react';
import { Slide1_Intro } from './components/Slide1_Intro';
import { Slide2_About } from './components/Slide2_About';
import { Slide3_Strategy } from './components/Slide3_Strategy';
import { Slide4_Proposal } from './components/Slide4_Proposal';
import { Slide5_Closing } from './components/Slide5_Closing';
import { Navigation } from './components/Navigation';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  Slide1_Intro,
  Slide2_About,
  Slide3_Strategy,
  Slide4_Proposal,
  Slide5_Closing
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="w-screen h-screen bg-slate-200 flex items-center justify-center overflow-hidden">
      {/* Presentation Container (Aspect Ratio 16:9 approx) */}
      <div className="relative w-full h-full md:w-[1280px] md:h-[720px] bg-white shadow-2xl md:rounded-2xl overflow-hidden flex flex-col">
        
        <AnimatePresence mode='wait' custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full absolute top-0 left-0"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>

        {/* Progress Bar (Top) */}
        <div className="absolute top-0 left-0 h-1 bg-slate-100 w-full z-50">
           <motion.div 
             className="h-full bg-blue-600"
             initial={{ width: 0 }}
             animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
             transition={{ duration: 0.3 }}
           />
        </div>
      </div>

      <Navigation 
        currentSlide={currentSlide} 
        totalSlides={slides.length} 
        onNext={nextSlide} 
        onPrev={prevSlide} 
      />
      
      {/* Mobile Hint */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-slate-400 text-xs md:hidden">
        Swipe disabled. Use buttons.
      </div>
    </div>
  );
}