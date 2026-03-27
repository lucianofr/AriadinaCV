# SPEC — AriadinaCV Landing Page

## 1. Visão Geral

Landing page de currículo profissional para **Ariadina Astori Porto**, consultora do BID. SPA (Single Page Application) sem backend, focada em performance, acessibilidade e presença profissional.

**Idioma padrão:** Português (pt-BR)
**Versões adicionais:** Espanhol (es) e Inglês (en) — selecionáveis via alternador de idioma na Navbar

---

## 2. Stack Tecnológica

### Já instalado

| Pacote | Versão | Papel |
|---|---|---|
| `react` | ^19.2.4 | Framework UI |
| `react-dom` | ^19.2.4 | Renderização DOM |
| `typescript` | ~5.9.3 | Tipagem estática (strict mode) |
| `vite` | ^8.0.1 | Build tool + dev server |
| `@vitejs/plugin-react` | ^6.0.1 | Transform React (Oxc) |

### A instalar

| Pacote | Versão alvo | Papel |
|---|---|---|
| `tailwindcss` | v4 | Estilização utilitária + responsividade |
| `@tailwindcss/vite` | v4 | Plugin Vite para Tailwind v4 |
| `framer-motion` | latest | Animações scroll-reveal e fade-in |
| `lucide-react` | latest | Ícones SVG (tree-shakable) |

### Internacionalização (i18n)

Implementação **manual e leve**, sem biblioteca externa:
- Arquivo `src/i18n/translations.ts` com objeto tipado contendo todas as strings nas três línguas
- Hook `src/i18n/useTranslation.ts` expondo a string selecionada
- Estado de idioma ativo gerenciado em `App.tsx` via `useState`, passado como prop ou via Context

### Contato

- Link `mailto:` ou botão LinkedIn — sem backend/EmailJS no MVP

---

## 3. Arquivos a Criar

### `src/data/`

| Arquivo | Conteúdo |
|---|---|
| `src/data/resume.ts` | Dados estruturados do CV (empresas, cargos, períodos, formação, habilidades, idiomas) |

### `src/i18n/`

| Arquivo | Conteúdo |
|---|---|
| `src/i18n/translations.ts` | Objeto com chaves de string para `pt`, `es` e `en` |
| `src/i18n/useTranslation.ts` | Hook que retorna o objeto de tradução ativo |
| `src/i18n/types.ts` | Tipo `Locale = 'pt' | 'es' | 'en'` e interface `Translations` |

### `src/components/layout/`

| Arquivo | Conteúdo |
|---|---|
| `src/components/layout/Navbar.tsx` | Navegação fixa, smooth scroll, alternador de idioma (PT / ES / EN) |
| `src/components/layout/Footer.tsx` | Links sociais (LinkedIn), copyright |

### `src/components/sections/`

| Arquivo | Conteúdo |
|---|---|
| `src/components/sections/Hero.tsx` | Foto, nome, cargo, localização, botões CTA |
| `src/components/sections/About.tsx` | Resumo profissional (2–3 parágrafos) |
| `src/components/sections/Experience.tsx` | Timeline vertical de experiências |
| `src/components/sections/Education.tsx` | Formação acadêmica e certificações |
| `src/components/sections/Skills.tsx` | Competências técnicas + idiomas |
| `src/components/sections/Contact.tsx` | E-mail, LinkedIn, localização |

### `src/components/ui/`

| Arquivo | Conteúdo |
|---|---|
| `src/components/ui/SectionTitle.tsx` | Título de seção reutilizável com linha decorativa |
| `src/components/ui/TimelineItem.tsx` | Item de timeline (experiência / educação) |
| `src/components/ui/SkillBadge.tsx` | Badge de habilidade/competência |
| `src/components/ui/LanguageSwitcher.tsx` | Botões PT / ES / EN |

### Assets

| Arquivo | Conteúdo |
|---|---|
| `src/assets/profile.jpg` | Foto profissional de Ariadina (a fornecer pela cliente) |
| `public/ariadina-cv.pdf` | PDF do currículo para download (opcional, a fornecer) |

---

## 4. Arquivos a Modificar

| Arquivo | Modificação |
|---|---|
| `src/App.tsx` | Substituir scaffold Vite pelo layout completo: `<Navbar>` + seções + `<Footer>`; gerenciar estado de idioma |
| `src/index.css` | Substituir estilos padrão Vite pela configuração Tailwind v4 (`@import "tailwindcss"`) e tokens CSS customizados |
| `src/App.css` | Remover (arquivo vazio/desnecessário após migração para Tailwind) |
| `index.html` | Atualizar `<title>`, adicionar meta description, Open Graph tags, preconnect Google Fonts |
| `vite.config.ts` | Adicionar plugin `@tailwindcss/vite` |
| `package.json` | Adicionar dependências novas (`tailwindcss`, `framer-motion`, `lucide-react`) |

