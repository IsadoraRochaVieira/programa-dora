# uma boa automação sabe quando não publicar

Automação costuma ser vendida como sinônimo de velocidade. Eu prefiro outra definição: um sistema automático é bom quando sabe trabalhar sozinho **e** sabe parar sozinho. É esse segundo verbo — parar — que separa uma rotina útil de uma máquina de publicar bobagem com pontualidade suíça.

Para o ProgramaDora, escolhi uma regra editorial simples: **não publicar também é um resultado válido**. Se uma afirmação não puder ser comprovada, se a revisão discordar da fonte ou se uma etapa essencial falhar, eu prefiro uma edição ausente a um texto presente por teimosia.

## o relógio não é o editor

O GitHub Actions permite definir processos automáticos em arquivos YAML dentro de `.github/workflows`; esses processos podem começar por eventos, por acionamento manual ou por agenda ([GitHub Docs](https://docs.github.com/en/actions/concepts/workflows-and-actions/workflows)). A agenda aceita expressão cron e, na documentação atual, também pode declarar um fuso IANA, como `America/Sao_Paulo` ([GitHub Docs](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows)).

Isso resolve o despertador, não resolve o jornalismo. A mesma documentação informa que execuções agendadas usam a versão mais recente da branch padrão e que, em repositórios públicos sem atividade, podem ser desativadas após 60 dias ([GitHub Docs](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows)). Minha leitura é bem pouco glamourosa: automação continua precisando de manutenção, observação e alguém responsável por ela.

## pesquisar é uma etapa, verificar é outra

Para uma rotina editorial baseada em IA, eu separo duas responsabilidades. Primeiro vem a pesquisa e a escrita. Depois vem uma revisão independente, instruída a desconfiar do rascunho, abrir as fontes e conferir datas, números, nomes e relações de causa e efeito.

Na Responses API, a OpenAI recomenda a ferramenta `web_search` para novas integrações. Quando a pesquisa precisa obrigatoriamente acontecer, a documentação orienta usar `tool_choice: "required"` ou escolher especificamente a ferramenta, porque no modo `auto` o modelo pode decidir não pesquisar ([OpenAI](https://developers.openai.com/api/docs/guides/tools-web-search)). Para mim, isso vira princípio editorial: memória de modelo não substitui fonte aberta.

As etapas também podem devolver dados em formato definido por JSON Schema. Na Responses API, Structured Outputs é configurado em `text.format`, com `type: "json_schema"`, esquema e modo estrito ([OpenAI](https://developers.openai.com/api/docs/guides/structured-outputs)). Isso ajuda a detectar respostas sem campos obrigatórios ou fora da estrutura esperada. Não transforma conteúdo em verdade — apenas torna o contrato entre modelo e rotina mais verificável.

## depois da IA, ainda vem a lista de checagem

Minha lista é deliberadamente sem graça: título no formato certo, texto dentro do tamanho combinado, links HTTPS presentes, fontes reunidas no final, tags sem duplicidade e identificação explícita da edição. URL bem formada não prova que uma página sustenta uma frase; essa decisão pertence à revisão de conteúdo.

Só depois entram atualização do post, índice e RSS. O princípio é transacional: ou o conjunto fica coerente, ou a edição é abandonada. Em seguida vêm permissões mínimas. Em jobs do GitHub Actions, o GitHub cria um `GITHUB_TOKEN` temporário e limitado ao repositório; suas permissões podem ser ajustadas por workflow ou por job para o trabalho necessário ([GitHub Docs — sintaxe de permissões](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#permissions)).

Nada disso é tão chamativo quanto pedir a uma IA que “escreva meu blog sozinha”. Ainda bem. A parte mais interessante está na arquitetura da recusa: o momento em que uma rotina olha para o próprio resultado e responde “hoje, não”.

Quero que o ProgramaDora seja lembrado menos pela quantidade de posts e mais por essa pequena placa invisível na porta: *se não deu para conferir, não entrou*.

## fontes

- [GitHub Docs — workflows](https://docs.github.com/en/actions/concepts/workflows-and-actions/workflows)
- [GitHub Docs — eventos e agendamentos](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows)
- [GitHub Docs — GITHUB_TOKEN](https://docs.github.com/en/actions/concepts/security/github_token)
- [GitHub Docs — sintaxe de permissões](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#permissions)
- [OpenAI — web search](https://developers.openai.com/api/docs/guides/tools-web-search)
- [OpenAI — structured outputs](https://developers.openai.com/api/docs/guides/structured-outputs)

---

*Edição especial de abertura da nova fase do ProgramaDora.*
