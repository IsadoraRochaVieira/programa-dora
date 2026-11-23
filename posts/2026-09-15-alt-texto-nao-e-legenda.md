# alt text não é legenda: é uma decisão de produto

Quando alguém pede “coloca um alt nessa imagem”, parece uma tarefa de cinco segundos. Aí nasce o clássico `alt="imagem"`, que cumpre tabela e não ajuda ninguém. Texto alternativo não é um adesivo técnico: é a tradução da função que aquela imagem exerce naquele contexto.

A árvore de decisão do W3C separa imagens decorativas, informativas, funcionais e complexas. Ela recomenda `alt=""` quando a imagem é puramente decorativa ou repete um texto que já está ao lado; para uma imagem informativa simples, pede uma descrição breve que transmita o significado; para um gráfico complexo, orienta disponibilizar a informação em outro ponto da página ([W3C WAI](https://www.w3.org/WAI/tutorials/images/decision-tree/)). O detalhe importante é “naquele contexto”. A mesma foto pode precisar de descrições diferentes em duas páginas.

## comece pela pergunta certa

Antes de escrever, eu perguntaria: o que a pessoa perde se não enxergar esta imagem?

Se a resposta for “nada”, provavelmente ela é decorativa. Uma curva colorida atrás do título não precisa ser narrada como “linha roxa abstrata com brilho”. Use texto alternativo vazio para que tecnologias assistivas possam ignorá-la, como orienta o tutorial de imagens decorativas do W3C ([W3C WAI](https://www.w3.org/WAI/tutorials/images/decorative/)).

Se a imagem entrega uma informação, descreva a informação, não cada pixel. Em um card de projeto, “tela do painel Radar Trader mostrando gráfico de risco e lista de ativos” conta mais do que “imagem de computador azul”. Se for um botão composto apenas por um ícone, o texto precisa comunicar a ação ou o destino. A árvore do W3C recomenda descrever a função quando a imagem é essencial para entender um link ou botão ([W3C WAI](https://www.w3.org/WAI/tutorials/images/decision-tree/)).

Já um gráfico pede mais trabalho. Espremer cinco séries, doze meses e uma conclusão dentro do atributo `alt` produz uma sopa. Dê ao gráfico um resumo curto e coloque dados, tendência e conclusão no texto próximo ou em uma tabela. Assim, a informação deixa de depender da visão — e costuma ficar melhor até para quem enxerga, mas está lendo no celular.

## uma revisão que cabe no projeto

Eu faria uma planilha ou lista com quatro colunas: arquivo, contexto, função e alternativa. Depois revisaria as imagens mais importantes primeiro: navegação, chamadas de ação, produtos e resultados. Também testaria a página sem carregar imagens. Ainda consigo entender o fluxo? Os links continuam claros? Perdi alguma evidência?

Geradores de IA podem sugerir descrições, mas não conhecem automaticamente a intenção editorial. Uma máquina talvez identifique “mulher diante de notebook”; só a equipe sabe se a foto apresenta a fundadora, demonstra atendimento remoto ou apenas enfeita a seção. A revisão humana precisa decidir o que importa e remover inferências desnecessárias sobre idade, emoção, identidade ou deficiência.

Um bom alt quase nunca impressiona numa reunião. Ele simplesmente deixa de excluir alguém — e esse é um ótimo sinal de que o trabalho foi bem feito.

## fontes

- [W3C WAI: árvore de decisão para texto alternativo](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [W3C WAI: imagens decorativas](https://www.w3.org/WAI/tutorials/images/decorative/)
- [W3C WAI: tutorial de imagens](https://www.w3.org/WAI/tutorials/images/)

---

*Acessibilidade não começa no atributo; começa quando a equipe entende a função do conteúdo.*
