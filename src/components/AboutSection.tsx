import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Photo Container */}
        <div className="relative rounded-2xl overflow-hidden aspect-square glass-card p-3 shadow-2xl group border border-[#00f5ff]/20">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00f5ff]/20 to-[#571bc1]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none rounded-xl" />
          <img
            src={PERSONAL_INFO.profileImage}
            alt="Karen Silva - Engenharia & Análise de Dados"
            className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-[1.03]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-lg border border-white/20 backdrop-blur-md z-20 hidden sm:flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-[#00f5ff] uppercase tracking-wider">Perfil Profissional</p>
              <p className="text-sm font-bold text-white">Karen Silva</p>
            </div>
            <div className="px-3 py-1 rounded-full bg-[#00f5ff]/20 text-[#63f7ff] text-xs font-bold border border-[#00f5ff]/30">
              Engenharia Civil & Dados
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#571bc1]/20 text-[#d0bcff] border border-[#571bc1]/40 text-xs font-bold tracking-wider uppercase">
            SOBRE MIM
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e9feff] tracking-tight">
            {PERSONAL_INFO.aboutTitle}
          </h2>

          <p className="text-base sm:text-lg text-[#b9caca] leading-relaxed">
            {PERSONAL_INFO.aboutParagraph1}
          </p>

          <p className="text-base sm:text-lg text-[#b9caca] leading-relaxed">
            {PERSONAL_INFO.aboutParagraph2}
          </p>

          {/* Stats cards matching requirement 2 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-[#3a494a]/30">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card p-3 sm:p-4 rounded-xl text-center hover:border-[#00f5ff]/40 transition-colors border border-[#3a494a]/30 flex flex-col justify-center"
              >
                <p className="text-2xl sm:text-3xl font-extrabold text-[#00f5ff] font-mono">
                  {stat.value}
                </p>
                <p className="text-[11px] sm:text-xs uppercase tracking-wider text-[#b9caca] mt-1 font-semibold leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
