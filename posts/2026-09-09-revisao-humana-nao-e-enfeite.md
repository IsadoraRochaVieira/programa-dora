# revisão humana não é o botão “aprovar” com pressa

Muitos produtos anunciam “humano no circuito” como se a presença de uma pessoa perto da tela resolvesse qualquer risco. Na prática, o sistema prepara a decisão, colore uma opção de verde e entrega à revisora duzentos casos antes do almoço. Ela clica em aprovar porque contestar exige tempo, contexto e coragem. Temos um humano no circuito e nenhum julgamento disponível.

O framework de risco de IA do NIST propõe administrar riscos por meio das funções governar, mapear, medir e gerenciar ([NIST AI RMF](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf)). O perfil específico para IA generativa recomenda ações ao longo do ciclo de vida e considera riscos próprios ou ampliados por esses sistemas ([NIST](https://www.nist.gov/itl/ai-risk-management-framework)). Revisão humana pode ser um controle dentro desse desenho, mas só funciona quando tem autoridade e informação.

## quatro condições para uma revisão de verdade

A pessoa precisa entender o objetivo. “Veja se está bom” é uma instrução frouxa. Diga quais fatos conferir, quais políticas aplicar e qual consequência evitar.

Ela precisa acessar evidências. Se a IA resume um contrato, a revisora precisa do contrato e da localização dos trechos, não apenas de uma resposta confiante. Se recomenda bloquear uma transação, deve mostrar sinais relevantes e limites conhecidos.

Ela precisa poder discordar. O fluxo deve oferecer corrigir, rejeitar, pedir nova análise e interromper o sistema. Taxa de discordância zero pode significar perfeição; com mais frequência, merece uma investigação sobre desenho, pressão e métricas.

E precisa de tempo proporcional ao risco. Revisar uma sugestão de assunto de e-mail é diferente de revisar uma decisão que afeta emprego, dinheiro ou acesso a serviço. O NIST descreve seu framework como recurso para gerir riscos a indivíduos, organizações e sociedade; isso exige olhar para quem recebe a consequência, não apenas para quem opera a tela ([NIST](https://www.nist.gov/itl/ai-risk-management-framework)).

## meça o controle, não a decoração

Registre quantas saídas foram alteradas, quais erros aparecem, quanto tempo a revisão leva e quantos casos são escalados. Faça amostragens independentes de itens aprovados. Misture casos de teste conhecidos para descobrir se a revisão detecta problemas. E escute a equipe: se todos criaram atalhos por fora, o processo oficial provavelmente não cabe no trabalho real.

Também separe autoria de responsabilidade. A IA pode gerar a primeira versão, mas a organização define o propósito, escolhe dados, configura permissões e publica a saída. Colocar uma caixa “revisado por humano” não transfere essas escolhas para a pessoa que recebeu cinco segundos para clicar.

Revisão humana boa não é selo. É um trabalho desenhado com contexto, competência, tempo e poder de parada. Sem esses quatro elementos, o humano vira apenas o último componente automático de uma automação mal pensada.

## fontes

- [NIST: AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [NIST AI RMF 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf)
- [NIST: perfil de IA generativa](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf)

---

*Uma assinatura humana só vale como controle quando a pessoa pode dizer “não”.*
