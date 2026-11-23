# evals antes do deploy: como testar uma IA sem perguntar se ela “parece boa”

Uma aplicação com IA pode funcionar lindamente em três demonstrações e tropeçar justamente no pedido que chega de uma cliente. Isso acontece porque conversar informalmente com o modelo não é o mesmo que avaliá-lo. Se eu mudo o prompt na terça, o provedor na quarta e uma ferramenta na quinta, preciso de uma forma repetível de descobrir se o produto melhorou ou apenas ficou diferente.

O NIST trata teste, avaliação, verificação e validação — o conjunto chamado de TEVV — como maneiras de reunir evidências de que um sistema atende a objetivos e reduz impactos negativos. O próprio órgão ressalta que as métricas precisam ser adaptadas ao contexto de uso, porque aplicações de IA têm finalidades muito diferentes ([NIST TEVV-Athlon](https://www.nist.gov/artificial-intelligence/ai-research/tevv-athlon-framework-evaluating-ai-systems)). Traduzindo para o projeto pequeno: antes de medir, eu preciso dizer o que “bom” significa aqui.

## comece com casos reais, não com frases bonitas

Minha primeira versão de um conjunto de avaliação teria entre 20 e 50 casos representativos. Entram pedidos comuns, entradas incompletas, ambiguidades, português informal, textos longos e situações em que a resposta correta é admitir que faltam dados. Cada caso guarda a entrada, o comportamento esperado e o risco de errar.

Não preciso exigir uma frase idêntica. Posso verificar critérios: citou a fonte pedida? manteve valores numéricos? recusou uma ação sem autorização? devolveu JSON válido? Em tarefas objetivas, uso testes determinísticos. Em textos abertos, uma rubrica humana simples costuma ser mais honesta: correto, útil, claro e seguro, cada item com exemplos do que aprova ou reprova.

O NIST afirma que produtos de IA confiáveis dependem de medições e avaliações dos modelos **e de seu uso**, não apenas de um placar abstrato ([NIST: AI measurement and evaluation](https://www.nist.gov/ai-measurement-and-evaluation)). Por isso, um benchmark famoso não substitui os casos da minha aplicação. Um modelo excelente em perguntas gerais pode falhar no vocabulário, nas restrições ou no formato que meu fluxo exige.

## transforme bug em teste

Toda falha encontrada em produção merece virar um caso de regressão, depois de remover dados pessoais. Se o agente enviou um e-mail sem confirmação, o novo teste deve exigir confirmação explícita. Se inventou um link, o teste deve checar se os links pertencem às fontes permitidas. Assim, a coleção cresce com a realidade do produto.

Eu também separaria o conjunto em duas partes. A primeira fica visível durante o desenvolvimento. A segunda fica reservada para a avaliação final, evitando que eu ajuste o prompt até decorar as respostas conhecidas. O programa NIST GenAI usa avaliações para estudar capacidades e limitações, além de cenários adversariais e efeitos de diferentes prompts ([NIST GenAI](https://ai-challenges.nist.gov/genai)). A lição útil não é copiar um laboratório inteiro, mas testar também aquilo que tenta quebrar o fluxo.

## uma rotina enxuta

Antes de publicar uma mudança, eu rodaria o mesmo conjunto na versão atual e na candidata. Compararia taxa de aprovação por critério, custo, latência e falhas graves. Depois, revisaria manualmente uma amostra. Se a média melhora mas uma proteção importante piora, o deploy não passa. Segurança não deveria desaparecer dentro de uma nota geral simpática.

Evals não prometem que a IA nunca errará. Elas tornam a mudança observável, registram o que foi considerado aceitável e dão uma conversa mais adulta para a equipe: em vez de “achei inteligente”, temos casos, critérios e evidências.

## fontes

- [NIST: TEVV-Athlon Framework for Evaluating AI Systems](https://www.nist.gov/artificial-intelligence/ai-research/tevv-athlon-framework-evaluating-ai-systems)
- [NIST: AI measurement and evaluation](https://www.nist.gov/ai-measurement-and-evaluation)
- [NIST GenAI: Evaluating Generative AI Technologies](https://ai-challenges.nist.gov/genai)

---

*Se uma mudança não pode ser comparada, ela ainda está no território da torcida.*
