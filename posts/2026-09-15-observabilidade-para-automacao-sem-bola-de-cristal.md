# observabilidade para automação sem bola de cristal

Automação silenciosa é maravilhosa até ficar silenciosamente errada. O formulário recebeu o cadastro, a fila engoliu a tarefa, a IA escreveu alguma coisa e o CRM continuou vazio. Sem rastros, a investigação vira arqueologia feita com palpites e capturas de tela.

Observabilidade é a capacidade de entender o estado interno de um sistema pelas evidências que ele produz. O OpenTelemetry se apresenta como um framework aberto e independente de fornecedor para instrumentar, gerar, coletar e exportar telemetria, incluindo traces, métricas e logs ([OpenTelemetry](https://opentelemetry.io/docs/)). Ele não é o painel final; é uma linguagem e uma infraestrutura para produzir sinais que podem seguir para diferentes ferramentas.

## três sinais, três perguntas

Logs respondem “o que aconteceu aqui?”. Em vez de `deu erro`, registre etapa, código, integração e identificador de correlação. Não despeje prompts, tokens ou dados pessoais inteiros por conveniência. Um log útil explica; um log indiscreto cria outro incidente.

Métricas respondem “quanto e com que frequência?”. Conte execuções, sucessos, falhas, duração, filas acumuladas e custo quando houver. Separe por versão do fluxo e tipo de tarefa, sem usar rótulos com valores únicos demais, como e-mail de cada cliente.

Traces respondem “por onde esta execução passou?”. Uma requisição pode cruzar API, fila, modelo e banco. O conceito de trace representa o caminho de uma solicitação por uma aplicação; cada operação forma uma unidade relacionada dentro desse percurso ([OpenTelemetry](https://opentelemetry.io/docs/concepts/signals/traces/)). Um ID compartilhado permite seguir a mesma história sem adivinhar qual linha pertence a qual execução.

## comece pelo que dói

Não tente observar cada função no primeiro dia. Escolha um fluxo importante e marque início, término e dependências externas. Adicione contadores de sucesso e falha, duração por etapa e um identificador que viaje de ponta a ponta. Em seguida, crie um painel com poucas perguntas: está funcionando, ficou lento, acumulou trabalho ou começou a custar mais?

Alertas devem apontar para ação. “Falharam mais de 5% das execuções em quinze minutos” ajuda mais do que uma mensagem para cada erro isolado. Defina quem recebe, qual contexto acompanha o aviso e onde está o procedimento de resposta. Caso contrário, a equipe aprende rapidamente a ignorar o sino.

Para automações com IA, eu registraria versão do prompt, modelo, duração, consumo, ferramentas chamadas e resultado da validação — sem guardar conteúdo sensível por padrão. Isso permite descobrir que uma mudança elevou o custo ou que uma ferramenta passou a falhar, sem transformar telemetria em arquivo paralelo de dados pessoais.

Por fim, teste a investigação. Desligue uma dependência num ambiente seguro e veja se alguém consegue localizar o problema usando apenas os sinais. Observabilidade não é quantidade de gráficos. É diminuir o tempo entre “tem algo estranho” e “sei onde olhar e o que fazer”.

## fontes

- [OpenTelemetry: documentação](https://opentelemetry.io/docs/)
- [OpenTelemetry: traces](https://opentelemetry.io/docs/concepts/signals/traces/)
- [OpenTelemetry: métricas](https://opentelemetry.io/docs/concepts/signals/metrics/)
- [OpenTelemetry: logs](https://opentelemetry.io/docs/concepts/signals/logs/)

---

*Automação confiável deixa pegadas suficientes para ser entendida, não dados suficientes para assustar.*
