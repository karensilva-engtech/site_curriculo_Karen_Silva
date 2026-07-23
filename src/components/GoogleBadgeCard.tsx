import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, Award, ChevronDown } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  tools: string;
  skills: string;
}

const COURSES: Course[] = [
  {
    id: 1,
    title: '1. Fundamentos: Dados, Dados, Em Todo Lugar',
    tools: 'Google Sheets, SQL',
    skills: 'Pensamento analítico, ciclo de vida dos dados, ecossistema de dados',
  },
  {
    id: 2,
    title: '2. Fazer Perguntas para Tomar Decisões Baseadas em Dados',
    tools: 'Google Sheets, Structured Thinking',
    skills: 'Perguntas SMART, métricas, tomada de decisão orientada a dados',
  },
  {
    id: 3,
    title: '3. Preparar Dados para Exploração',
    tools: 'SQL, BigQuery, Google Sheets',
    skills: 'Tipos de dados, estruturas, viés, ética de dados, metadados',
  },
  {
    id: 4,
    title: '4. Processar Dados Sujos para Dados Limpos',
    tools: 'SQL, Google Sheets, Excel',
    skills: 'Limpeza de dados, integridade, verificação, documentação',
  },
  {
    id: 5,
    title: '5. Analisar Dados para Responder Perguntas',
    tools: 'SQL, Google Sheets, Tabelas Dinâmicas',
    skills: 'Agregação, cálculos, análise exploratória, formatação',
  },
  {
    id: 6,
    title: '6. Compartilhar Dados Pela Arte da Visualização',
    tools: 'Tableau, Google Slides',
    skills: 'Visualização de dados, dashboards, storytelling, apresentações',
  },
  {
    id: 7,
    title: '7. Introdução à Análise de Dados com Python',
    tools: 'Python, Pandas, Jupyter Notebook',
    skills: 'Programação, manipulação de dados, automação',
  },
  {
    id: 8,
    title: '8. Projeto Final: Complete um Estudo de Caso',
    tools: 'SQL, Python, Tableau, Google Sheets',
    skills: 'Portfólio, estudo de caso completo, processo analítico end-to-end',
  },
  {
    id: 9,
    title: '9. Acelere Sua Busca de Emprego com IA',
    tools: 'IA generativa, LinkedIn',
    skills: 'Currículo, portfólio, networking, preparação para entrevistas',
  },
];

const PILLARS = ['SQL', 'Python', 'Tableau', 'BigQuery', 'Sheets', 'Pandas', 'NumPy', 'Excel'];

export const GoogleBadgeCard: React.FC = () => {
  const [activeCourse, setActiveCourse] = useState<number | null>(null);

  const toggleCourse = (id: number) => {
    setActiveCourse(activeCourse === id ? null : id);
  };

  return (
    <section className="py-16 max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
      <div className="glass-card p-6 md:p-10 rounded-3xl border border-[#00f5ff]/30 bg-[#0c1427]/90 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row gap-8 lg:gap-12 relative overflow-hidden">
        {/* Glow accent in background */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#00f5ff]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#571bc1]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Left Column: Badge & Summary */}
        <div className="flex flex-col items-center gap-4 lg:w-5/12 text-center shrink-0">
          <div className="w-full flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#00f5ff]/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <img
                src="https://images.credly.com/size/340x340/images/d4185c81-d7ad-4220-bf32-46168be588bc/blob"
                alt="Google Data Analytics Professional Certificate Badge"
                className="relative w-36 h-36 md:w-44 md:h-44 rounded-2xl object-contain mx-auto transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="space-y-1.5 mt-2 w-full flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00f5ff]/10 text-[#00f5ff] text-xs font-bold border border-[#00f5ff]/30">
              <Award className="w-3.5 h-3.5" />
              <span>CERTIFICAÇÃO OFICIAL GOOGLE</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#e9feff] leading-snug">
              Certificado Profissional de Análise de Dados do Google
            </h3>
            <p className="text-sm text-[#b9caca] font-medium">
              Concluído por <span className="text-white font-semibold">Karen Da Silva</span>
            </p>
            <p className="text-xs text-[#849495] font-mono">
              12 de junho de 2026
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-[#00f5ff] font-medium bg-[#00f5ff]/10 p-2.5 rounded-xl border border-[#00f5ff]/20 w-full text-center">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Conta verificada · Coursera certifica a conclusão com sucesso</span>
          </div>

          {/* Floating Pillars / Tool Badges */}
          <div className="flex flex-wrap gap-2 mt-2 justify-center">
            {PILLARS.map((pillar, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-[#131b2e] border border-[#00f5ff]/20 text-xs font-mono font-medium text-[#dae2fd] hover:border-[#00f5ff] hover:text-[#00f5ff] transition-colors cursor-default shadow-sm"
              >
                {pillar}
              </span>
            ))}
          </div>

          {/* Verify Certificate Button */}
          <a
            href="https://www.credly.com/badges/c9bbda5f-f292-4901-a010-d12dcec05a92/linked_in_profile"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#00f5ff]/20 hover:bg-[#00f5ff]/30 text-[#e9feff] font-bold text-sm border border-[#00f5ff]/40 hover:border-[#00f5ff] transition-all duration-300 shadow-[0_0_20px_rgba(0,245,255,0.2)] group"
          >
            <span>Verificar Certificado</span>
            <ExternalLink className="w-4 h-4 text-[#00f5ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Right Column: Courses Grade Curricular */}
        <div className="lg:w-7/12 flex flex-col gap-3">
          <h4 className="text-base font-bold text-[#e9feff] flex items-center justify-between border-b border-[#3a494a]/30 pb-3">
            <span>Cursos Concluídos (9) - Grade Curricular</span>
            <span className="text-xs font-mono text-[#00f5ff]">240 HORAS</span>
          </h4>

          <div className="space-y-2.5">
            {COURSES.map((course) => {
              const isOpen = activeCourse === course.id;
              return (
                <div
                  key={course.id}
                  className="rounded-xl border border-[#3a494a]/40 bg-[#131b2e]/60 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleCourse(course.id)}
                    className="w-full p-3.5 text-left flex items-center justify-between gap-3 text-sm font-medium text-[#dae2fd] hover:text-[#00f5ff] hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <span className="leading-tight">{course.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 text-[#00f5ff] transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-3.5 pt-1 text-xs text-[#b9caca] border-t border-[#3a494a]/20 bg-[#0c1427]/60 space-y-1 animate-in fade-in duration-200">
                      <p>
                        <strong className="text-white">Ferramentas:</strong> {course.tools}
                      </p>
                      <p>
                        <strong className="text-white">Habilidades:</strong> {course.skills}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