---

## 5. Arquivos a Remover

| Arquivo | Motivo |
|---|---|
| `src/assets/react.svg` | Asset de exemplo do scaffold Vite |
| `src/assets/vite.svg` | Asset de exemplo do scaffold Vite |
| `src/App.css` | Substituído por Tailwind |

---

## 6. Design & Tema

### Paleta de Cores

Inspirada na identidade visual do BID — tons institucionais de azul:

| Token CSS | Valor | Uso |
|---|---|---|
| `--color-primary` | `#1B3A5C` | Títulos, navbar, destaques |
| `--color-accent` | `#2E86AB` | CTAs, links, bordas ativas, timeline |
| `--color-bg` | `#FFFFFF` | Fundo principal de seções |
| `--color-bg-alt` | `#F5F7FA` | Fundo alternado de seções |
| `--color-text` | `#1A1A2E` | Texto corrido |
| `--color-text-muted` | `#6B7280` | Textos secundários, datas |

### Tipografia

- **Família:** `Plus Jakarta Sans` (títulos peso 700/800) + `Inter` (corpo peso 400/500)
- **Carga:** Google Fonts via `<link>` no `index.html`

### Estilo Geral

- Layout **minimalista** com espaço em branco generoso
- Seções alternando fundo `--color-bg` e `--color-bg-alt`
- Timeline vertical com marcador circular colorido em `--color-accent`
- Animações **fade-in ao scroll** via Framer Motion `whileInView` (sutil, 0.5s)
- 100% **responsivo** — abordagem mobile-first com breakpoints Tailwind (`sm`, `md`, `lg`)
- Navbar fixa com **smooth scroll** para âncoras de seção
- Hover states em links e botões com transição suave (`transition-colors duration-200`)

### Seções e Ordem

| # | ID âncora | Seção | Fundo |
|---|---|---|---|
| 1 | `#hero` | Hero | `--color-bg` |
| 2 | `#sobre` | Sobre | `--color-bg-alt` |
| 3 | `#experiencia` | Experiência | `--color-bg` |
| 4 | `#formacao` | Formação | `--color-bg-alt` |
| 5 | `#habilidades` | Habilidades | `--color-bg` |
| 6 | `#contato` | Contato | `--color-primary` (fundo escuro) |

---

## 7. Internacionalização (i18n)

- A página carrega em **Português (pt-BR)** por padrão
- O idioma selecionado é persistido via `localStorage`
- A Navbar exibe um alternador `PT | ES | EN`; o idioma ativo recebe destaque visual
- Todas as strings de UI residem em `src/i18n/translations.ts` — nenhum texto hardcoded nos componentes
- Os dados do CV em `src/data/resume.ts` incluem campos traduzidos para os três idiomas onde necessário (descrição de cargos, resumo profissional, nomes de habilidades)
- URLs e âncoras permanecem em português independente do idioma selecionado

---

## 8. SEO & Meta Tags

Configurados em `index.html`:

```html
<title>Ariadina Astori Porto — Consultora de Projetos | BID</title>
<meta name="description" content="Currículo profissional de Ariadina Astori Porto, consultora do BID especializada em gestão de projetos, PMO e governança pública." />
<meta property="og:title" content="Ariadina Astori Porto — Consultora de Projetos" />
<meta property="og:description" content="..." />
<meta property="og:image" content="/og-image.png" />
<meta property="og:type" content="website" />
```

---

## 9. Performance & Acessibilidade

- **Meta:** Lighthouse score ≥ 90 em todas as métricas
- Atributos `alt` descritivos em todas as imagens
- Contraste mínimo **WCAG AA** (ratio ≥ 4.5:1 para texto normal)
- Navegação por teclado funcional (foco visível, skip-to-content link)
- Fonte carregada com `font-display: swap`

---

## 10. Deploy

| Plataforma | Configuração |
|---|---|
| **Vercel** (recomendado) | Zero-config para Vite; CI/CD automático via push no `main` |
| GitHub Pages (alternativa) | `vite.config.ts` com `base: '/AriadinaCV/'` |

---

## 11. Fora do Escopo (MVP)

- Blog ou conteúdo dinâmico
- CMS ou área administrativa
- Autenticação
- Backend / banco de dados
- Formulário de contato com envio real (usar `mailto:` no MVP)
