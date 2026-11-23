# webhook não é campainha sem olho mágico

Webhook parece simples: um serviço bate numa URL e entrega um JSON. A simplicidade termina quando esse JSON diz “pagamento aprovado” e o sistema libera um pedido. Sem verificação, qualquer pessoa que descubra a rota pode tocar a campainha vestida de evento oficial.

A documentação da Stripe alerta que, sem verificação, um atacante poderia enviar eventos falsos para disparar entrega, conceder acesso ou modificar registros. A empresa assina cada evento no cabeçalho `Stripe-Signature` e recomenda verificar a assinatura antes de agir ([Stripe](https://docs.stripe.com/webhooks)). A lógica vale além de pagamentos: trate todo webhook como entrada não confiável até validar o mecanismo definido pelo provedor.

## preserve o corpo original

Para conferir a assinatura, a Stripe usa o corpo recebido, o cabeçalho de assinatura e o segredo do endpoint. O corpo precisa chegar sem alterações; transformar o JSON, reordenar campos ou mudar espaços antes da validação pode fazê-la falhar ([Stripe](https://docs.stripe.com/webhooks/signature)). Em frameworks web, isso costuma exigir uma rota configurada para capturar bytes crus antes do middleware que analisa JSON.

O segredo também não é universal. Ambientes de teste e produção usam valores diferentes, assim como endpoints diferentes. Guarde-o fora do código, restrinja acesso e planeje rotação. Não registre o segredo nem o corpo completo se ele contiver dados sensíveis.

## válido não significa inédito

Um evento verdadeiro pode chegar mais de uma vez. Pode haver nova tentativa após timeout, falha de rede ou resposta fora da faixa `2xx`. Por isso, além da assinatura, guarde o identificador do evento já processado e faça a operação ser idempotente: repetir a mesma entrega não deve cobrar, enviar ou creditar duas vezes.

Para chamadas de API que criam ou atualizam objetos, a Stripe aceita chaves de idempotência em requisições `POST` e as usa para impedir que uma repetição acidental execute a mesma operação novamente ([Stripe API](https://docs.stripe.com/api/idempotent_requests)). No receptor do webhook, a deduplicação é responsabilidade do seu sistema.

Há ainda ataques de repetição, em que alguém captura uma mensagem assinada e a reenvia. A Stripe inclui um horário no cabeçalho assinado; suas bibliotecas verificam a recência com tolerância padrão de cinco minutos e alertam que configurar tolerância zero desliga essa checagem ([Stripe](https://docs.stripe.com/webhooks)). O relógio do servidor precisa estar sincronizado.

## responda rápido, trabalhe com calma

Depois de validar e registrar o evento, coloque o trabalho demorado numa fila e responda rapidamente. A própria documentação orienta devolver sucesso antes de lógica complexa capaz de estourar o tempo ([Stripe](https://docs.stripe.com/webhooks)). Registre ID, tipo, horário, resultado e tentativas para investigar falhas sem expor o payload inteiro.

Um webhook robusto não confia no uniforme, não faz o mesmo pedido duas vezes e não deixa a visita esperando na porta enquanto reorganiza a casa. Parece menos mágico. Funciona muito melhor às três da manhã.

## fontes

- [Stripe: receber e proteger webhooks](https://docs.stripe.com/webhooks)
- [Stripe: verificar assinaturas de webhook](https://docs.stripe.com/webhooks/signature)
- [Stripe API: requisições idempotentes](https://docs.stripe.com/api/idempotent_requests)

---

*Antes de obedecer ao JSON, confirme quem tocou a campainha e se já entrou.*
