import type { Locale } from '../i18n/types';

type L = Record<Locale, string>;

export interface ExperienceItem {
  company: string;
  role: L;
  period: string;
  start: string;
  end: string | null;
  location: string;
  description: L;
  highlights: L[];
}

export interface EducationItem {
  institution: string;
  degree: L;
  period: string;
}


export const resume = {
  name: 'Ariadina Astori Porto',
  location: 'Vila Velha, Espírito Santo, Brasil',
  linkedin: 'https://www.linkedin.com/in/ariadina-astori-porto-bb915338/',
  email: 'ariadinaas@hotmail.com',

  experience: [
    {
      company: 'Banco Interamericano de Desenvolvimento',
      role: {
        pt: 'Consultora de Gestão de Projetos',
        es: 'Consultora de Gestión de Proyectos',
        en: 'Project Management Consultant',
      },
      period: 'Jun 2025 – Presente',
      start: '2025-06',
      end: null,
      location: 'Vitória, Espírito Santo, Brasil',
      description: {
        pt: 'Consultoria Externa de Gestão de Projetos do BID no Programa de Ampliação e Modernização do Sistema Prisional do Espírito Santo: Moderniza-ES.',
        es: 'Consultoría Externa de Gestión de Proyectos del BID en el Programa de Ampliación y Modernización del Sistema Penitenciario de Espírito Santo: Moderniza-ES.',
        en: "External Project Management Consultancy for the IDB's Program for the Expansion and Modernization of the Prison System of Espírito Santo: Moderniza-ES.",
      },
      highlights: [
        {
          pt: 'Liderança do componente de gestão de projetos no programa Moderniza-ES',
          es: 'Liderazgo del componente de gestión de proyectos en el programa Moderniza-ES',
          en: 'Leadership of the project management component in the Moderniza-ES program',
        },
        {
          pt: 'Monitoramento de cronogramas, indicadores e relatórios gerenciais',
          es: 'Monitoreo de cronogramas, indicadores e informes gerenciales',
          en: 'Monitoring schedules, KPIs, and management reports',
        },
        {
          pt: 'Coordenação junto às secretarias estaduais e equipes do BID',
          es: 'Coordinación con las secretarías estatales y equipos del BID',
          en: 'Coordination with state secretariats and IDB teams',
        },
      ],
    },
    {
      company: 'Governo do Estado do Espírito Santo',
      role: {
        pt: 'Coordenadora de Gestão de Projetos',
        es: 'Coordinadora de Gestión de Proyectos',
        en: 'Project Management Coordinator',
      },
      period: 'Dez 2019 – Jul 2025',
      start: '2019-12',
      end: '2025-07',
      location: 'Palácio Fonte Grande, Vitória, ES',
      description: {
        pt: 'Gerenciamento de projetos estratégicos do estado, assegurando alinhamento de escopo, custo e prazo. Assessoria à Coordenação Geral e coordenação de gerentes de componentes.',
        es: 'Gestión de proyectos estratégicos del estado, garantizando la alineación del alcance, costo y plazo. Asesoramiento a la Coordinación General y coordinación de gerentes de componentes.',
        en: 'Management of strategic state projects, ensuring alignment of scope, cost, and schedule. Advisory support to General Coordination and coordination of component managers.',
      },
      highlights: [
        {
          pt: 'Planejamento, negociação de prazos e elaboração de cronogramas',
          es: 'Planificación, negociación de plazos y elaboración de cronogramas',
          en: 'Planning, deadline negotiation, and schedule development',
        },
        {
          pt: 'Identificação, avaliação de riscos e monitoramento de indicadores',
          es: 'Identificación, evaluación de riesgos y monitoreo de indicadores',
          en: 'Risk identification, assessment, and indicator monitoring',
        },
        {
          pt: 'Gestão e fiscalização de contratos públicos',
          es: 'Gestión y fiscalización de contratos públicos',
          en: 'Public contract management and oversight',
        },
        {
          pt: 'Participação na comissão de licitações com métodos do BID',
          es: 'Participación en la comisión de licitaciones con métodos del BID',
          en: 'Member of the procurement committee using IDB methodologies',
        },
        {
          pt: 'Elaboração de normas, procedimentos e relatórios gerenciais',
          es: 'Elaboración de normas, procedimientos e informes gerenciales',
          en: 'Development of standards, procedures, and management reports',
        },
      ],
    },
    {
      company: 'Tribunal de Contas do Estado do Espírito Santo – TCEES',
      role: {
        pt: 'Consultora de Finanças Públicas na Governança',
        es: 'Consultora de Finanzas Públicas en Gobernanza',
        en: 'Public Finance Consultant – Governance',
      },
      period: 'Set 2016 – Dez 2019',
      start: '2016-09',
      end: '2019-12',
      location: 'Vitória, ES',
      description: {
        pt: 'Coordenação de projetos de desenvolvimento de sistemas, processos e infraestrutura. Aplicação de BPM e Design Thinking para seleção de projetos prioritários alinhados ao planejamento estratégico.',
        es: 'Coordinación de proyectos de desarrollo de sistemas, procesos e infraestructura. Aplicación de BPM y Design Thinking para la selección de proyectos prioritarios alineados con la planificación estratégica.',
        en: 'Coordination of systems development, process, and infrastructure projects. Application of BPM and Design Thinking for selecting priority projects aligned with strategic planning.',
      },
      highlights: [
        {
          pt: 'Modelagem de processos com metodologia BPM',
          es: 'Modelado de procesos con metodología BPM',
          en: 'Process modeling using BPM methodology',
        },
        {
          pt: 'Gerenciamento orçamentário com metodologia matricial',
          es: 'Gestión presupuestaria con metodología matricial',
          en: 'Budget management using matrix methodology',
        },
        {
          pt: 'Construção de indicadores de desempenho institucionais',
          es: 'Construcción de indicadores de desempeño institucionales',
          en: 'Development of institutional performance indicators',
        },
        {
          pt: 'Design Thinking aplicado à priorização estratégica de projetos',
          es: 'Design Thinking aplicado a la priorización estratégica de proyectos',
          en: 'Design Thinking applied to strategic project prioritization',
        },
      ],
    },
    {
      company: 'Samarco Mineração S.A.',
      role: {
        pt: 'Técnico Administrativo – Gerência de Engenharia e Projetos',
        es: 'Técnico Administrativo – Gerencia de Ingeniería y Proyectos',
        en: 'Administrative Technician – Engineering and Projects Management',
      },
      period: 'Abr 2015 – Set 2016',
      start: '2015-04',
      end: '2016-09',
      location: 'Ubú, Anchieta, ES',
      description: {
        pt: 'Planejamento e monitoramento de projetos estruturantes, gestão e controle de documentos técnicos utilizando SAP/R3P, e treinamento de contratadas em gestão documental.',
        es: 'Planificación y monitoreo de proyectos estructurantes, gestión y control de documentos técnicos usando SAP/R3P, y capacitación de contratistas en gestión documental.',
        en: 'Planning and monitoring of structural projects, technical document management using SAP/R3P, and training of contractors in document management.',
      },
      highlights: [
        {
          pt: 'Gestão e controle de documentos técnicos via SAP/R3P',
          es: 'Gestión y control de documentos técnicos vía SAP/R3P',
          en: 'Technical document management via SAP/R3P',
        },
        {
          pt: 'Elaboração e acompanhamento de cronogramas de projetos',
          es: 'Elaboración y seguimiento de cronogramas de proyectos',
          en: 'Development and monitoring of project schedules',
        },
        {
          pt: 'Treinamento de equipes em normas e procedimentos',
          es: 'Capacitación de equipos en normas y procedimientos',
          en: 'Team training on standards and procedures',
        },
      ],
    },
    {
      company: 'Time Now Engenharia S.A. (Contrato Samarco)',
      role: {
        pt: 'Técnica em Documentação – Gerência de Engenharia e Projetos',
        es: 'Técnica en Documentación – Gerencia de Ingeniería y Proyectos',
        en: 'Documentation Technician – Engineering and Projects Management',
      },
      period: 'Abr 2012 – Abr 2015',
      start: '2012-04',
      end: '2015-04',
      location: 'Ubú, Anchieta, ES',
      description: {
        pt: 'Gestão e controle de documentos técnicos de projetos estruturantes da Samarco Mineração, com uso do sistema SAP/R3P e elaboração de normas para gestão documental.',
        es: 'Gestión y control de documentos técnicos de proyectos estructurantes de Samarco Mineração, usando SAP/R3P y elaboración de normas para gestión documental.',
        en: 'Technical document management for Samarco Mineração structural projects, using SAP/R3P and developing document management standards.',
      },
      highlights: [
        {
          pt: 'Controle de processo técnico/administrativo via SAP/R3P',
          es: 'Control de proceso técnico/administrativo vía SAP/R3P',
          en: 'Technical/administrative process control via SAP/R3P',
        },
        {
          pt: 'Elaboração de procedimentos para gestão documental',
          es: 'Elaboración de procedimientos para gestión documental',
          en: 'Development of document management procedures',
        },
      ],
    },
    {
      company: 'Guimar Engenharia S.A. (Contrato Samarco)',
      role: {
        pt: 'Técnica em Documentação – Gerência de Engenharia e Projetos',
        es: 'Técnica en Documentación – Gerencia de Ingeniería y Proyectos',
        en: 'Documentation Technician – Engineering and Projects Management',
      },
      period: 'Abr 2008 – Abr 2012',
      start: '2008-04',
      end: '2012-04',
      location: 'Ubú, Anchieta, ES',
      description: {
        pt: 'Início de carreira em gestão de documentos e projetos estruturantes da Samarco Mineração. Controle técnico e administrativo de documentos, elaboração de normas e relatórios gerenciais.',
        es: 'Inicio de carrera en gestión de documentos y proyectos estructurantes de Samarco Mineração. Control técnico y administrativo de documentos, elaboración de normas e informes gerenciales.',
        en: 'Career start in document management and structural projects at Samarco Mineração. Technical and administrative document control, standards development, and management reporting.',
      },
      highlights: [
        {
          pt: 'Planejamento e monitoramento de execução de projetos',
          es: 'Planificación y monitoreo de ejecución de proyectos',
          en: 'Project execution planning and monitoring',
        },
        {
          pt: 'Relatórios e apresentações gerenciais periódicas',
          es: 'Informes y presentaciones gerenciales periódicos',
          en: 'Periodic management reports and presentations',
        },
      ],
    },
  ] satisfies ExperienceItem[],

  education: [
    {
      institution: 'IPOG – Instituto de Pós-Graduação e Graduação',
      degree: {
        pt: 'MBA em Gestão de Projetos e Processos',
        es: 'MBA en Gestión de Proyectos y Procesos',
        en: 'MBA in Project and Process Management',
      },
      period: '2020 – 2022',
    },
    {
      institution: 'Multivix',
      degree: {
        pt: 'Bacharelado em Engenharia',
        es: 'Ingeniería (Grado)',
        en: 'Bachelor of Engineering',
      },
      period: '2019 – 2023',
    },
    {
      institution: 'Universidade Vila Velha – UVV',
      degree: {
        pt: 'Especialização em Gerenciamento de Projetos',
        es: 'Especialización en Gestión de Proyectos',
        en: 'Specialization in Project Management',
      },
      period: '2011 – 2013',
    },
    {
      institution: 'Faculdade Pitágoras',
      degree: {
        pt: 'Bacharelado em Administração de Empresas',
        es: 'Licenciatura en Administración de Empresas',
        en: 'Bachelor of Business Administration',
      },
      period: '2006 – 2010',
    },
  ] satisfies EducationItem[],

  skills: {
    project_management: [
      'PMO (Escritório de Projetos)',
      'Planejamento Estratégico',
      'Gestão de Cronogramas',
      'Identificação & Avaliação de Riscos',
      'Monitoramento de Indicadores (KPIs)',
      'Gestão & Fiscalização de Contratos',
      'Lições Aprendidas',
    ],
    governance: [
      'BPM (Modelagem de Processos)',
      'Gestão Orçamentária',
      'Normas & Procedimentos',
      'Licitações (Métodos BID)',
      'Indicadores de Desempenho',
    ],
    methodologies: [
      'Scrum',
      'Design Thinking',
      'Benchmark',
      'Metodologia Matricial',
    ],
    tools: [
      'SAP / R3P',
      'MS Project',
      'Microsoft Office',
      'Apresentações Gerenciais',
    ],
  },
} as const;
