import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ExternalLink, Sparkles, Code2, BarChart2, Cpu } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProject: (project: Project) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>('Todos');

  const categories = ['Todos', 'BI & Analytics', 'Python Automation', 'Machine Learning & AI'];

  const filteredProjects =
    filter === 'Todos'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-[#131b2e]/30 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#e9feff] mb-3">
            Portfólio Híbrido
          </h2>
          <p className="text-[#b9caca] text-base sm:text-lg max-w-xl mx-auto">
            Onde a estrutura da engenharia encontra a fluidez dos dados.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                filter === cat
                  ? 'bg-[#00f5ff] text-[#003739] shadow-[0_0_15px_rgba(0,245,255,0.4)] font-bold'
                  : 'bg-[#171f33] text-[#b9caca] border border-[#3a494a]/40 hover:border-[#00f5ff]/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer border border-[#3a494a]/30 hover:border-[#00f5ff]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,245,255,0.15)] flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="h-52 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171f33] via-transparent to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 z-20 px-3 py-1 bg-[#0b1326]/80 backdrop-blur-md rounded-full text-[11px] font-bold text-[#00f5ff] border border-[#00f5ff]/30 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>Demo Interativo</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {project.demoType === 'powerbi' ? (
                      <BarChart2 className="w-4 h-4 text-[#00f5ff]" />
                    ) : project.demoType === 'python' ? (
                      <Code2 className="w-4 h-4 text-[#00f5ff]" />
                    ) : (
                      <Cpu className="w-4 h-4 text-[#d0bcff]" />
                    )}
                    <h3 className="text-xl font-bold text-[#e9feff] group-hover:text-[#00f5ff] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#b9caca] leading-relaxed mb-6 opacity-80">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags Footer */}
              <div className="px-6 pb-6 pt-0 flex items-center justify-between gap-2 border-t border-white/5 pt-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 bg-[#00f5ff]/10 text-[#63f7ff] rounded-md text-[10px] font-bold border border-[#00f5ff]/20 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="text-xs font-semibold text-[#00f5ff] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Explorar <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
