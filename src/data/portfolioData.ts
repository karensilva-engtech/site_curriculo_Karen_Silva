import { Project, SkillCategory, ExperienceItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Karen Silva',
  handle: 'KAREN_SILVA',
  title: 'Engenharia & Análise de Dados',
  badge: 'ENGENHARIA CIVIL → ANÁLISE DE DADOS',
  heroHeadline: 'Construindo Inteligência através da Estrutura.',
  heroSubheadline:
    'De canteiros de obras no Vale do Paraíba a ecossistemas de dados. Traduzo complexidade estrutural e gestão de obras em insights estratégicos baseados em evidências.',
  aboutTitle: 'Engenharia Civil & Análise de Dados',
  aboutParagraph1:
    'Engenheira civil formada em 2023, com experiência no gerenciamento de obras de alta complexidade — de edifícios de alto padrão a obras públicas de grande impacto.',
  aboutParagraph2:
    'Hoje conecto engenharia à ciência de dados, utilizando ferramentas analíticas para transformar dados brutos de canteiros em inteligência de negócios: otimizando cronogramas, avaliando produtividade e garantindo eficiência de custos.',
  stats: [
    { label: 'Casas de Alto Padrão', value: '3' },
    { label: 'Prédios Residenciais', value: '2' },
    { label: 'Obras Públicas no Vale do Paraíba', value: '5+' },
    { label: 'Formação em Dados Google', value: '240h' },
  ],
  profileImage:
    'https://i.ibb.co/zdJJTHJ/1dc75eb5-3d6d-4401-8b8c-0ec7b1f9c015.jpg',
  linkedinUrl: 'https://www.linkedin.com/in/karen-gabrielle-silva/',
  whatsappUrl: 'https://wa.me/5512997622096',
  githubUrl: 'https://github.com/karensilva-data',
  email: 'karensilva.engcivil@gmail.com',
};

