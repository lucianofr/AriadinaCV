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
        pt: 'Atuação como Consultora Externa de Gestão de Projetos no Programa de Ampliação e Modernização do Sistema Prisional do Espírito Santo – Moderniza-ES, apoiando a Unidade de Gerenciamento do Programa (UGP-SEJUS) na condução estratégica, planejamento, monitoramento e acompanhamento da execução do programa financiado pelo BID.',
        es: 'Actuación como Consultora Externa de Gestión de Proyectos en el Programa de Ampliación y Modernización del Sistema Penitenciario de Espírito Santo – Moderniza-ES, apoyando a la Unidad de Gerenciamiento del Programa (UGP-SEJUS) en la conducción estratégica, planificación, monitoreo y seguimiento de la ejecución del programa financiado por el BID.',
        en: 'Served as an External Project Management Consultant in the Program for the Expansion and Modernization of the Prison System of Espírito Santo – Moderniza-ES, supporting the Program Management Unit (UGP-SEJUS) in strategic direction, planning, monitoring, and tracking the execution of the IDB-funded program.',
      },
      highlights: [
        {
          pt: 'Responsável pelo apoio às atividades de gestão de projetos, incluindo planejamento e monitoramento físico-financeiro, acompanhamento de cronogramas, metas, indicadores e riscos, elaboração de relatórios gerenciais, apoio à governança do programa e suporte à tomada de decisão estratégica.',
          es: 'Responsable del apoyo a las actividades relacionadas con la gestión de proyectos, incluyendo planificación y monitoreo físico-financiero, seguimiento de cronogramas, metas, indicadores y riesgos, elaboración de informes gerenciales, apoyo a la gobernanza del programa y soporte a la toma de decisiones estratégicas.',
          en: 'Responsible for supporting project management activities, including physical-financial planning and monitoring, tracking schedules, goals, indicators, and risks, preparing management reports, supporting program governance, and providing strategic decision support.',
        },
        {
          pt: 'Atua também no acompanhamento da execução contratual e dos processos de aquisições, articulação institucional e fortalecimento dos processos de gestão, monitoramento e execução das ações estratégicas do programa.',
          es: 'Actúa también en el seguimiento de la ejecución contractual y de los procesos de adquisiciones, articulación institucional y fortalecimiento de los procesos de gestión, monitoreo y ejecución de las acciones estratégicas del programa.',
          en: 'Also acts in tracking contract execution and procurement processes, institutional coordination, and strengthening management, monitoring, and execution processes for the program\'s strategic actions.',
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
        pt: 'Atuação na coordenação e gerenciamento de projetos estratégicos do Governo do Estado do Espírito Santo, com forte foco em planejamento, monitoramento e acompanhamento da execução de programas financiados pelo Banco Interamericano de Desenvolvimento (BID), assegurando alinhamento entre escopo, prazo, custo, indicadores e resultados estratégicos. Responsável pelo assessoramento à Coordenação Geral do programa e pela articulação e acompanhamento das equipes gestoras dos componentes.',
        es: 'Actuación en la coordinación y gestión de proyectos estratégicos del Gobierno del Estado de Espírito Santo, con fuerte enfoque en planificación, monitoreo y seguimiento de la ejecución de programas financiados por el Banco Interamericano de Desarrollo (BID), asegurando el alineamiento entre alcance, plazo, costo, indicadores y resultados estratégicos. Responsable del asesoramiento a la Coordinación General del programa y por la articulación y seguimiento de los equipos gestores de los componentes.',
        en: 'Coordination and management of strategic projects of the Government of the State of Espírito Santo, with a strong focus on planning, monitoring, and tracking the execution of programs funded by the Inter-American Development Bank (IDB), ensuring alignment between scope, schedule, cost, indicators, and strategic results. Responsible for advising the General Coordination of the program and for the coordination and tracking of component management teams.',
      },
      highlights: [
        {
          pt: 'Responsável pela elaboração e monitoramento de planos de trabalho, cronogramas, metas, indicadores de desempenho e relatórios gerenciais, apoiando a tomada de decisão estratégica e o acompanhamento da execução física e financeira dos projetos.',
          es: 'Responsable de la elaboración y monitoreo de planes de trabajo, cronogramas, metas, indicadores de desempeño e informes gerenciales, apoyando la toma de decisiones estratégicas y el seguimiento de la ejecución física y financiera de los proyectos.',
          en: 'Responsible for the preparation and monitoring of work plans, schedules, goals, performance indicators, and management reports, supporting strategic decision-making and tracking the physical and financial execution of projects.',
        },
        {
          pt: 'Atuação na identificação, avaliação e mitigação de riscos, monitoramento contínuo das ações estratégicas e desenvolvimento de instrumentos de controle, acompanhamento e monitoramento gerencial.',
          es: 'Actuación en la identificación, evaluación y mitigación de riesgos, monitoreo continuo de las acciones estratégicas y desarrollo de instrumentos de control, seguimiento y monitoreo gerencial.',
          en: 'Worked in the identification, assessment, and mitigation of risks, continuous monitoring of strategic actions, and development of control, tracking, and management monitoring instruments.',
        },
        {
          pt: 'Experiência na gestão e fiscalização de contratos administrativos, acompanhamento de processos de aquisições e participação em comissões de licitação conduzidas conforme as políticas e diretrizes do BID. Atuação também na elaboração de normas, fluxos e procedimentos operacionais, contribuindo para o fortalecimento da governança e da gestão pública orientada a resultados.',
          es: 'Experiencia en la gestión y fiscalización de contratos administrativos, seguimiento de procesos de adquisiciones y participación en comisiones de licitación conducidas conforme a las políticas y directrices del BID. Actuación también en la elaboración de normas, flujos y procedimientos operativos, contribuyendo al fortalecimiento de la gobernanza y de la gestión pública orientada a resultados.',
          en: 'Experience in the management and oversight of administrative contracts, tracking procurement processes, and participation in bidding committees conducted in accordance with IDB policies and guidelines. Also active in the elaboration of standards, flows, and operational procedures, contributing to the strengthening of governance and results-oriented public management.',
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
        pt: 'Atuação nas áreas de Governança, Escritório de Projetos (PMO), gestão de processos e planejamento estratégico institucional, com foco no planejamento, monitoramento e acompanhamento de projetos e iniciativas estratégicas do Tribunal. Responsável pela coordenação de projetos relacionados ao desenvolvimento de sistemas, melhoria de processos e infraestrutura institucional, assegurando alinhamento às diretrizes estratégicas e aos objetivos organizacionais.',
        es: 'Actuación en las áreas de Gobernanza, Oficina de Gestión de Proyectos (PMO), gestión de procesos y planificación estratégica institucional, con enfoque en la planificación, monitoreo y seguimiento de proyectos e iniciativas estratégicas del Tribunal. Responsable de la coordinación de proyectos relacionados con el desarrollo de sistemas, mejora de procesos e infraestructura institucional, asegurando la alineación con las directrices estratégicas y los objetivos organizacionales.',
        en: 'Worked in the areas of Governance, Project Management Office (PMO), process management, and institutional strategic planning, focusing on the planning, monitoring, and tracking of the Court\'s strategic projects and initiatives. Responsible for coordinating projects related to systems development, process improvement, and institutional infrastructure, ensuring alignment with strategic guidelines and organizational objectives.',
      },
      highlights: [
        {
          pt: 'Experiência na modelagem, análise e melhoria de processos utilizando metodologia BPM, construção e monitoramento de indicadores de desempenho institucional, acompanhamento de metas estratégicas e apoio à gestão orçamentária com metodologia matricial.',
          es: 'Experiencia en el modelado, análisis y mejora de procesos utilizando la metodología BPM, construcción y monitoreo de indicadores de desempeño institucional, seguimiento de metas estratégicas y apoyo a la gestión presupuestaria con metodología matricial.',
          en: 'Experience in modeling, analyzing, and improving processes using BPM methodology, constructing and monitoring institutional performance indicators, tracking strategic goals, and supporting budget management with matrix methodology.',
        },
        {
          pt: 'Atuação na elaboração de instrumentos gerenciais, monitoramento de resultados e fortalecimento da governança institucional orientada a desempenho e eficiência.',
          es: 'Actuación en la elaboración de instrumentos gerenciales, monitoreo de resultados y fortalecimiento de la gobernanza institucional orientada al desempeño y la eficiencia.',
          en: 'Active in the development of management instruments, monitoring results, and strengthening performance- and efficiency-oriented institutional governance.',
        },
        {
          pt: 'Aplicação de metodologias de Design Thinking na priorização e estruturação de projetos estratégicos, apoiando processos de inovação, melhoria contínua e tomada de decisão baseada em planejamento e monitoramento de resultados.',
          es: 'Aplicación de metodologías de Design Thinking en la priorización y estructuración de proyectos estratégicos, apoyando procesos de innovación, mejora continua y toma de decisiones basada en la planificación y el monitoreo de resultados.',
          en: 'Application of Design Thinking methodologies in the prioritization and structuring of strategic projects, supporting innovation processes, continuous improvement, and decision-making based on planning and results monitoring.',
        },
      ],
    },
    {
      company: 'Samarco Mineração',
      role: {
        pt: 'Gerência de Engenharia e Projetos – Atuação em Gestão de Documentação Técnica e Projetos',
        es: 'Gerencia de Ingeniería y Proyectos – Gestión de Documentación Técnica y Proyectos',
        en: 'Engineering & Projects Management – Technical Documentation & Project Management',
      },
      period: 'Abr 2006 – Set 2016',
      start: '2006-04',
      end: '2016-09',
      location: 'Ubú, Anchieta, ES',
      description: {
        pt: 'Atuação por mais de dez anos na Gerência de Engenharia e Projetos da Samarco Mineração, em empresas contratadas e posteriormente na própria companhia, com foco no planejamento, monitoramento e apoio à execução de projetos estruturantes de engenharia. Experiência consolidada em gestão e controle de documentação técnica, acompanhamento de cronogramas, elaboração de relatórios gerenciais e suporte técnico-administrativo à gestão de projetos em ambiente corporativo de alta complexidade.',
        es: 'Actuación por más de diez años en la Gerencia de Ingeniería y Proyectos de Samarco Mineração, en empresas contratistas y posteriormente en la propia compañía, con enfoque en la planificación, monitoreo y apoyo a la ejecución de proyectos estructurantes de ingeniería. Experiencia consolidada en gestión y control de documentación técnica, seguimiento de cronogramas, elaboración de informes gerenciales y soporte técnico-administrativo a la gestión de proyectos en un entorno corporativo de alta complejidad.',
        en: 'Worked for over ten years in the Engineering and Projects Management department of Samarco Mineração, under contracting firms and subsequently within the company itself, focusing on the planning, monitoring, and support of structural engineering projects. Consolidated experience in technical documentation management and control, schedule tracking, management report preparation, and technical-administrative support for project management in a highly complex corporate environment.',
      },
      highlights: [
        {
          pt: 'Responsável pelo controle técnico e administrativo de documentos de engenharia por meio do sistema SAP/R3P, assegurando rastreabilidade, conformidade e padronização dos processos documentais dos projetos.',
          es: 'Responsable del control técnico y administrativo de documentos de ingeniería por medio del sistema SAP/R3P, asegurando trazabilidad, conformidad y estandarización de los procesos documentales de los proyectos.',
          en: 'Responsible for the technical and administrative control of engineering documents through the SAP/R3P system, ensuring traceability, compliance, and standardization of project documentation processes.',
        },
        {
          pt: 'Atuação na elaboração e implementação de normas, fluxos e procedimentos de gestão documental, além do treinamento de equipes internas e contratadas quanto às diretrizes, padrões e processos operacionais.',
          es: 'Actuación en la elaboración e implementación de normas, flujos y procedimientos de gestión documental, además de la capacitación de equipos internos y contratistas sobre las directrices, estándares y procesos operativos.',
          en: 'Active in the development and implementation of standards, flows, and procedures for document management, as well as training internal and contracted teams on guidelines, standards, and operational processes.',
        },
        {
          pt: 'Experiência no acompanhamento da execução de projetos, monitoramento de atividades e prazos, elaboração de apresentações e indicadores gerenciais, contribuindo para a organização, controle e eficiência dos processos de gestão de projetos e engenharia.',
          es: 'Experiencia en el seguimiento de la ejecución de proyectos, monitoreo de actividades y plazos, elaboración de presentaciones e indicadores gerenciales, contribuyendo a la organización, control y eficiencia de los procesos de gestión de proyectos e ingeniería.',
          en: 'Experience in tracking project execution, monitoring activities and deadlines, and preparing management presentations and indicators, contributing to the organization, control, and efficiency of project and engineering management processes.',
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
