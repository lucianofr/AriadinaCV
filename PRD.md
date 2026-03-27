# PRD — AriadinaCV Landing Page

## 1. Objetivo

Criar uma landing page de currículo profissional para **Ariadina Astori Porto**, consultora de projetos do Banco Interamericano de Desenvolvimento (BID), com foco em apresentação clara de sua trajetória em gestão e coordenação de projetos de desenvolvimento público.

---

## 2. Perfil da Profissional

| Campo | Informação |
|---|---|
| **Nome** | Ariadina Astori Porto |
| **Localização** | Vila Velha, Espírito Santo, Brasil |
| **Cargo atual** | Consultora — Banco Interamericano de Desenvolvimento (BID) |
| **Área** | Governança · Escritório de Projetos · Escritório de Processos |
| **LinkedIn** | [linkedin.com/in/ariadina-astori-porto-bb915338](https://www.linkedin.com/in/ariadina-astori-porto-bb915338/) |

### Experiência identificada

**Banco Interamericano de Desenvolvimento (BID)**
- Consultora de projetos com foco em monitoramento, coordenação e execução de projetos de desenvolvimento
- Participou de missão de supervisão do programa **Moderniza-ES** (Espírito Santo) — modernização do sistema prisional — analisando progresso físico e financeiro do projeto
- Atuação nas áreas de Escritório de Projetos (PMO) e Escritório de Processos

**Governo do Estado do Espírito Santo**
- Coordenadora de Gestão de Projetos
- Experiência com governança pública e gerenciamento de projetos governamentais

### Formação acadêmica

- **Faculdade Multivix** — Vila Velha, ES (curso/ano a confirmar com a cliente)

> **Nota:** O LinkedIn bloqueia acesso automatizado. As informações acima são as levantadas via fontes públicas. Antes do desenvolvimento, validar com Ariadina: cargo exato no BID, período das experiências, formação completa, habilidades e idiomas, foto profissional e e-mail/contato público.

---

## 3. Stack Técnica

O projeto já está scaffoldado com **Vite + React 19 + TypeScript**. A stack recomendada mantém essa base e adiciona:

| Camada | Tecnologia | Justificativa |
|---|---|---|
| Framework | React 19 + Vite | Já configurado; build rápido, HMR |
| Linguagem | TypeScript (strict) | Já configurado |
| Estilização | **Tailwind CSS v4** | Utilitários rápidos, responsividade nativa, sem overhead de CSS manual |
| Animações | **Framer Motion** | Scroll reveal, fade-in de seções — padrão do mercado 2026 |
| Ícones | **Lucide React** | Leve, consistente, tree-shakable |
| Formulário de contato | **EmailJS** ou link `mailto:` | Sem backend necessário |
| Deploy | Vercel ou GitHub Pages | Gratuito, CI/CD automático |

**Sem necessidade de:** router, gerenciador de estado global, banco de dados.

---

## 4. Arquitetura de Componentes

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx         # Navegação fixa com smooth scroll
│   │   └── Footer.tsx         # Links sociais + copyright
│   ├── sections/
│   │   ├── Hero.tsx           # Foto, nome, cargo, CTA
│   │   ├── About.tsx          # Resumo profissional
│   │   ├── Experience.tsx     # Timeline de experiências
│   │   ├── Education.tsx      # Formação acadêmica
│   │   ├── Skills.tsx         # Competências e idiomas
│   │   └── Contact.tsx        # E-mail / LinkedIn / localização
│   └── ui/
│       ├── SectionTitle.tsx   # Componente reutilizável de título
│       ├── TimelineItem.tsx   # Item de experiência/educação
│       └── SkillBadge.tsx     # Badge de habilidade
├── data/
│   └── resume.ts              # Todos os dados do CV em um arquivo TypeScript
├── App.tsx
└── main.tsx
```

Todos os dados ficam em `src/data/resume.ts` — nenhum texto hardcoded nos componentes.

---

## 5. Design

### Paleta de Cores

Profissional, confiante e elegante — adequada para consultoria internacional:

| Token | Cor | Uso |
|---|---|---|
| `primary` | `#1B3A5C` (azul naval profundo) | Títulos, navbar, destaques |
| `accent` | `#2E86AB` (azul médio) | CTAs, links, bordas ativas |
| `neutral-light` | `#F5F7FA` | Fundo de seções alternadas |
| `neutral-dark` | `#1A1A2E` | Texto corrido |
| `white` | `#FFFFFF` | Fundo principal |

> Referência de cor: identidade visual do BID (tons de azul institucionais).

### Tipografia

- **Títulos:** `Inter` ou `Plus Jakarta Sans` — peso 700/800
- **Corpo:** `Inter` — peso 400/500
- Fonte carregada via Google Fonts

### Estilo Geral

- Layout **minimalista com espaço em branco generoso**
- Seções alternando fundo branco e `neutral-light`
- Timeline vertical para Experiência e Educação
- Animações sutis de **fade-in ao scroll** (Framer Motion `whileInView`)
- 100% **responsivo** (mobile-first)
- Navbar com **smooth scroll** para as âncoras de seção

---

## 6. Seções da Página

| # | Seção | Conteúdo |
|---|---|---|
| 1 | **Hero** | Foto profissional, nome completo, cargo atual, localização, botão "Baixar CV" e botão "Contato" |
| 2 | **Sobre** | Parágrafo de resumo profissional (2–3 frases) |
| 3 | **Experiência** | Timeline: BID (atual) → Governo ES → experiências anteriores |
| 4 | **Formação** | Multivix + cursos/certificações relevantes |
| 5 | **Habilidades** | Competências técnicas (gestão de projetos, PMO, monitoramento) + idiomas |
| 6 | **Contato** | E-mail, LinkedIn, localização (Vila Velha, ES) |

---

## 7. Requisitos Não-Funcionais

- **Performance:** Lighthouse score ≥ 90 em todas as métricas
- **SEO básico:** meta tags de título, descrição e Open Graph (para compartilhamento no LinkedIn)
- **Acessibilidade:** contraste WCAG AA, atributos `alt` em imagens, navegação por teclado
- **Internacionalização:** página em **português** (idioma principal); estrutura preparada para futura versão em inglês/espanhol se necessário

---

## 8. Informações a Coletar com a Cliente

Antes de iniciar o desenvolvimento das seções de conteúdo, validar:

- [ ] Foto profissional (formato quadrado ou retrato, alta resolução)
- [ ] Cargo exato e período no BID
- [ ] Lista completa de experiências anteriores (empresa, cargo, período, principais atividades)
- [ ] Formação acadêmica completa (curso, instituição, ano)
- [ ] Certificações relevantes (PMP, PM4R, etc.)
- [ ] Idiomas e nível de proficiência
- [ ] Habilidades técnicas que deseja destacar
- [ ] E-mail ou forma de contato que deve aparecer na página
- [ ] Deseja disponibilizar PDF do currículo para download?
- [ ] Preferência de domínio para o deploy

---

## 9. Fora do Escopo

- Blog ou conteúdo dinâmico
- Área administrativa / CMS
- Autenticação
- Versão multi-idioma (no MVP)
