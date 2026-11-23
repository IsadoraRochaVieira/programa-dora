# SEO técnico sem simpatia com robô: contexto, sitemap e canonical

SEO técnico costuma chegar fantasiado de ritual: instalar um plugin, repetir uma palavra e esperar que o algoritmo se emocione. Prefiro uma pergunta menos mística: o mecanismo de busca consegue descobrir a página, entender sobre o que ela fala e reconhecer qual URL é a versão principal?

Três peças ajudam nessa conversa — dados estruturados, sitemap e canonical — mas nenhuma compra posição no resultado. Elas descrevem melhor o site. Conteúdo útil, acesso técnico e consistência continuam fazendo o trabalho pesado.

## dados estruturados explicam entidades

Dados estruturados usam um formato padronizado para classificar elementos da página. O Google explica que essa marcação oferece pistas explícitas sobre o conteúdo e pode habilitar resultados enriquecidos quando o tipo é compatível ([Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)).

Num artigo, por exemplo, JSON-LD pode identificar título, autora, data e imagem. Num produto, pode representar oferta e disponibilidade — desde que esses dados também apareçam para a pessoa na página. Marcar uma avaliação inexistente ou esconder informação só no código não transforma ficção em SEO.

Eu validaria a marcação com as ferramentas indicadas na documentação do tipo escolhido e manteria os dados sincronizados com o conteúdo visível. O objetivo é remover ambiguidade, não criar uma versão paralela do site especialmente otimista.

## sitemap é mapa, não ingresso VIP

O sitemap lista as URLs que eu prefiro apresentar à busca. A documentação do Google diz claramente que enviar um sitemap é uma pista: não garante que ele será baixado, usado no rastreamento ou indexado ([Google: criar e enviar sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)).

Para um site pequeno, gerar o arquivo no processo de publicação evita esquecer páginas. Eu usaria URLs absolutas, incluiria apenas páginas canônicas e atualizaria a data somente quando o conteúdo realmente mudasse. Também colocaria a referência ao sitemap no `robots.txt` e acompanharia erros pelo Search Console.

Um sitemap cheio de páginas quebradas, redirecionadas ou bloqueadas comunica bagunça. Antes de festejar a quantidade de URLs, vale verificar se cada uma responde corretamente e oferece conteúdo que merece existir.

## canonical organiza duplicatas

Parâmetros de campanha, filtros e versões de uma página podem produzir URLs diferentes para conteúdo muito parecido. O `rel="canonical"` sugere qual delas deve ser tratada como principal. O Google recomenda escolher um método coerente; misturar cabeçalho HTTP e elemento HTML com destinos diferentes aumenta a chance de erro ([Google: consolidar URLs duplicadas](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)).

A página canônica deve ser acessível e representar de fato o conteúdo. Quando uma URL antiga não deve mais existir, um redirecionamento permanente costuma expressar melhor essa mudança do que deixá-la carregando e apontando para outra versão.

## meu checklist antes de publicar

- uma URL clara e estável por conteúdo;
- título e descrição coerentes com a página;
- canonical absoluto apontando para a versão correta;
- sitemap contendo apenas URLs válidas e preferidas;
- dados estruturados compatíveis com o conteúdo visível;
- links internos que permitam descobrir a página sem depender do sitemap;
- teste em celular, porque a página é para gente antes de ser para crawler.

SEO técnico bom é infraestrutura silenciosa. Ele não convence o buscador a gostar de uma página vazia; evita que uma página útil chegue sem endereço, sem contexto e com três cópias brigando pelo mesmo nome.

## fontes

- [Google Search Central: introdução aos dados estruturados](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [Google Search Central: criar e enviar um sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google Search Central: especificar uma URL canonical](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)

---

*Robô nenhum precisa de carinho; precisa de sinais técnicos coerentes e uma página que valha a visita.*
