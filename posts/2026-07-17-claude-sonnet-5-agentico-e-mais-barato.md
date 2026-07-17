# claude sonnet 5: o modelo "do meio" que encostou no topo

Na corrida dos modelos, a gente costuma prestar atenção nos carros-chefe. Mas quem constrói coisa de verdade sabe que o herói silencioso é quase sempre o modelo do meio — bom o bastante para o trabalho pesado, barato o bastante para rodar o dia inteiro. O **Claude Sonnet 5**, da Anthropic, é uma jogada exatamente nessa casa.

## o anúncio, em números

O Claude Sonnet 5 foi lançado em **30 de junho de 2026** ([Anthropic](https://www.anthropic.com/news/claude-sonnet-5)). A própria Anthropic o descreve como **o Sonnet mais "agêntico" até agora**: um modelo feito para "fazer planos, usar ferramentas como navegadores e terminais e rodar de forma autônoma" em níveis de desempenho que antes exigiam modelos maiores ([Anthropic](https://www.anthropic.com/news/claude-sonnet-5)).

A frase que mais me chamou atenção na página oficial é comedida, do jeito que eu gosto: o Sonnet 5 "oferece uma gama maior de opções de custo-desempenho que o Sonnet 4.6 e, **em alguns casos, alcança os níveis de capacidade do Opus 4.8**" ([Anthropic](https://www.anthropic.com/news/claude-sonnet-5)). Repare no "em alguns casos" — é honestidade de engenharia, não promessa de outdoor.

## o preço (e a letra miúda que importa)

Aqui vale ler com atenção, porque é o tipo de detalhe que some no resumo dos agregadores. O preço-padrão do Sonnet 5 na plataforma é de **US$ 3 por milhão de tokens de entrada e US$ 15 por milhão de tokens de saída**. Mas há um **preço promocional de lançamento de US$ 2 (entrada) e US$ 10 (saída) por milhão de tokens, válido até 31 de agosto de 2026** ([Anthropic](https://www.anthropic.com/news/claude-sonnet-5)).

Traduzindo o que isso significa na prática: até o fim de agosto, dá para testar o modelo pagando menos; depois disso, a conta sobe para o valor cheio. Se você vai colocar algo em produção baseado nesse custo, é o número de setembro que precisa entrar na planilha, não o de julho. (Detalhe pequeno, decisão grande — foi por não ler essa linha que muita gente já levou susto na fatura.)

## onde ele já está

O Sonnet 5 chegou como **modelo padrão dos planos Free e Pro**, e também disponível para usuários Max, Team e Enterprise, além do Claude Code e da plataforma de API ([Anthropic](https://www.anthropic.com/news/claude-sonnet-5)). Para quem programa, o identificador na API é direto ao ponto: **`claude-sonnet-5`** ([Anthropic](https://www.anthropic.com/news/claude-sonnet-5)).

Ou seja: não é um modelo escondido atrás de um plano caro. É o que a maioria das pessoas encontra ao abrir o Claude sem configurar nada — o que dá a ele um peso desproporcional no dia a dia real de uso.

## segurança: o detalhe que costuma ficar de fora

Modelo mais autônomo levanta, com razão, a pergunta "e a segurança disso?". A Anthropic afirma que o Sonnet 5 apresenta **taxa geral menor de comportamentos indesejados que o Sonnet 4.6** e é, segundo a empresa, mais seguro em contextos agênticos ([Anthropic](https://www.anthropic.com/news/claude-sonnet-5)). Como sempre por aqui: é a fabricante avaliando o próprio produto, então a leitura é otimista com reservas — o que conta mesmo é o comportamento no uso real e as avaliações independentes que vierem.

## o recado que fica

O Sonnet 5 é um bom retrato de para onde a coisa está indo: a disputa deixou de ser só "quem tem o modelo mais inteligente" e virou "quem entrega capacidade suficiente pelo menor custo e atrito". Um modelo intermediário que encosta no topo de linha, entra como padrão para todo mundo e ainda vem com preço de lançamento é uma aposta clara nessa direção.

Para quem constrói — e aqui eu falo como dev — é uma boa notícia: mais capacidade agêntica acessível significa mais coisa possível sem estourar orçamento. Só não esqueça de anotar a data: **1º de setembro**, quando o preço de brincar vira o preço de valer.

## fontes

- [Anthropic — Introducing Claude Sonnet 5](https://www.anthropic.com/news/claude-sonnet-5)
- [Anthropic — página do modelo Claude Sonnet](https://www.anthropic.com/claude/sonnet)

---

*Edição das 06h. Preços e datas conferidos direto na página oficial da Anthropic, não em resumos de terceiros — que, nesse caso, chegaram a divergir do número real.*
