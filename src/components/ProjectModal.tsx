import React, { useState } from 'react';
import { Project } from '../types';
import {
  X,
  Code2,
  BarChart2,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink,
  Play,
  CheckCircle2,
  RefreshCw,
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'interactive' | 'code'>('interactive');

  // Interactive State for StruturePy
  const [axialLoad, setAxialLoad] = useState<number>(120);
  const [shearLoad, setShearLoad] = useState<number>(45);

  // Interactive State for CostMaster AI
  const [selectedMaterial, setSelectedMaterial] = useState<string>('Aço CA-50 (Kg)');
  const [forecastMonths, setForecastMonths] = useState<number>(12);

  // Interactive State for BuildSense BI
  const [selectedSite, setSelectedSite] = useState<string>('Oba #04 - Torre Horizon');

  // Calculation for StruturePy
  const fy = 345.0; // MPa steel yield strength
  const area = 42.5; // cm2
  const axialStress = (axialLoad * 10) / area; // MPa approx
  const shearStress = (shearLoad * 10) / area; // MPa approx
  const combinedStress = Math.sqrt(axialStress ** 2 + 3 * shearStress ** 2);
  const utilizationRatio = (combinedStress / fy) * 100;
  const isApproved = utilizationRatio <= 100;

  // Calculation for CostMaster AI
  const basePrices: Record<string, number> = {
    'Aço CA-50 (Kg)': 8.20,
    'Cimento CP II (Saco 50kg)': 36.50,
    'Concreto Fck 30 MPa (m³)': 390.00,
    'Cobre Revestido (m)': 24.80,
  };

  const inflationRates: Record<string, number> = {
    'Aço CA-50 (Kg)': 0.85, // % per month average
    'Cimento CP II (Saco 50kg)': 0.42,
    'Concreto Fck 30 MPa (m³)': 0.60,
    'Cobre Revestido (m)': 1.10,
  };

  const currentPrice = basePrices[selectedMaterial] || 10.0;
  const monthlyRate = inflationRates[selectedMaterial] || 0.5;
  const projectedPrice = currentPrice * Math.pow(1 + monthlyRate / 100, forecastMonths);
  const percentageIncrease = ((projectedPrice - currentPrice) / currentPrice) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="glass-card max-w-4xl w-full rounded-2xl border border-[#00f5ff]/30 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#3a494a]/30 flex items-center justify-between bg-[#131b2e]/60 shrink-0">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-[#00f5ff]/10 text-[#00f5ff]">
              {project.demoType === 'powerbi' ? (
                <BarChart2 className="w-6 h-6" />
              ) : project.demoType === 'python' ? (
                <Code2 className="w-6 h-6" />
              ) : (
                <Cpu className="w-6 h-6" />
              )}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-[#e9feff]">
                  {project.title}
                </h3>
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#00f5ff]/20 text-[#63f7ff] border border-[#00f5ff]/30">
                  {project.category}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#b9caca] line-clamp-1">
                {project.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#b9caca] hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#3a494a]/30 bg-[#0b1326]/50 px-6 shrink-0">
          <button
            onClick={() => setActiveTab('interactive')}
            className={`py-3 px-4 font-semibold text-xs sm:text-sm border-b-2 flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'interactive'
                ? 'border-[#00f5ff] text-[#00f5ff]'
                : 'border-transparent text-[#b9caca] hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Simulador / Demo Interativo</span>
          </button>
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-4 font-semibold text-xs sm:text-sm border-b-2 flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'border-[#00f5ff] text-[#00f5ff]'
                : 'border-transparent text-[#b9caca] hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Visão Geral & Impacto</span>
          </button>
          {project.codeSnippet && (
            <button
              onClick={() => setActiveTab('code')}
              className={`py-3 px-4 font-semibold text-xs sm:text-sm border-b-2 flex items-center gap-2 transition-colors cursor-pointer ${
                activeTab === 'code'
                  ? 'border-[#00f5ff] text-[#00f5ff]'
                  : 'border-transparent text-[#b9caca] hover:text-white'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>Código & Algoritmo</span>
            </button>
          )}
        </div>

        {/* Modal Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* INTERACTIVE DEMO TAB */}
          {activeTab === 'interactive' && (
            <div className="space-y-6">
              {/* BuildSense BI Interactive View */}
              {project.demoType === 'powerbi' && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#131b2e] p-4 rounded-xl border border-[#3a494a]/40">
                    <div>
                      <p className="text-xs font-mono text-[#00f5ff] uppercase font-bold">
                        Power BI Live Simulator
                      </p>
                      <p className="text-sm text-[#dae2fd]">
                        Selecione o Canteiro de Obras para atualizar os indicadores
                      </p>
                    </div>
                    <select
                      value={selectedSite}
                      onChange={(e) => setSelectedSite(e.target.value)}
                      className="bg-[#2d3449] border border-[#00f5ff]/40 text-xs sm:text-sm text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#00f5ff]"
                    >
                      <option value="Oba #04 - Torre Horizon">Obra #04 - Torre Horizon</option>
                      <option value="Obra #02 - Complexo Industrial">Obra #02 - Complexo Industrial</option>
                      <option value="Obra #07 - Ponte Metropolitana">Obra #07 - Ponte Metropolitana</option>
                    </select>
                  </div>

                  {/* Dashboard Metrics Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="bg-[#171f33] p-4 rounded-xl border border-white/5">
                      <p className="text-xs text-[#b9caca]">Economia de Material</p>
                      <p className="text-xl font-extrabold text-[#00f5ff] font-mono mt-1">
                        {selectedSite.includes('04') ? '-24.8%' : selectedSite.includes('02') ? '-18.2%' : '-31.0%'}
                      </p>
                      <p className="text-[10px] text-emerald-400 mt-0.5">▼ Dentro da meta NBR</p>
                    </div>

                    <div className="bg-[#171f33] p-4 rounded-xl border border-white/5">
                      <p className="text-xs text-[#b9caca]">Entulho Reciclado</p>
                      <p className="text-xl font-extrabold text-[#d0bcff] font-mono mt-1">
                        {selectedSite.includes('04') ? '142.8 Ton' : '89.4 Ton'}
                      </p>
                      <p className="text-[10px] text-[#00f5ff] mt-0.5">▲ +12% Mês Anterior</p>
                    </div>

                    <div className="bg-[#171f33] p-4 rounded-xl border border-white/5">
                      <p className="text-xs text-[#b9caca]">Aderência Cronograma</p>
                      <p className="text-xl font-extrabold text-emerald-400 font-mono mt-1">
                        {selectedSite.includes('04') ? '98.5%' : '94.0%'}
                      </p>
                      <p className="text-[10px] text-emerald-400 mt-0.5">Status: Em Dia</p>
                    </div>

                    <div className="bg-[#171f33] p-4 rounded-xl border border-white/5">
                      <p className="text-xs text-[#b9caca]">Alerta de Desperdício</p>
                      <p className="text-xl font-extrabold text-amber-400 font-mono mt-1">
                        02 Pontos
                      </p>
                      <p className="text-[10px] text-amber-400 mt-0.5">Bomba de Concreto</p>
                    </div>
                  </div>

                  {/* Visual Chart Simulation */}
                  <div className="bg-[#171f33] p-5 rounded-xl border border-[#3a494a]/30">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-sm font-bold text-[#e9feff]">
                        Consumo de Concreto & Aço: Orçado vs. Realizado ({selectedSite})
                      </h4>
                      <span className="text-[11px] font-mono text-[#00f5ff]">Sensores IoT Ativos</span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs text-[#b9caca] mb-1">
                          <span>Concreto Fck 30 MPa (m³)</span>
                          <span className="font-mono text-[#00f5ff]">420 m³ / 450 m³ (Orçado)</span>
                        </div>
                        <div className="w-full bg-[#0b1326] h-3 rounded-full overflow-hidden flex">
                          <div className="bg-[#00f5ff] h-full" style={{ width: '93%' }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs text-[#b9caca] mb-1">
                          <span>Aço CA-50 Cortado/Dobrado (Kg)</span>
                          <span className="font-mono text-[#d0bcff]">18.400 Kg / 19.000 Kg (Orçado)</span>
                        </div>
                        <div className="w-full bg-[#0b1326] h-3 rounded-full overflow-hidden flex">
                          <div className="bg-[#d0bcff] h-full" style={{ width: '96.8%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* StruturePy Interactive Stress Simulator */}
              {project.demoType === 'python' && (
                <div className="space-y-6">
                  <div className="bg-[#131b2e] p-4 rounded-xl border border-[#00f5ff]/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Code2 className="w-5 h-5 text-[#00f5ff]" />
                      <h4 className="text-sm font-bold text-white">
                        Simulador de Análise de Tensões (NBR 8800)
                      </h4>
                    </div>
                    <p className="text-xs text-[#b9caca]">
                      Ajuste a carga axial e o esforço cortante para calcular o fator de utilização da estrutura metálica em tempo real.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Controls */}
                    <div className="space-y-5 bg-[#171f33] p-5 rounded-xl border border-white/5">
                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-2">
                          <span className="text-[#dae2fd]">Esforço Axial (N_sd):</span>
                          <span className="font-mono text-[#00f5ff]">{axialLoad} kN</span>
                        </div>
                        <input
                          type="range"
                          min="10"
                          max="300"
                          value={axialLoad}
                          onChange={(e) => setAxialLoad(Number(e.target.value))}
                          className="w-full accent-[#00f5ff] cursor-pointer"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-2">
                          <span className="text-[#dae2fd]">Esforço Cortante (V_sd):</span>
                          <span className="font-mono text-[#d0bcff]">{shearLoad} kN</span>
                        </div>
                        <input
                          type="range"
                          min="5"
                          max="150"
                          value={shearLoad}
                          onChange={(e) => setShearLoad(Number(e.target.value))}
                          className="w-full accent-[#d0bcff] cursor-pointer"
                        />
                      </div>

                      <div className="p-3 bg-[#0b1326] rounded-lg text-xs font-mono space-y-1 text-[#b9caca]">
                        <p>Perfil: Viga W200x22.5 (Aço ASTM A572)</p>
                        <p>Tensão Escoamento (f_y): 345 MPa</p>
                        <p>Área Seção (A): 28.6 cm²</p>
                      </div>
                    </div>

                    {/* Results Display */}
                    <div className="bg-[#171f33] p-5 rounded-xl border border-white/5 flex flex-col justify-between">
                      <div>
                        <p className="text-xs text-[#b9caca] uppercase font-mono font-bold mb-1">
                          Resultado da Verificação Estrutural
                        </p>
                        <div className="flex items-center gap-3 my-2">
                          <span
                            className={`text-2xl font-mono font-extrabold ${
                              isApproved ? 'text-emerald-400' : 'text-red-400'
                            }`}
                          >
                            {utilizationRatio.toFixed(1)}% Utilização
                          </span>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold ${
                              isApproved
                                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                                : 'bg-red-500/20 text-red-400 border border-red-500/40'
                            }`}
                          >
                            {isApproved ? 'APROVADO (NBR 8800)' : 'CRÍTICO (SUPERDIMENSIONADO)'}
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-[#0b1326] h-3 rounded-full overflow-hidden my-3">
                          <div
                            className={`h-full transition-all duration-300 ${
                              isApproved ? 'bg-[#00f5ff]' : 'bg-red-500'
                            }`}
                            style={{ width: `${Math.min(utilizationRatio, 100)}%` }}
                          />
                        </div>

                        <div className="text-xs space-y-1 text-[#b9caca] font-mono mt-3">
                          <p>Tensão Combinada (Von Mises): {combinedStress.toFixed(1)} MPa</p>
                          <p>Tensão Admissível limite: {fy} MPa</p>
                        </div>
                      </div>

                      <div className="mt-4 p-3 bg-[#0b1326]/60 rounded-lg border border-white/10 text-xs text-[#dae2fd]">
                        💡 <strong className="text-[#00f5ff]">Automação Python:</strong> O script StruturePy avalia automaticamente 5.000 perfis simultaneamente e gera relatórios em PDF.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* CostMaster AI Interactive Forecast */}
              {project.demoType === 'ml' && (
                <div className="space-y-6">
                  <div className="bg-[#131b2e] p-4 rounded-xl border border-[#d0bcff]/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Cpu className="w-5 h-5 text-[#d0bcff]" />
                      <h4 className="text-sm font-bold text-white">
                        Simulador Preditivo de Inflação de Insumos (XGBoost)
                      </h4>
                    </div>
                    <p className="text-xs text-[#b9caca]">
                      Estime o impacto do reajuste de insumos para os próximos meses com inteligência preditiva.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Controls */}
                    <div className="space-y-4 bg-[#171f33] p-5 rounded-xl border border-white/5">
                      <div>
                        <label className="block text-xs font-semibold text-[#b9caca] mb-2">
                          Insumo da Construção Civil:
                        </label>
                        <select
                          value={selectedMaterial}
                          onChange={(e) => setSelectedMaterial(e.target.value)}
                          className="w-full bg-[#2d3449] border border-[#d0bcff]/40 text-sm text-white rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-[#d0bcff]"
                        >
                          <option value="Aço CA-50 (Kg)">Aço CA-50 (Kg)</option>
                          <option value="Cimento CP II (Saco 50kg)">Cimento CP II (Saco 50kg)</option>
                          <option value="Concreto Fck 30 MPa (m³)">Concreto Fck 30 MPa (m³)</option>
                          <option value="Cobre Revestido (m)">Cobre Revestido (m)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#b9caca] mb-2">
                          Horizonte de Previsão: <span className="text-[#00f5ff] font-mono">{forecastMonths} Meses</span>
                        </label>
                        <div className="flex gap-2">
                          {[3, 6, 12, 18, 24].map((m) => (
                            <button
                              key={m}
                              onClick={() => setForecastMonths(m)}
                              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                                forecastMonths === m
                                  ? 'bg-[#d0bcff] text-[#3c0091]'
                                  : 'bg-[#2d3449] text-[#b9caca] hover:bg-white/10'
                              }`}
                            >
                              {m}M
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="p-3 bg-[#0b1326] rounded-lg text-xs font-mono space-y-1 text-[#b9caca]">
                        <p>Modelo: XGBoost TimeSeries Regressor</p>
                        <p>Variáveis Exógenas: Dólar, Commodities, IPCA</p>
                        <p>Acurácia Histórica: 94.2%</p>
                      </div>
                    </div>

                    {/* Prediction Output */}
                    <div className="bg-[#171f33] p-5 rounded-xl border border-white/5 flex flex-col justify-between">
                      <div>
                        <p className="text-xs text-[#b9caca] font-mono font-bold uppercase">
                          Projeção Estimada ({forecastMonths} Meses)
                        </p>
                        <div className="mt-3 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-[#b9caca]">Preço Atual:</span>
                            <span className="font-mono text-white font-bold">
                              R$ {currentPrice.toFixed(2)}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-[#b9caca]">Preço Projetado:</span>
                            <span className="font-mono text-[#00f5ff] font-bold">
                              R$ {projectedPrice.toFixed(2)}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm pt-2 border-t border-white/10">
                            <span className="text-[#b9caca]">Variação Prevista:</span>
                            <span className="font-mono text-emerald-400 font-bold">
                              +{percentageIncrease.toFixed(2)}%
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-[#0b1326]/80 rounded-xl border border-[#d0bcff]/30 text-xs text-[#dae2fd]">
                        🎯 <strong className="text-[#d0bcff]">Recomendação Preditiva:</strong> Antecipar compras em lote até o mês 3 para mitigar impacto financeiro de R$ {(projectedPrice - currentPrice) * 5000} em grandes suprimentos.
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-mono font-bold text-[#00f5ff] uppercase tracking-wider mb-2">
                  Descrição Detalhada do Projeto
                </h4>
                <p className="text-sm sm:text-base text-[#b9caca] leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Impact Metrics Grid */}
              <div>
                <h4 className="text-sm font-mono font-bold text-[#00f5ff] uppercase tracking-wider mb-3">
                  Indicadores de Impacto Alcançados
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.impactMetrics.map((metric, idx) => (
                    <div key={idx} className="bg-[#171f33] p-4 rounded-xl border border-white/10">
                      <p className="text-2xl font-extrabold text-[#00f5ff] font-mono">
                        {metric.value}
                      </p>
                      <p className="text-xs text-[#b9caca] mt-1 font-medium">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-mono font-bold text-[#00f5ff] uppercase tracking-wider mb-3">
                  Stack Tecnológica Utilizada
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-[#2d3449] text-[#e9feff] text-xs font-semibold rounded-lg border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* CODE TAB */}
          {activeTab === 'code' && project.codeSnippet && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#00f5ff]">
                  Trecho de Código Técnico
                </span>
                <span className="text-xs text-[#b9caca]">Linguagem / Framework</span>
              </div>
              <pre className="bg-[#060e20] p-4 sm:p-5 rounded-xl border border-[#3a494a]/40 text-xs sm:text-sm font-mono text-[#63f7ff] overflow-x-auto leading-relaxed shadow-inner">
                <code>{project.codeSnippet}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-6 border-t border-[#3a494a]/30 bg-[#131b2e]/60 flex items-center justify-between shrink-0">
          <span className="text-xs text-[#b9caca] hidden sm:inline">
            Karen Silva • Portfólio de Engenharia & Dados
          </span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#00f5ff] text-[#003739] font-bold rounded-xl text-sm hover:brightness-110 transition-all cursor-pointer"
          >
            Fechar Visualização
          </button>
        </div>
      </div>
    </div>
  );
};
