# retry sem cobrar duas vezes: a automação que sabe repetir

A conexão caiu exatamente depois do clique em “pagar”. O cliente não recebeu resposta. A aplicação tenta de novo. Agora temos duas cobranças e uma equipe explicando que foi “uma condição de rede”. Para o computador, repetir parece cuidado; sem desenho, pode ser duplicação com crachá de resiliência.

Um retry é apropriado quando uma falha pode ser temporária, mas não deve acontecer imediatamente e para sempre. O status HTTP 429 indica excesso de requisições num período e a resposta pode trazer `Retry-After`, informando quanto esperar antes de tentar novamente ([RFC 6585](https://www.rfc-editor.org/rfc/rfc6585.html)). Ignorar esse sinal e disparar mais chamadas costuma piorar exatamente a sobrecarga que provocou o erro.

## espere, limite e espalhe

Use um número máximo de tentativas. Aumente o intervalo entre elas, normalmente com backoff exponencial. Acrescente uma pequena variação aleatória, o jitter, para impedir que centenas de clientes voltem ao mesmo milissegundo. O guia Well-Architected da AWS explica que novas tentativas também consomem recursos do serviço e, por isso, recomenda limites, backoff e jitter ([AWS Well-Architected](https://docs.aws.amazon.com/wellarchitected/2023-04-10/framework/rel_mitigate_interaction_failure_limit_retries.html)).

Também escolha quais erros merecem nova tentativa. Falha temporária de rede, 429 ou alguns erros de servidor podem ser candidatos. Um pedido inválido não ficará válido porque foi enviado cinco vezes. Respeite a documentação da API e registre a razão do retry, o número da tentativa e o desfecho.

## a mesma intenção precisa de uma identidade

Em operações com efeito — criar pedido, cobrar cartão, enviar uma solicitação — associe uma chave única à intenção. Ao repetir a chamada, envie a mesma chave. O servidor pode reconhecer que não é uma compra nova, mas uma repetição da mesma compra.

A documentação da Stripe, por exemplo, orienta usar uma chave de idempotência ao criar ou atualizar objetos para que uma falha de conexão permita repetir a requisição sem executar a operação duas vezes. Ela também explica que chamadas posteriores com a mesma chave retornam o resultado salvo e recomenda não colocar dados sensíveis na chave ([Stripe](https://docs.stripe.com/api/idempotent_requests)).

Idempotência não é “mandar tudo duas vezes e torcer”. O servidor precisa guardar a relação entre chave, parâmetros e resultado durante uma janela definida. O cliente precisa reutilizar a chave apenas para a mesma intenção. Se a pessoa inicia outra compra, nasce outra chave.

## simule a resposta que nunca chega

O teste mais importante ocorre quando o servidor conclui a operação, mas a resposta se perde. Interrompa a conexão nesse ponto, repita a chamada e confirme que existe apenas um efeito. Depois teste 429 com `Retry-After`, timeout, erro definitivo, tentativas simultâneas e esgotamento do limite. A interface deve informar que o estado está sendo confirmado, em vez de incentivar dez cliques nervosos.

Automação confiável não é a que nunca encontra falha. É a que sabe diferenciar “não aconteceu” de “talvez tenha acontecido” — e repete sem multiplicar consequências.

## fontes

- [RFC 6585: status HTTP 429 e Retry-After](https://www.rfc-editor.org/rfc/rfc6585.html)
- [AWS Well-Architected: controle e limite de novas tentativas](https://docs.aws.amazon.com/wellarchitected/2023-04-10/framework/rel_mitigate_interaction_failure_limit_retries.html)
- [Stripe: requisições idempotentes](https://docs.stripe.com/api/idempotent_requests)

---

*Uma tentativa repetida deve repetir a intenção, não o prejuízo.*
