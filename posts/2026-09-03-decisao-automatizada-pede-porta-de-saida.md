# decisão automatizada precisa de uma porta de saída

Automação fica especialmente delicada quando deixa de organizar trabalho e começa a afetar pessoas: aprovar cadastro, ordenar candidatos, calcular risco, definir limite ou bloquear acesso. A pergunta já não é só “acertou bastante?”. É também “a pessoa consegue entender e contestar?”.

A ANPD explica que, quando dados pessoais são usados em decisões tomadas unicamente por tratamento automatizado que afetem interesses — incluindo perfil profissional, de consumo e de crédito — o titular pode solicitar a revisão e obter informações sobre critérios e parâmetros utilizados, observados os limites legais ([ANPD](https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados-1/direito-dos-titulares)).

Para mim, isso vira requisito de produto, não texto escondido na política de privacidade.

## registre a finalidade antes do modelo

Escreva qual decisão será apoiada, quais dados são necessários e qual dano um erro pode causar. Se ninguém consegue explicar a finalidade sem dizer “otimizar o funil”, ainda falta trabalho.

Depois, separe três papéis: o sistema produz um sinal, uma regra transforma o sinal em ação e alguém responde pela ação. Essa separação deixa mais fácil descobrir onde o problema nasceu.

## ofereça explicação útil

Uma explicação não precisa revelar código-fonte para ser útil. Ela pode dizer quais categorias de informação pesaram, qual política foi aplicada, onde os dados vieram e como corrigir dado errado. “Nosso algoritmo decidiu” não é explicação; é apenas uma frase passiva com crachá tecnológico.

O AI Risk Management Framework do NIST propõe administrar riscos da IA para indivíduos, organizações e sociedade, e organiza esse esforço em governar, mapear, medir e gerenciar ([NIST](https://www.nist.gov/itl/ai-risk-management-framework)). Para uma decisão automatizada, isso sugere governança definida, contexto mapeado, desempenho medido e risco continuamente tratado.

## faça a revisão existir de verdade

Crie um canal visível, um prazo interno e uma pessoa com autoridade para mudar o resultado. Se a “revisão” apenas executa o mesmo sistema outra vez, temos replay, não recurso.

Teste também diferenças entre grupos e casos raros. Guarde versão do modelo, dados relevantes, resultado e intervenção, respeitando necessidade e segurança. Sem rastreabilidade, toda contestação vira arqueologia.

## prefira apoio quando o impacto é alto

Nem todo processo precisa ser totalmente automático. O sistema pode priorizar casos, detectar inconsistências ou preparar uma análise, deixando a decisão final e justificável com uma pessoa. Supervisão humana não é decoração: exige tempo, informação e liberdade para discordar.

Uma boa porta de saída protege quem foi afetado e melhora o próprio produto. Contestação revela dado desatualizado, regra injusta e contexto que o modelo não enxergou. O botão “falar com uma pessoa” pode ser, ironicamente, uma das melhores fontes de dados para fazer a automação amadurecer.

## fontes

- [ANPD — direitos dos titulares](https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados-1/direito-dos-titulares)
- [NIST — AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)

---

*Conteúdo informativo; decisões com efeitos jurídicos ou relevantes pedem avaliação técnica e jurídica específica.*
