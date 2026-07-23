import React from 'react';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
  onExploreJourney: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProjects,
  onExploreJourney,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 pt-24 pb-16 engineering-grid overflow-hidden"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00f5ff]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#571bc1]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 glass-card rounded-2xl p-6 sm:p-10 md:p-16 max-w-4xl w-full text-center border-t border-l border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00f5ff]/10 text-[#63f7ff] border border-[#00f5ff]/25 text-xs sm:text-sm font-semibold tracking-wider mb-6 sm:mb-8 animate-pulse">
          <Sparkles className="w-4 h-4 text-[#00f5ff]" />
          <span>{PERSONAL_INFO.badge}</span>
        </div>

        {/* Title */}
        <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl leading-[1.15] tracking-tight mb-6 text-[#e9feff]">
          Construindo{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] via-[#63f7ff] to-[#d0bcff] drop-shadow-[0_0_20px_rgba(0,245,255,0.4)]">
            Inteligência
          </span>{' '}
          através da Estrutura.
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-[#b9caca] mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
          {PERSONAL_INFO.heroSubheadline}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              onExploreProjects();
            }}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#00f5ff] to-[#571bc1] text-[#002021] font-bold text-base sm:text-lg rounded-xl shadow-[0_10px_25px_rgba(0,245,255,0.25)] hover:shadow-[0_15px_35px_rgba(0,245,255,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Ver Projetos</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              onExploreJourney();
            }}
            className="w-full sm:w-auto px-8 py-4 glass-card border border-[#849495]/30 text-[#e9feff] font-semibold text-base sm:text-lg rounded-xl hover:bg-white/10 hover:border-[#00f5ff]/40 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Compass className="w-5 h-5 text-[#00f5ff]" />
            <span>Minha Jornada</span>
          </a>
        </div>
      </div>
    </section>
  );
};