export const ALL_SKILLS_LIST = [
  'Gestão de Obras',
  'Gestão de Projetos',
  'Análise de cronogramas e controle de custos',
  'Controle de Custos',
  'Logística de Obras',
  'Fiscalização de Obras',
  'Controle de qualidade',
  'Coordenação de equipes',
  'Trabalho em equipe',
  'Coordenação multidisciplinar',
  'AutoCAD',
  'Revit',
  'Eberick',
  'BIM (Building Information Modeling)',
  'Orçamentos',
  'Comunicação com Stakeholders',
  'Liderança',
  'Lean Construction',
  'Gestão Estratégica de Fornecedores',
  'Segurança do Trabalho',
  'DDS (Diálogo Diário de Segurança)',
  'Planejamento e Gestão de Obras',
  'Python',
  'SQL',
  'Pandas (Python)',
  'NumPy',
  'Microsoft Power BI',
  'Tableau',
  'Excel',
  'Google Sheets',
  'Limpeza de dados',
  'Preparação de Dados',
  'Análise Exploratória',
  'Data Storytelling',
  'Tomada de decisão orientada a dados',
  'Ética de Dados',
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'gestao-engenharia',
    title: 'Gestão & Engenharia Civil',
    iconName: 'architecture',
    colorClass: 'text-[#00f5ff]',
    items: [
      { name: 'Gestão de Obras', level: 'Avançado', description: 'Gestão integral de canteiros, escopo e entregas físicas.' },
      { name: 'Gestão de Projetos', level: 'Avançado', description: 'Metodologias de planejamento, controle de ciclo de vida e marcos.' },
      { name: 'Análise de cronogramas e controle de custos', level: 'Avançado', description: 'Acompanhamento físico-financeiro, curva S e desvios orçamentários.' },
      { name: 'Controle de Custos', level: 'Avançado', description: 'Análise quantitativa de insumos e negociação com fornecedores.' },
      { name: 'Fiscalização de Obras', level: 'Avançado', description: 'Auditoria de execução segundo normas ABNT e compliance.' },
      { name: 'Logística de Obras', level: 'Avançado', description: 'Gestão de estoque, suprimentos e prevenções de rupturas.' },
      { name: 'Controle de qualidade', level: 'Avançado', description: 'Redução de índices de não conformidade e inspeção técnica.' },
      { name: 'Coordenação de equipes', level: 'Avançado', description: 'Liderança de campo, alocação de times e gestão de produtividade.' },
      { name: 'AutoCAD', level: 'Avançado', description: 'Projetos 2D/3D e detalhamento técnico executivo.' },
      { name: 'Revit', level: 'Intermediário', description: 'Modelagem BIM e integração disciplinar.' },
      { name: 'Eberick', level: 'Intermediário', description: 'Cálculo e verificação de estruturas de concreto armado.' },
      { name: 'BIM (Building Information Modeling)', level: 'Intermediário', description: 'Compatibilização de projetos e extração de quantitativos.' },
      { name: 'Orçamentos', level: 'Avançado', description: 'Composição de custos unitários (SINAPI/TCPO) e BDI.' },
      { name: 'Lean Construction', level: 'Avançado', description: 'Minimização de desperdícios no canteiro de obras.' },
      { name: 'Segurança do Trabalho & DDS', level: 'Avançado', description: 'Diálogo diário de segurança e prevenção de acidentes.' },
    ],
  },
  {
    id: 'analise-dados',
    title: 'Análise de Dados & Tecnologia',
    iconName: 'analytics',
    colorClass: 'text-[#d0bcff]',
    items: [
      { name: 'Python', level: 'Avançado', description: 'Automação de rotinas analíticas e scripts de ETL.' },
      { name: 'Pandas (Python)', level: 'Avançado', description: 'Manipulação e higienização de grandes conjuntos de dados.' },
      { name: 'NumPy', level: 'Avançado', description: 'Computação científica e operações matriciais.' },
      { name: 'SQL', level: 'Avançado', description: 'Consultas com JOINs, Window Functions, agregamentos e CTEs.' },
      { name: 'Microsoft Power BI', level: 'Avançado', description: 'Dashboards executivos, modelagem Star Schema e fórmulas DAX.' },
      { name: 'Tableau', level: 'Avançado', description: 'Visualizações interativas e storyboards orientados a negócios.' },
      { name: 'Excel & Google Sheets', level: 'Avançado', description: 'Fórmulas avançadas, Power Query e automatizações.' },
      { name: 'Limpeza e Preparação de Dados', level: 'Avançado', description: 'Tratamento de nulos, outliers e estruturação de pipelines.' },
      { name: 'Análise Exploratória', level: 'Avançado', description: 'Identificação de padrões, tendências e anomalias em dados.' },
      { name: 'Data Storytelling', level: 'Avançado', description: 'Tradução de métricas complexas em narrativas claras para stakeholders.' },
      { name: 'Tomada de decisão orientada a dados', level: 'Avançado', description: 'Criação de indicadores de desempenho (KPIs) acionáveis.' },
      { name: 'Ética de Dados', level: 'Avançado', description: 'Privacidade, governança e integridade das informações.' },
    ],
  },
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    id: 'timeline-1',
    period: 'Jul 2024 – Abr 2025',
    title: 'Engenheira Civil (Foco em Gestão e Planejamento)',
    organization: 'ADM Fabricação e Montagem de Estruturas Metálicas EIRELI • São José dos Campos, SP',
    type: 'Engenharia & Gestão',
    description: 'Gestão integral de planejamento, cronogramas e controle de qualidade para estruturas metálicas.',
    highlights: [
      'Gerenciei o planejamento e o ciclo de vida de projetos, analisando especificações técnicas e traduzindo requisitos complexos em planos de execução acionáveis.',
      'Elaborei e monitorei cronogramas e orçamentos, utilizando análise quantitativa para identificar desvios e propor correções de rota, garantindo a eficiência financeira dos projetos.',
      'Implementei controle de qualidade rigoroso, auditando materiais e serviços contra normas técnicas (compliance), reduzindo índices de não conformidade.',
      'Gerei relatórios técnicos detalhados e mantive registros organizados para stakeholders, facilitando a transparência e o acompanhamento do progresso.',
      'Utilizei softwares de gestão e metodologias BIM para centralizar informações e otimizar o fluxo de dados da obra.',
    ],
    badgeColor: 'primary',
  },
  {
    id: 'timeline-2',
    period: 'Fev 2024 – Abr 2024',
    title: 'Assistente de Engenharia Civil',
    organization: 'Si América Engenharia • São José dos Campos, SP',
    type: 'Suprimentos & Qualidade',
    description: 'Levantamentos quantitativos, controle de estoque e acompanhamento de obras de alvenaria estrutural.',
    highlights: [
      'Realizei levantamentos quantitativos precisos de materiais e insumos, criando bases de dados para controle de estoque e logística.',
      'Monitorei indicadores de execução de serviços em obra de alvenaria estrutural, assegurando a aderência ao planejado.',
      'Atuei na logística e suprimentos, analisando demandas para evitar rupturas no fornecimento de materiais essenciais.',
    ],
    badgeColor: 'secondary',
  },
  {
    id: 'timeline-3',
    period: 'Jan 2022 – Fev 2024',
    title: 'Assistente de Engenharia Civil',
    organization: 'Coevo Construtora / A6D Construtora • São José dos Campos, SP',
    type: 'Orçamentos & Campo',
    description: 'Orçamentação para obras de alto padrão, acompanhamento físico-financeiro e mapa de chuvas.',
    highlights: [
      'Conduzi orçamentos detalhados de serviços e materiais para 3 obras de alto padrão, comparando fornecedores e otimizando custos através de análise de cotações.',
      'Coletei dados em campo (medições e mapa de chuvas) para alimentar diários de obra e relatórios de progresso físico-financeiro.',
      'Analisei cronogramas para antecipar gargalos logísticos e garantir a entrega dentro dos prazos estipulados.',
    ],
    badgeColor: 'secondary',
  },
  {
    id: 'timeline-4',
    period: 'Abr 2021 – Out 2021',
    title: 'Estagiária em Engenharia Civil',
    organization: 'MZ3 Engenharia Ltda • São José dos Campos, SP',
    type: 'Estágio de Campo',
    description: 'Atuação na construção do prédio de alto padrão Marinella e coordenação de equipes de campo.',
    highlights: [
      'Atuação na construção do prédio de alto padrão Marinella, auxiliando diretamente na coordenação de equipe de campo e rotinas de execução.',
      'Acompanhamento de processos logísticos internos, controle físico de cronograma e verificação minuciosa da qualidade de serviços e aplicação de materiais.',
      'Responsável pelo controle patrimonial e conferência de materiais no estoque do canteiro.',
    ],
    badgeColor: 'outline',
  },
];

