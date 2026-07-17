# ProgramaDora — instruções para agentes

Blog estático em português brasileiro sobre IA, marketing online, automações e ética. Autora: Isadora. Sem build: HTML/CSS/JS puro, publicado no GitHub Pages direto da branch `main`.

## Estrutura

- `index.html` — home; carrega o feed de `posts/index.json` via `js/blog.js`
- `post.html?p=<slug>` — renderiza `posts/<slug>.md` com marked.js
- `posts/index.json` — índice de todos os posts (a home e o post.html dependem dele)
- `posts/<slug>.md` — um arquivo markdown por post
- `feed.xml` — RSS; deve ser atualizado a cada post novo
- `privacidade.html` — política de privacidade (LGPD); não alterar em rotinas de postagem
- `css/style.css`, `js/main.js`, `js/blog.js` — visual e interações; não alterar em rotinas de postagem

## Protocolo de postagem automática (rotinas das 06h e das 20h)

Cada rotina publica **1 post novo** seguindo estas etapas, nesta ordem:

### 1. Pesquisa
- Busque na web novidades das últimas 24h sobre os temas do blog: inteligência artificial, agentes, automações, marketing digital com IA, ética/regulação de IA, empreendedorismo/negócios com tecnologia e saúde mental de quem trabalha com tecnologia.
- Priorize fontes primárias (anúncios oficiais, papers, docs, reguladores, órgãos de saúde) sobre agregadores.
- Escolha UM tema com substância. Se nada relevante aconteceu, escreva um post evergreen (conceito, tutorial, análise) — pode puxar uma ideia do banco de pautas em `PAUTAS.md`. Nunca invente notícia.
- Em temas sensíveis (ex.: saúde mental), não dê conselho clínico e cite fontes sólidas.

### 2. Escrita
- Escreva em **português brasileiro**, tom leve e direto, na voz do blog (primeira pessoa, bem-humorado, sem hype).
- Formato markdown, começando com `# título em minúsculas`.
- **Toda afirmação factual precisa de link para a fonte.** Termine com uma seção `## fontes` listando os links.
- 400–900 palavras. Termine com uma linha `---` e uma nota em itálico.

### 3. Dupla verificação (obrigatória — é a promessa do blog)
Rode uma segunda passada INDEPENDENTE de verificação (subagente ou revisão separada) que:
- confere cada afirmação factual contra a fonte linkada (abrir a fonte, não confiar de memória);
- remove ou corrige qualquer afirmação sem fonte verificável;
- confere datas, números, nomes de produtos e de empresas;
- só aprova se TODAS as afirmações passarem. Se o post não passar nem após correção, NÃO publique.
- Somente posts aprovados recebem `"verificado": true` no índice.

### 4. Publicação
1. Salve o post em `posts/YYYY-MM-DD-slug-curto.md` (slug: minúsculas, hífens, sem acento).
2. Adicione a entrada no TOPO de `posts/index.json`:
   ```json
   {
     "slug": "YYYY-MM-DD-slug-curto",
     "title": "título em minúsculas",
     "date": "YYYY-MM-DD",
     "hora": "06h" (ou "20h"),
     "emoji": "um emoji que combine",
     "summary": "resumo de 1-2 frases",
     "tags": ["2 a 4 tags minúsculas"],
     "verificado": true
   }
   ```
   Valide que o JSON continua válido antes de commitar.
3. Adicione um `<item>` no topo de `feed.xml` (título, link `https://SEU-USUARIO.github.io/programadora/post.html?p=slug`, pubDate RFC-822, description = summary).
4. Commit e push na `main` com mensagem `post: <slug> (edição das 06h|20h)`.

## Regras invioláveis
- Nunca publique sem a dupla verificação completa.
- Nunca invente notícias, citações, números ou links.
- Nunca edite ou apague posts antigos numa rotina de postagem.
- Nunca altere `css/`, `js/`, `index.html`, `post.html` ou `privacidade.html` numa rotina de postagem.
- Em caso de erro irrecuperável, não faça push parcial — deixe o repositório como estava.
