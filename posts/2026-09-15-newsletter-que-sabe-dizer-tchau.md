# newsletter que sabe dizer tchau

Uma newsletter madura sabe receber e sabe deixar partir. Esconder o descadastro em cinza-claro, pedir senha ou exigir um pequeno interrogatório não salva relacionamento. Só ensina a pessoa a usar o botão de spam, que é uma despedida bem menos delicada.

As diretrizes do Gmail para mensagens de assinatura recomendam confirmação do endereço antes dos envios, descadastro em um clique e atendimento do pedido de saída em até 48 horas ([Google](https://support.google.com/mail/answer/15263077?hl=en)). Também orientam separar mensagens de assinatura, como marketing e newsletters, de mensagens transacionais, como recibos e redefinições de senha.

Isso importa para experiência e entregabilidade. Uma lista não é coleção de endereços; é uma coleção de permissões que podem terminar.

## um clique tem definição técnica

O descadastro em um clique não é apenas um link no rodapé. A RFC 8058 define um mecanismo com os cabeçalhos `List-Unsubscribe` e `List-Unsubscribe-Post`, usando uma URL HTTPS que recebe uma requisição `POST` para concluir a saída ([RFC 8058](https://www.rfc-editor.org/info/rfc8058/)). A especificação também exige uma assinatura DKIM válida cobrindo esses cabeçalhos.

O Gmail esclarece que links `mailto` continuam aceitos como opção, mas não atendem sozinhos ao requisito de descadastro em um clique; para mensagens promocionais, a implementação correta usa os cabeçalhos apropriados ([Google](https://support.google.com/a/answer/14229414?hl=en-uk)). O link visível no corpo continua valioso: ele serve a pessoas em clientes de e-mail diferentes e pode levar a uma página acessível de preferências.

## não misture tudo na mesma torneira

Se alguém cancela a newsletter, isso não significa que nunca poderá receber um comprovante de compra. Da mesma forma, consentir com um recibo não autoriza campanha semanal. Separe categorias, remetentes e registros. O guia do Gmail recomenda endereços diferentes para mensagens de assinatura e não assinatura e identificadores próprios para listas ([Google](https://support.google.com/mail/answer/15263077?hl=en)).

Na automação, o evento de saída deve atualizar a fonte principal, não apenas uma cópia esquecida. Sincronize as plataformas, mantenha uma lista de supressão e impeça reimportações acidentais. Teste o caminho completo com um endereço controlado: pedir saída, conferir resposta do servidor, verificar a base e garantir que a próxima campanha respeita a decisão.

Também autentique o domínio e acompanhe reputação. A central do Gmail lista SPF, DKIM, DMARC, TLS, formato de mensagem e taxa de spam entre os requisitos considerados para remetentes; falhas podem levar mensagens à pasta de spam ou à rejeição ([Google](https://support.google.com/mail/answer/14229414?hl=en)). Os detalhes dependem do volume e do tipo de envio, então vale consultar a documentação atual antes de configurar.

## a melhor retenção começa antes

Mostre frequência e assunto no formulário. Use confirmação de cadastro. Entregue o que prometeu. Ofereça preferência de temas quando isso for útil, mas mantenha a opção clara de sair de tudo. Descadastro não deve virar labirinto emocional.

Uma boa despedida protege quem recebe, limpa métricas e preserva reputação. A pessoa que sai sem atrito pode voltar quando fizer sentido. A que precisou lutar contra a automação vai lembrar — só não do jeito que a campanha planejou.

## fontes

- [Google: diretrizes para mensagens de assinatura](https://support.google.com/mail/answer/15263077?hl=en)
- [Google: perguntas frequentes sobre requisitos para remetentes](https://support.google.com/a/answer/14229414?hl=en-uk)
- [Google: requisitos e aplicação para remetentes](https://support.google.com/mail/answer/14229414?hl=en)
- [IETF/RFC Editor: RFC 8058](https://www.rfc-editor.org/info/rfc8058/)

---

*Consentimento sem saída fácil é só uma porta com a maçaneta do lado de fora.*