export const EDUCATION_LIST = [
  {
    title: 'Bacharelado em Engenharia Civil',
    institution: 'Universidade Paulista (UNIP)',
    details: 'Concluído em Junho de 2023',
    badge: 'Graduação',
  },
  {
    title: 'Certificado Profissional de Análise de Dados Google',
    institution: 'Coursera (240 horas de carga horária)',
    details: 'Concluído em Junho de 2026',
    badge: 'Especialização em Dados',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'buildsense-bi',
    title: 'BuildSense BI',
    subtitle:
      'Dashboard Power BI para monitoramento em tempo real de resíduos e produtividade em canteiros de obra.',
    description:
      'Dashboard Power BI para monitoramento em tempo real de resíduos e produtividade em canteiros de obra.',
    longDescription:
      'Desenvolvido para integrar dados de medições físicas, registros de suprimentos e cronogramas de obras no Vale do Paraíba. O BuildSense BI permite a engenheiros residentes identificar desperdícios de materiais (concreto, aço, argamassa) em tempo real, calculando a variação entre orçado vs. realizado.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAggpHI6bftZfsGrbuKI0M_M3u1dy3ydxcugFB1NIph43XL1Z1ENRppYHTQDna6Xwu9AuYMR6Pef-1rDrOQe-9ednrGPSGT8VCfp8jMKyD2OhCxl6r9xGMhx6AYgvQCv_iiI2g0S0xB3K1f0SYERegZhiBC6P32S_NyTGCiDl4WmIJsVCFb153A2fl9DGXcqs1LQgaCc1k251a3t1VceWcLogZQ5uFznlsZCODMFEgsmlAycVPFS1n8Bw-3I9dnPnTUgz5QqHbBETik',
    tags: ['SQL', 'POWER BI'],
    category: 'BI & Analytics',
    impactMetrics: [
      { label: 'Redução de desperdício', value: '-22%' },
      { label: 'Tempo de consolidação', value: 'De 4 dias p/ Instantâneo' },
      { label: 'Obras monitoradas', value: '8 Canteiros' },
    ],
    technologies: ['Power BI', 'DAX', 'SQL Server', 'Power Query', 'ETL Pipelines'],
    demoType: 'powerbi',
    codeSnippet: `// DAX Measure - Calculo de Desvio Estrutural de Insumo
Desvio_Material_Pct = 
VAR QtdConsumida = SUM('Fato_Consumo'[Qtd_Realizada])
VAR QtdPrevista = SUM('Fato_Consumo'[Qtd_Orcada])
RETURN
IF(
    QtdPrevista > 0,
    DIVIDE(QtdConsumida - QtdPrevista, QtdPrevista, 0),
    BLANK()
)`,
  },
  {
    id: 'struturepy',
    title: 'StruturePy',
    subtitle:
      'Script Python para automação de análise de tensões em estruturas metálicas via processamento de planilhas CSV.',
    description:
      'Script Python para automação de análise de tensões em estruturas metálicas via processamento de planilhas CSV.',
    longDescription:
      'Ferramenta desenvolvida para reduzir tempo em verificações de perfis e treliças metálicas. Lê outputs de softwares em CSV, processa matrizes de rigidez com Pandas/NumPy e gera relatórios de segurança de acordo com a NBR 8800.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBasBAET344CUaSqp58KiRojvHgHDbVM8zH7s3UYTk3N8jLbD3_iSlut6kgxA5k5_7ntYZCIL1MO_tyz1orI6wUuXIq3EngksaTkUOM1Qzvx4_4JGNJq9AsKnXwxbAvhYhTT7pmmN_ViCwdGm80j4GUEilZ4_AxXflzCWgh_SMrZi5m3_4l3V_o6G6yt4xrWzWLPmtEWZ1CPkKO7-W_cGD3Iulzcuvq48_qopHSzZVyfUyQO7-qo7AqSOEJRlB6bTKErO2GV4dkMwe8',
    tags: ['PYTHON', 'PANDAS'],
    category: 'Python Automation',
    impactMetrics: [
      { label: 'Ganho de Produtividade', value: '12x mais rápido' },
      { label: 'Arquivos Processados', value: '50.000+ linhas/s' },
      { label: 'Norma Técnica', value: 'NBR 8800 Compliant' },
    ],
    technologies: ['Python 3.11', 'Pandas', 'NumPy', 'Matplotlib', 'Streamlit'],
    demoType: 'python',
    codeSnippet: `import pandas as pd
import numpy as np

def calculate_stress_ratio(df, f_y=345.0):
    """
    Calcula a taxa de utilização de tensão para perfis metálicos (NBR 8800)
    """
    df['sigma_comb'] = np.sqrt(df['axial_stress']**2 + 3 * (df['shear_stress']**2))
    df['utilization_ratio'] = df['sigma_comb'] / f_y
    df['status'] = np.where(df['utilization_ratio'] <= 1.0, 'APROVADO', 'CRÍTICO')
    return df`,
  },
  {
    id: 'costmaster-ai',
    title: 'CostMaster AI',
    subtitle:
      'Modelo preditivo simples para estimativa de flutuação de preços de insumos básicos da construção civil.',
    description:
      'Modelo preditivo simples para estimativa de flutuação de preços de insumos básicos da construção civil.',
    longDescription:
      'Sistema de inteligência preditiva treinado com séries temporais do SINAPI, FGV (INCC) e cotações de commodities (Aço, Cimento, Cobre). Permite estimar o impacto inflacionário do orçamento executivo em projetos.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAf41dWiuISwB7NEMR7rFSUiTNHtk4kog1_XBsP_e0o8E5F4VNaKNPw9Aqm1Tmotos23l1OMWvmmLOOnuTuCExKjr-tDcojlgbGHb_2JJMBN8xqnOG55skEE-ZU3iaPRIrMld5F92ejWyp1vEITGEIvW7OGDv9GCe5qtcPLRLI3Gf5-GKquhwR_K5Ug8b687jS-LDmM2u3QHBygiYk5dQOEN4OdUKL1zGrrmWoV_WDa04S37UUHxNcMOn0ONRWMZO4auzUBPKvQ4d4b',
    tags: ['MACHINE LEARNING', 'EXCEL ADV'],
    category: 'Machine Learning & AI',
    impactMetrics: [
      { label: 'Acurácia Preditiva (MAPE)', value: '94.2%' },
      { label: 'Economia em Licitações', value: 'R$ 480k previstos' },
      { label: 'Séries Temporais', value: '5 Anos de Histórico' },
    ],
    technologies: ['Scikit-Learn', 'XGBoost', 'Statsmodels', 'FastAPI', 'Excel OpenPyXL'],
    demoType: 'ml',
    codeSnippet: `from xgboost import XGBRegressor
from sklearn.model_selection import time_series_split

# Treinamento do Modelo Preditivo do Cimento/Aço
model = XGBRegressor(n_estimators=300, learning_rate=0.03, max_depth=5)
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
mape = np.mean(np.abs((y_test - y_pred) / y_test)) * 100
print(f"Erro Médio Absoluto Percentual: {mape:.2f}%")`,
  },
];
