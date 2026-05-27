# Ariadina Astori Porto — Design System

> **Consultoria em Gestão de Projetos · BID**
> Marca pessoal de uma consultora sênior (16+ anos) em PMO, governança pública, monitoramento e planejamento estratégico. Atuação em programas do **Banco Interamericano de Desenvolvimento (BID)**, Governo do Estado do Espírito Santo, TCE-ES e iniciativa privada (Samarco Mineração).

---

## Fonte da identidade

Este design system foi reconstruído a partir do **site oficial** em produção: <https://ariadina-astori.com.br/>

A versão inicial deste projeto (com paleta brass/serifa institucional sob o codinome "Atlas") foi **descartada** após acesso ao site real. A identidade extraída é:

- **Paleta fria toda em azul** — navy profundo + ciano (glow do globo) + branco
- **Sans-serif moderna** em todo lugar (Plus Jakarta Sans)
- **Motivo do globo/rede** como metáfora visual central (consultoria internacional BID)
- **Estética tech-executiva**, não institucional-clássica
- **Pílulas/chips azuis** para habilidades e tags
- **Cards limpos** com bordas suaves

---

## Índice

| Arquivo / pasta | Conteúdo |
|---|---|
| `README.md` | Este arquivo. |
| `SKILL.md` | Front-matter compatível com Agent Skills (Claude Code). |
| `colors_and_type.css` | Tokens CSS (cores, tipo, espaçamento, raio, sombras, gradientes). |
| `assets/` | Logos (SVG), monograma do globo, marca d'água. |
| `assets/exports/` | PNG exports (favicon, perfil, hero) prontos para uso. |
| `preview/` | Cards do Design System (Type, Colors, Spacing, Components, Brand). |
| `ui_kits/portfolio/` | Recriação do site/portfólio em alta fidelidade. |
| `ui_kits/dashboard/` | Console PMO de monitoramento de programa. |
| `slides/` | Templates de apresentação institucional 16:9. |

---

## CONTENT FUNDAMENTALS

### Voz e tom
- **Voz:** sóbria, técnica, confiante. Consultora sênior em reunião de comitê.
- **Tom modulado:**
  - *Apresentação executiva:* impessoal, conclusivo, com números.
  - *Site/portfólio:* primeira pessoa moderada ("atuei", "coordenei").
  - *Relatório:* impessoal técnico ("foram entregues", "observa-se que").

### Pessoa gramatical
- Site/perfil: **1ª pessoa** controlada, sem "eu" excessivo.
- Apresentações: **3ª pessoa / impessoal**.
- Nunca "você". Use chamadas institucionais.

### Caixa
- **Títulos de seção:** Title case — *"Sobre"*, *"Experiência"*, *"Formação"*, *"Habilidades"*, *"Contato"*.
- **Botões/CTAs:** sentence case curto — *"Falar pelo WhatsApp"*, *"Baixar currículo"*.
- **Eyebrows/kickers:** ALL CAPS, tracking 0.14em.

### Vocabulário
| Use | Evite |
|---|---|
| entrega, resultado, governança, monitoramento, programa, indicador, escopo, marco, PMO | "solução", "jornada", "stakeholders", "engajamento", "transformacional" |
| coordenei, conduzi, implantei, estruturei | "ajudei a", "participei de" |
| BID, Moderniza-ES, TCE-ES, Estado Presente | siglas sem expansão na primeira menção |

### Números
- Quantificar sempre: *"16+ anos"*, *"3 programas estaduais"*, *"R$ 600 mi monitorados"*.
- Moeda BR: `R$ 1,2 mi` / `R$ 612 mi` / `R$ 1,2 bi`.
- Percentuais com sinal: `+14 pp`, `−18%`.

### Emoji e exclamações
- **Sem emoji** em comunicação institucional.
- **Sem ponto de exclamação** (apenas em citações reproduzidas).
- Marcadores discretos OK: `—`, `·`, `→`.

### Exemplos

**Hero do site (compactado):**
> Ariadina Astori Porto
> Consultora de Gestão de Projetos · BID
> [Falar pelo WhatsApp] [LinkedIn]

**Bullet de experiência:**
> *Programa Estado Presente em Defesa da Vida* — coordenação do PMO; 12 secretarias envolvidas; redução de 22% no tempo de ciclo.

**Eyebrow + título:**
> CONSULTORIA EXTERNA · BID · 2023–HOJE
> **Moderniza-ES: governança de um programa de R$ 600 mi.**

---

## VISUAL FOUNDATIONS

### Paleta — sistema de cor

Três camadas funcionais:

1. **Primary — Deep Navy `#0D2747`** — backgrounds de hero, contato, footer; texto institucional sobre fundo claro.
2. **Accent — Cyan/Teal `#3FB8D6`** — pontos do globo, eyebrows, focus-ring, accent decorativo. Usado com escassez.
3. **Action — Bright Blue `#2563EB`** — CTAs, links, pílulas de habilidade ativas. Cor de "ação", não decoração.

