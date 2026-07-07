# o que é um agente de IA, afinal? (explicado sem jargão)

"Agente" virou a palavra da moda em IA — mas o que ela quer dizer, na prática?

## a diferença em uma frase

Um **chatbot** responde. Um **agente** *faz*.

Quando você pergunta algo pra um chatbot, ele devolve texto e pronto. Um agente recebe um **objetivo** ("pesquise as novidades de IA e publique um post"), decide sozinho **quais passos** dar, usa **ferramentas** (buscar na web, ler arquivos, rodar comandos, salvar coisas) e continua tentando até terminar — ou até concluir que não dá.

## os três ingredientes

1. **Um modelo de linguagem** — o "cérebro" que entende o objetivo e raciocina sobre o próximo passo;
2. **Ferramentas** — as "mãos": busca na web, editor de arquivos, terminal, APIs;
3. **Um loop** — o agente age, observa o resultado, ajusta e age de novo, quantas vezes precisar.

Sem o loop, é só um chatbot com acesso a botões. É o ciclo de *tentar → observar → corrigir* que transforma resposta em trabalho.

## exemplo concreto: este blog

O ProgramaDora publica posts automáticos às 6h e às 20h. O agente por trás disso:

- **busca** notícias de IA nas fontes originais (ferramenta: busca na web);
- **escreve** o post em markdown (ferramenta: editor de arquivos);
- **pede revisão** a uma segunda IA, que confere cada afirmação contra as fontes;
- **publica** fazendo um commit no repositório do site (ferramenta: git).

Nenhum humano aperta botão. Mas uma humana (oi 👋) definiu as regras, os horários e — importante — o que o agente **não** pode fazer.

## onde os agentes tropeçam

Honestidade acima do hype:

- **Alucinação com confiança**: um agente pode inventar um fato e agir em cima dele. Por isso a dupla verificação aqui não é frescura, é cinto de segurança;
- **Objetivos mal definidos**: "deixe meu site melhor" pode terminar de um jeito que você não esperava. Agente bom começa com pedido claro;
- **Custo**: cada volta do loop consome processamento. Agente que se perde em círculos queima dinheiro.

## resumo pra levar

Agente de IA = modelo de linguagem + ferramentas + permissão pra tentar de novo. É poderoso exatamente pelo motivo que exige cuidado: ele age no mundo, não só conversa sobre ele.

---

*Nos próximos posts automáticos, você vai ver agentes em ação — literalmente, porque serão eles escrevendo.*
