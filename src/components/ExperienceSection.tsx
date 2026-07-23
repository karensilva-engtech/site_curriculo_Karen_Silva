import React, { useState } from 'react';
import { EXPERIENCE_TIMELINE, EDUCATION_LIST } from '../data/portfolioData';
import { Calendar, MapPin, GraduationCap, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

interface TimelineCombinedItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  description?: string;
  highlights?: string[];
  type: 'experience' | 'education';
  nodeColor: 'cyan' | 'purple' | 'blue' | 'gray';
  badgeLabel?: string;
}

export const ExperienceSection: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    'exp-1': true,
    'exp-2': true,
    'exp-3': true,
    'exp-4': true,
    'edu-1': true,
    'edu-2': true,
  });

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const timelineItems: TimelineCombinedItem[] = [
    {
      id: 'edu-1',
      period: 'Concluído em junho de 2026',
      title: 'Google Data Analytics Certificate',
      organization: 'Certificação Profissional • Coursera (240h)',
      description:
        'Foco em processos de limpeza de dados, análise exploratória, SQL, Python, Tableau e visualização avançada para BI corporativo.',
      type: 'education',
      nodeColor: 'cyan',
      badgeLabel: 'Certificação em Dados',
    },
    {
      id: 'exp-1',
      period: 'Jul 2024 – Abr 2025',
      title: 'Engenheira Civil (Foco em Gestão e Planejamento)',
      organization: 'ADM Fabricação e Montagem de Estruturas Metálicas EIRELI • São José dos Campos, SP',
      type: 'experience',
      nodeColor: 'purple',
      highlights: EXPERIENCE_TIMELINE[0].highlights,
      badgeLabel: 'Engenharia & Gestão',
    },
    {
      id: 'exp-2',
      period: 'Fev 2024 – Abr 2024',
      title: 'Assistente de Engenharia Civil',
      organization: 'Si América Engenharia • São José dos Campos, SP',
      type: 'experience',
      nodeColor: 'blue',
      highlights: EXPERIENCE_TIMELINE[1].highlights,
      badgeLabel: 'Suprimentos & Qualidade',
    },
    {
      id: 'exp-3',
      period: 'Jan 2022 – Fev 2024',
      title: 'Assistente de Engenharia Civil',
      organization: 'Coevo Construtora / A6D Construtora • São José dos Campos, SP',
      type: 'experience',
      nodeColor: 'cyan',
      highlights: EXPERIENCE_TIMELINE[2].highlights,
      badgeLabel: 'Orçamentos & Campo',
    },
    {
      id: 'exp-4',
      period: 'Abr 2021 – Out 2021',
      title: 'Estagiária em Engenharia Civil',
      organization: 'MZ3 Engenharia Ltda • São José dos Campos, SP',
      type: 'experience',
      nodeColor: 'purple',
      highlights: EXPERIENCE_TIMELINE[3].highlights,
      badgeLabel: 'Estágio de Campo',
    },
    {
      id: 'edu-2',
      period: '2018 — 2023',
      title: 'Bacharelado em Engenharia Civil',
      organization: 'UNIP - Universidade Paulista • Concluído em Junho de 2023',
      description:
        'Formação sólida em exatas, resolução de problemas complexos, cálculo estrutural e gerenciamento técnico de grandes obras.',
      type: 'education',
      nodeColor: 'gray',
      badgeLabel: 'Graduação',
    },
  ];

  const getNodeStyles = (color: TimelineCombinedItem['nodeColor']) => {
    switch (color) {
      case 'cyan':
        return {
          node: 'bg-[#00f5ff] shadow-[0_0_15px_#00f5ff]',
          text: 'text-[#00f5ff]',
          border: 'border-[#00f5ff]/30 hover:border-[#00f5ff]/60',
        };
      case 'purple':
        return {
          node: 'bg-[#d0bcff] shadow-[0_0_15px_#d0bcff]',
          text: 'text-[#d0bcff]',
          border: 'border-[#571bc1]/40 hover:border-[#d0bcff]/60',
        };
      case 'blue':
        return {
          node: 'bg-[#38bdf8] shadow-[0_0_15px_#38bdf8]',
          text: 'text-[#38bdf8]',
          border: 'border-[#38bdf8]/30 hover:border-[#38bdf8]/60',
        };
      case 'gray':
      default:
        return {
          node: 'bg-[#94a3b8] shadow-[0_0_12px_#94a3b8]',
          text: 'text-[#94a3b8]',
          border: 'border-[#3a494a]/40 hover:border-[#94a3b8]/60',
        };
    }
  };

  return (
    <section id="experience" className="py-20 max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
      {/* Section Header */}
      <div className="mb-16 text-center">
        <div className="inline-block px-3.5 py-1 rounded-full bg-[#00f5ff]/10 text-[#00f5ff] border border-[#00f5ff]/30 text-xs font-bold tracking-wider mb-3 uppercase">
          TRAJETÓRIA INTEGRADA
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e9feff] tracking-tight">
          Formação & Experiência
        </h2>
        <p className="text-[#b9caca] mt-2 text-base max-w-xl mx-auto">
          Trajetória em linha do tempo, unindo gerenciamento de obras civis e formação avançada em dados.
        </p>
      </div>

      {/* Alternating Timeline Layout matching Image 1 */}
      <div className="relative">
        {/* Central Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-3 bottom-3 w-0.5 bg-[#3a494a]/40 md:-translate-x-1/2" />

        <div className="space-y-10 md:space-y-12">
          {timelineItems.map((item, index) => {
            const styles = getNodeStyles(item.nodeColor);
            const isEven = index % 2 === 0;
            const isOpen = !!expandedCards[item.id];

            return (
              <div
                key={item.id}
                className="relative flex flex-col md:flex-row items-start md:items-center group"
              >
                {/* Glowing Node Dot on Central Line */}
                <div
                  className={`absolute left-4 md:left-1/2 top-6 md:top-8 -translate-x-1/2 z-10 w-4 h-4 rounded-full ${styles.node} transition-transform duration-300 group-hover:scale-125`}
                />

                {/* Card Container - Left or Right */}
                <div
                  className={`w-full pl-10 md:pl-0 md:w-1/2 ${
                    isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
                  }`}
                >
                  <div
                    className={`glass-card p-6 sm:p-7 rounded-2xl border ${styles.border} transition-all duration-300 bg-[#0c1427]/80 shadow-[0_10px_30px_rgba(0,0,0,0.3)] text-left`}
                  >
                    {/* Header Row */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <span className={`text-xs font-mono font-bold ${styles.text}`}>
                          {item.period}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-[#e9feff] mt-0.5">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-[#b9caca] italic mt-0.5">
                          {item.organization}
                        </p>
                      </div>

                      {item.highlights && item.highlights.length > 0 && (
                        <button
                          onClick={() => toggleCard(item.id)}
                          aria-label="Toggle details"
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#b9caca] transition-colors shrink-0"
                        >
                          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                      )}
                    </div>

                    {/* Short Description */}
                    {item.description && (
                      <p className="text-xs sm:text-sm text-[#b9caca] leading-relaxed mt-2">
                        {item.description}
                      </p>
                    )}

                    {/* Expandable Highlights list for Work Experiences */}
                    {item.highlights && item.highlights.length > 0 && isOpen && (
                      <div className="mt-4 pt-3 border-t border-[#3a494a]/30 space-y-2">
                        {item.highlights.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#b9caca] leading-relaxed">
                            <span className={`w-1.5 h-1.5 rounded-full ${styles.node} shrink-0 mt-2`} />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Badge */}
                    {item.badgeLabel && (
                      <div className="mt-4 pt-3 border-t border-[#3a494a]/20 flex items-center justify-between">
                        <span className="text-[11px] font-medium text-[#849495] flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#b9caca]" />
                          São José dos Campos, SP
                        </span>
                        <span
                          className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 ${styles.text}`}
                        >
                          {item.badgeLabel}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