**Secundárias:**
- **Teal `#14B8A6`** — botão WhatsApp / sinalização positiva ativa.
- **Slate** — escala fria de neutros (`#020617` → `#F8FAFC`).

**Sem brass/dourado/marrom** — fora do sistema.

### Tipografia

**Plus Jakarta Sans** (Google Fonts) — sans-serif moderna, executiva, com pesos 300–800. Usada para tudo: display, UI, body. Versátil, profissional, não engessada.

**JetBrains Mono** — para dados tabulares, KPIs numéricos, identificadores.

**Sem serifa.** A identidade é deliberadamente sans-serif throughout.

### Escala tipográfica
11 passos, base 16, razão ~1.22: `11 · 12 · 14 · 16 · 18 · 22 · 27 · 33 · 40 · 49 · 60 · 73`.

Pesos: **400** body, **500** UI/eyebrows, **600** subheaders, **700** display/h1/h2.

### Espaçamento
Múltiplos de 4. Densidade alvo: **executiva confortável**. Padding default de cartão: 32px. Gutter de grid: 32px (desktop), 16px (mobile).

### Raio
Mais generoso que a v1 — alinhado com o estilo moderno do site. Cards e botões: **10px**. Inputs: 6px. Pílulas: 999px. Hero/destaques: 16–24px.

### Sombras
Sistema de elevação em 3 níveis, frias (slate-based). Glow ciano opcional para hover de cards destacados.

### Bordas
`1px solid var(--slate-200)` (border-soft) para divisões padrão. `border-hairline` (rgba alpha 6%) para divisões muito sutis.

### Backgrounds
- **Padrão:** branco (`#FFFFFF`).
- **Alternativo:** slate-050 (`#F8FAFC`) para alternar seções.
- **Hero/CTA/Contato:** gradiente navy (135deg, `#081A33 → #0D2747 → #143560`) com glow ciano radial.

### Imagens — diretriz
- **Globo/rede** como motivo central. Pode ser ilustração SVG ou foto editada com overlay azul.
- Retratos editoriais em **monocromático azulado** ou color grade fria.
- **Sem fotos genéricas de stock**. Prefira: documentos, mapas, salas de reunião, locais de obra com filtro frio.

### Animação
- **Mínima e respeitosa.** Easing `cubic-bezier(0.2, 0.7, 0.2, 1)`, sem bounce.
- Fade-up de 12px em entradas; 260–400ms.
- Hover de cards: elevação `shadow-1 → shadow-2`; em destaque, glow ciano sutil.

### Estados
- **Hover (primário Navy):** clareia 6% (`navy-700`).
- **Hover (action Blue):** clareia para `blue-600`.
- **Hover (link):** muda para `cyan-600`.
- **Press:** translateY(1px) + sombra reduzida.
- **Focus:** anel `2px solid cyan-500` com offset 2px.

### Transparência e blur
- **Blur** em sticky-header (backdrop-filter 12px + 85% white) e overlays.
- **Transparências** sempre em **navy** (não preto): `rgba(13, 39, 71, 0.6–0.8)`.

### Layout
- Grid de 12 colunas, max-width 1280px desktop, 1440px em dashboard.
- Margens: 24px mobile, 48px tablet, 96px desktop.
- Sticky header de 72px, transparente no topo, navy+blur depois de scroll.

### Cartões
- Fundo branco sobre slate-050.
- Borda `1px var(--slate-200)`.
- Raio `10px`.
- Sombra `shadow-1` em repouso → `shadow-2` em hover.
- Padding 32px desktop, 24px mobile.

---

## ICONOGRAPHY

**Lucide Icons** (lucide.dev) — linha fina (1.5px), terminais arredondados. Adequado à estética moderna executiva.

- **Stroke width:** 1.5
- **Tamanho default:** 20px UI, 18px inline, 24px em cards, 36px em features
- **Cor:** `currentColor` (herda do texto)
- **CDN:** `https://unpkg.com/lucide@latest`

### Logomarca / monograma
- `assets/logo-mark.svg` — globo/rede com 3 pontos ciano (favicon, sidebar, header pequeno)
- `assets/logo-mark-inverse.svg` — para fundo escuro
- `assets/logo-aap.svg` — lockup horizontal completo: globo + nome + descritor
- `assets/logo-aap-inverse.svg` — horizontal sobre fundo escuro
- `assets/logo-stacked.svg` — empilhado (globo em cima, nome+descritor abaixo)
- `assets/logo-wordmark.svg` — só nome, sem símbolo (para uso compacto no header — como o site faz)
- `assets/logo-wordmark-inverse.svg` — wordmark inverso

### Usage do globo
O globo simboliza **alcance internacional** (BID, organismos multilaterais) e **conexão de programas** (PMO conectando secretarias, unidades, contrapartes). Os 3 pontos ciano representam **nós de uma rede**. Sempre manter a proporção e a cor.

---

(Veja `SKILL.md` para o resumo cross-compatível com Agent Skills.)
