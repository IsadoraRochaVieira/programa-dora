# antes do demo bonito, faça um eval que possa falhar

Uma demonstração de IA tem condições perfeitas: pergunta ensaiada, internet colaborando e ninguém procurando a exceção. Produto real recebe abreviação, ambiguidade, texto enorme, documento vazio e usuário com uma intenção que a equipe nunca imaginou. Por isso, “eu testei e funcionou” não é uma avaliação; é uma lembrança feliz.

Eval é um conjunto repetível de casos, critérios e resultados. Ele deve representar a tarefa concreta. Se o sistema extrai dados de notas fiscais, avalie campos corretos, ausentes e inventados. Se responde usando documentos internos, confira se a resposta encontra suporte nos trechos recuperados, se admite falta de evidência e se cita a origem certa.

O perfil de IA generativa do NIST recomenda avaliar alegações sobre capacidade com métodos empiricamente validados, medir desempenho em condições semelhantes ao ambiente de implantação e documentar limitações de generalização ([NIST AI 600-1](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf)). Em português direto: o teste precisa parecer com a vida do produto e seu resultado precisa deixar rastros.

## construa a menor suíte honesta

Eu começaria com vinte a cinquenta casos retirados do uso esperado, removendo dados pessoais. Separaria exemplos comuns, difíceis e perigosos. Cada caso teria entrada, resultado aceitável, resultado inaceitável e motivo. Para respostas abertas, uma rubrica curta funciona melhor que “gostei”: correção factual, aderência à fonte, completude, clareza e recusa apropriada.

Algumas verificações podem ser automáticas. JSON válido, presença de campos e correspondência exata são fáceis. Outras pedem revisão humana ou amostragem. Um segundo modelo pode ajudar a triar, mas não deve virar juiz invisível: sua regra, versão e discordâncias também precisam ser avaliadas.

Inclua casos adversariais. O documento tenta mudar a instrução? A pergunta pede uma afirmação que a fonte não sustenta? O usuário mistura duas entidades com nomes parecidos? O NIST recomenda testes adversariais regulares e revisão de fontes e citações nas saídas, tanto antes da implantação quanto no monitoramento contínuo ([NIST AI 600-1](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf)).

## transforme mudança em comparação

Salve modelo, prompt, parâmetros, data e versão da base. Rode a mesma suíte antes e depois de alterar o sistema. Não olhe só a média: uma melhoria geral pode esconder uma piora séria em recusas ou numa categoria de usuário. Defina um limite mínimo e também falhas bloqueadoras. “Acertou 92%” não compensa publicar um dado pessoal no caso restante.

Quando surgirem erros reais, transforme exemplos devidamente sanitizados em novos casos. A suíte cresce junto com o produto. Revise também se ela continua representativa; o NIST observa que testes prévios podem não refletir o contexto de implantação e que lacunas aparecem entre laboratório e mundo real ([NIST AI 600-1](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf)).

O objetivo de um eval não é provar que a IA é genial. É descobrir, de forma barata e repetível, onde ela deixa de ser confiável antes que o usuário faça essa descoberta por nós.

## fontes

- [NIST: perfil de gerenciamento de riscos para IA generativa](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf)
- [NIST: AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [NIST: documentação da plataforma de testes Dioptra](https://pages.nist.gov/dioptra/)

---

*Um bom teste não protege a autoestima do produto; protege quem vai depender dele.*
