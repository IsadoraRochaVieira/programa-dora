# agente de IA com cinto de segurança: menos permissão, mais controle

Um chatbot que responde perguntas pode errar uma frase. Um agente que lê e-mail, acessa arquivos e chama APIs pode errar uma ação. A diferença parece pequena na apresentação de slides, mas é enorme quando o botão disponível significa “enviar”, “publicar”, “transferir” ou “apagar”. Quanto mais ferramentas eu conecto, menos sentido faz confiar apenas em um prompt educado pedindo cuidado.

A OWASP define prompt injection como a manipulação do comportamento de uma aplicação com modelo de linguagem por meio de entradas maliciosas. Ela também alerta que a injeção pode ser indireta: a instrução hostil pode estar numa página, em um documento ou em outro conteúdo que o sistema lê ([OWASP LLM01:2025](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)). Logo, “o usuário não digitou nada perigoso” não é uma garantia quando o agente navega pela internet.

## trate conteúdo externo como dado, não como chefe

Se eu peço ao agente para resumir um PDF, o texto do PDF não deveria ganhar autoridade para alterar a tarefa. Essa separação precisa aparecer na arquitetura: conteúdo externo entra como dado não confiável; regras do produto ficam fora dele; e chamadas de ferramenta passam por validação própria.

A folha de prevenção da OWASP recomenda separar instruções e dados, validar entradas e saídas, monitorar comportamento e aplicar menor privilégio ([OWASP Prompt Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html)). Nenhuma dessas camadas resolve tudo sozinha. Juntas, porém, diminuem a chance de um parágrafo escondido virar uma ação real.

## dê a menor chave possível

Menor privilégio é o princípio de limitar usuários ou processos ao mínimo de acesso necessário para cumprir a tarefa ([NIST CSRC](https://csrc.nist.gov/glossary/term/least_privilege)). Para um agente, isso pode significar:

- ler somente uma pasta, não o drive inteiro;
- criar rascunhos, mas não publicar;
- consultar pedidos, mas não emitir reembolso;
- usar credenciais diferentes por ferramenta e ambiente;
- ter limites de valor, frequência e destinatário.

Também vale separar “propor” de “executar”. O modelo prepara a ação em formato estruturado; uma camada comum de software verifica campos, permissões e política; ações sensíveis esperam confirmação humana mostrando claramente o que acontecerá. O botão deve dizer “enviar e-mail para Ana”, não o nebuloso “continuar”.

## registre o suficiente para investigar

Eu guardaria a intenção original, a ferramenta solicitada, os argumentos validados, a decisão de autorização e o resultado. Segredos e dados pessoais precisam ser removidos ou minimizados no log. O objetivo não é vigiar tudo: é conseguir responder quem pediu, o que o sistema tentou e qual barreira permitiu ou bloqueou.

Um botão de emergência também não é drama. Se houver comportamento anormal, preciso revogar a credencial, desligar uma ferramenta ou colocar o agente em modo somente leitura sem redesenhar o produto durante o incidente. Testes devem incluir páginas com instruções hostis, formatos estranhos e tentativas de fazer o sistema ultrapassar o pedido original.

Um agente seguro não é um modelo “obediente”. É um sistema em que a desobediência do modelo encontra portas trancadas, permissões estreitas, validação e uma pessoa capaz de parar a ação. O cinto não impede toda batida; ele evita que confiança vire arquitetura.

## fontes

- [OWASP: LLM01:2025 Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)
- [OWASP: LLM Prompt Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html)
- [NIST CSRC: definição de menor privilégio](https://csrc.nist.gov/glossary/term/least_privilege)

---

*Se o agente só precisa abrir a janela, não entregue a chave do prédio inteiro.*
