import React, { useState } from 'react';
import { ALL_SKILLS_LIST, SKILL_CATEGORIES } from '../data/portfolioData';
import { Building2, BarChart3, CheckCircle2, ChevronRight, X, Sparkles, Search } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<{
    categoryTitle: string;
    name: string;
    level: string;
    description: string;
  } | null>(null);

  const [filterCategory, setFilterCategory] = useState<'all' | 'gestao' | 'dados'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Find skill detail from categories
  const handleSkillClick = (skillName: string) => {
    let found = false;
    for (const cat of SKILL_CATEGORIES) {
      const match = cat.items.find(
        (i) => i.name.toLowerCase() === skillName.toLowerCase() || skillName.toLowerCase().includes(i.name.toLowerCase())
      );
      if (match) {
        setSelectedSkill({
          categoryTitle: cat.title,
          name: match.name,
          level: match.level,
          description: match.description,
        });
        found = true;
        break;
      }
    }

    if (!found) {
      setSelectedSkill({
        categoryTitle: 'Competência Técnica',
        name: skillName,
        level: 'Avançado',
        description: `Competência aplicada em projetos de gestão de engenharia e análise de dados por Karen Silva.`,
      });
    }
  };

  const filteredSkills = ALL_SKILLS_LIST.filter((skill) => {
    const matchesSearch = skill.toLowerCase().includes(searchTerm.toLowerCase());
    if (!matchesSearch) return false;

    if (filterCategory === 'all') return true;

    const dataKeywords = ['python', 'sql', 'pandas', 'numpy', 'power bi', 'tableau', 'excel', 'google sheets', 'dados', 'exploratória', 'storytelling', 'ética'];
    const isDataSkill = dataKeywords.some((k) => skill.toLowerCase().includes(k));

    if (filterCategory === 'dados') return isDataSkill;
    if (filterCategory === 'gestao') return !isDataSkill;

    return true;
  });

  return (
    <section id="skills" className="py-20 bg-[#091020] relative border-y border-[#3a494a]/20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f5ff]/10 text-[#00f5ff] text-xs font-bold mb-3 border border-[#00f5ff]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXPERTISE MULTIDISCIPLINAR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e9feff] mb-3 tracking-tight">
            Competências Técnicas
          </h2>
          <p className="text-[#b9caca] text-base sm:text-lg max-w-2xl mx-auto">
            Integração contínua entre engenharia de campo, gestão orçamentária e análise de dados avançada.
          </p>
          <div className="h-1 w-20 bg-[#00f5ff] mx-auto rounded-full mt-4 shadow-[0_0_15px_rgba(0,245,255,0.8)]"></div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-[#131b2e]/60 p-4 rounded-2xl border border-[#3a494a]/30">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filterCategory === 'all'
                  ? 'bg-[#00f5ff] text-[#003739] font-bold shadow-[0_0_12px_rgba(0,245,255,0.4)]'
                  : 'bg-[#171f33] text-[#b9caca] hover:text-white border border-[#3a494a]/40'
              }`}
            >
              Todas ({ALL_SKILLS_LIST.length})
            </button>
            <button
              onClick={() => setFilterCategory('gestao')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filterCategory === 'gestao'
                  ? 'bg-[#00f5ff] text-[#003739] font-bold shadow-[0_0_12px_rgba(0,245,255,0.4)]'
                  : 'bg-[#171f33] text-[#b9caca] hover:text-white border border-[#3a494a]/40'
              }`}
            >
              Gestão & Engenharia
            </button>
            <button
              onClick={() => setFilterCategory('dados')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filterCategory === 'dados'
                  ? 'bg-[#d0bcff] text-[#3c0091] font-bold shadow-[0_0_12px_rgba(208,188,255,0.4)]'
                  : 'bg-[#171f33] text-[#b9caca] hover:text-white border border-[#3a494a]/40'
              }`}
            >
              Análise de Dados & Tech
            </button>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#b9caca] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar competência..."
              className="w-full bg-[#171f33] border border-[#3a494a]/50 text-xs sm:text-sm text-white pl-9 pr-3 py-2 rounded-xl outline-none focus:border-[#00f5ff] transition-colors"
            />
          </div>
        </div>

        {/* Pill Tag Cloud - Exactly as shown in Image 3 */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-[#3a494a]/40 bg-[#0c1427]/80 shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {filteredSkills.map((skill, idx) => {
              const isTech = ['python', 'sql', 'pandas', 'numpy', 'power bi', 'tableau', 'excel', 'google sheets', 'dados', 'storytelling'].some(
                (k) => skill.toLowerCase().includes(k)
              );
              return (
                <button
                  key={idx}
                  onClick={() => handleSkillClick(skill)}
                  className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer flex items-center gap-2 group border ${
                    isTech
                      ? 'bg-[#131b2e] text-[#dae2fd] border-[#3a494a]/60 hover:border-[#00f5ff] hover:text-[#00f5ff] hover:bg-[#00f5ff]/10 hover:shadow-[0_0_15px_rgba(0,245,255,0.25)]'
                      : 'bg-[#131b2e] text-[#dae2fd] border-[#3a494a]/60 hover:border-[#d0bcff] hover:text-[#d0bcff] hover:bg-[#d0bcff]/10 hover:shadow-[0_0_15px_rgba(208,188,255,0.25)]'
                  }`}
                >
                  <span>{skill}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Two main categories summary cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {SKILL_CATEGORIES.map((cat) => {
            const isGestao = cat.id === 'gestao-engenharia';
            return (
              <div
                key={cat.id}
                className={`glass-card p-6 rounded-2xl border transition-all duration-300 ${
                  isGestao ? 'border-[#00f5ff]/30 bg-[#131b2e]/40' : 'border-[#d0bcff]/30 bg-[#131b2e]/40'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2.5 rounded-xl ${
                      isGestao ? 'bg-[#00f5ff]/10 text-[#00f5ff]' : 'bg-[#d0bcff]/10 text-[#d0bcff]'
                    }`}
                  >
                    {isGestao ? <Building2 className="w-6 h-6" /> : <BarChart3 className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                    <p className="text-xs text-[#b9caca]">
                      {isGestao ? 'Experiência em Canteiros no Vale do Paraíba' : 'Análise, BI e Visualização'}
                    </p>
                  </div>
                </div>

                <div className="text-xs text-[#b9caca] leading-relaxed">
                  {isGestao
                    ? 'Atuação prática na gestão de obras públicas e privadas, planejamento quantitativo, orçamentos, auditoria e fiscalização com rigor técnico e conformidade com normas ABNT.'
                    : 'Capacidade de extrair, higienizar, modelar e apresentar dados de negócio através de pipelines Python/SQL e dashboards no Power BI e Tableau com foco em tomada de decisão.'}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Skill Detail Modal */}
      {selectedSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-card max-w-md w-full p-6 sm:p-8 rounded-3xl border border-[#00f5ff]/30 shadow-2xl relative">
            <button
              onClick={() => setSelectedSkill(null)}
              className="absolute top-5 right-5 p-2 text-[#b9caca] hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-6 h-6 text-[#00f5ff]" />
              <span className="text-xs font-mono font-bold text-[#00f5ff] uppercase tracking-wider">
                {selectedSkill.categoryTitle}
              </span>
            </div>

            <h4 className="text-2xl font-bold text-white mb-2">{selectedSkill.name}</h4>
            <div className="inline-block px-3 py-1 rounded-full bg-[#00f5ff]/10 text-[#63f7ff] text-xs font-bold mb-4 border border-[#00f5ff]/30">
              Proficiência: {selectedSkill.level}
            </div>

            <p className="text-sm text-[#b9caca] leading-relaxed mb-6">
              {selectedSkill.description}
            </p>

            <button
              onClick={() => setSelectedSkill(null)}
              className="w-full py-3 bg-[#00f5ff] text-[#003739] font-bold rounded-xl text-sm hover:brightness-110 transition-all cursor-pointer shadow-[0_0_15px_rgba(0,245,255,0.3)]"
            >
              Fechar Detalhes
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
