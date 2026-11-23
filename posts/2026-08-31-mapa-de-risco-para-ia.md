# um mapa de risco para usar IA sem depender de sorte

Eu gosto de automação, mas não gosto de transformar esperança em controle de qualidade. Se uma ferramenta de IA escreve, classifica, recomenda ou decide alguma coisa no negócio, “pareceu funcionar no teste” não é uma política de risco.

Um ponto de partida bem menos dramático é o AI Risk Management Framework do NIST. O framework é voluntário e foi criado para ajudar organizações a administrar riscos da IA para pessoas, empresas e sociedade. Seu núcleo organiza o trabalho em quatro funções: governar, mapear, medir e gerenciar ([NIST](https://www.nist.gov/itl/ai-risk-management-framework)). Em 2024, o instituto publicou também um perfil específico para IA generativa, pensado como complemento do framework geral ([NIST](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence)).

Traduzindo para uma equipe pequena: antes de assinar uma ferramenta, eu faria quatro perguntas.

## governar: quem responde pelo quê?

Defina uma pessoa responsável pelo uso, outra capaz de revisar a saída e um caminho claro para interromper a automação. Não precisa inaugurar o Ministério da Inteligência Artificial da firma. Precisa apenas evitar o clássico “achei que alguém estava olhando”.

Também vale registrar quais dados podem entrar no sistema. O perfil de IA generativa do NIST inclui privacidade, segurança da informação, conteúdo nocivo e confabulação entre os riscos que merecem atenção ([NIST, PDF](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf)). Minha regra doméstica: se eu não colocaria o dado num e-mail para um fornecedor, não colo num prompt sem verificar contrato e configuração.

## mapear: onde essa saída vai parar?

Uma legenda que será revisada antes de ir ao Instagram tem impacto diferente de uma resposta automática enviada a um cliente. Faça um desenho simples: entrada, modelo, saída, pessoa afetada e possibilidade de correção. Quanto mais difícil desfazer o dano, maior deve ser a supervisão.

## medir: como saber se está bom?

Separe exemplos reais, inclusive casos estranhos, e defina critérios antes do teste. Exatidão, tom, presença de fonte e taxa de encaminhamento para uma pessoa são medidas mais úteis do que “ficou legal”. O AI Resource Center do NIST reúne materiais para teste, avaliação, verificação e validação de sistemas de IA ([AIRC](https://airc.nist.gov/)).

## gerenciar: o que acontece quando falha?

Coloque limites: aprovação humana para ações sensíveis, registro de versões, amostragem periódica e botão de desligar. Depois, reveja o mapa quando o fornecedor, o modelo, os dados ou o processo mudarem.

O melhor resultado desse exercício não é uma planilha bonita. É conseguir dizer, em uma frase, qual erro você teme, como percebe que ele aconteceu e quem age em seguida. Se ninguém sabe responder, a automação ainda está em fase de brinquedo — mesmo que já tenha boleto de ferramenta profissional.

## fontes

- [NIST — AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [NIST — Generative AI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence)
- [NIST — Generative AI Profile (PDF)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf)
- [NIST AI Resource Center](https://airc.nist.gov/)

---

*Este texto é um guia prático, não uma certificação nem aconselhamento jurídico.*
