# antes de colar dados de clientes no chatbot, respira

É quase automático: chega uma planilha confusa, alguém abre o chatbot e pede “organize isso aqui”. Só depois percebe que mandou nomes, telefones, histórico de compras e observações internas para uma ferramenta que talvez nem estivesse aprovada pela empresa. A produtividade ganhou cinco minutos; a governança perdeu o sono.

A LGPD trata proteção de dados pessoais como responsabilidade de quem realiza o tratamento, e a ANPD mantém guias oficiais para orientar organizações, inclusive agentes de pequeno porte ([ANPD](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes)). A resolução específica para pequenos agentes exige medidas administrativas e técnicas essenciais, considerando o risco à privacidade e a realidade da organização ([ANPD](https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-cd-anpd-no-2-de-27-de-janeiro-de-2022)). Ser pequena reduz a equipe; não torna o dado invisível.

## cinco perguntas antes do ctrl+v

Qual é a finalidade? “Ver o que a IA faz” não é finalidade de negócio suficientemente clara. Descreva o resultado necessário.

Preciso de todos esses campos? Para classificar comentários por assunto, talvez nome, CPF e telefone não acrescentem nada. Remover o que não é necessário diminui exposição.

Qual ferramenta será usada? Verifique contrato, configurações, retenção, acesso, localização e política interna. Uma conta pessoal e um ambiente corporativo controlado não são a mesma coisa.

Quem verá a saída? O resultado pode repetir informações da entrada. Defina onde será guardado, por quanto tempo e quem poderá acessar.

O que acontece se der errado? Tenha um canal para incidente, correção e pedido do titular. A LGPD define o operador como quem trata dados pessoais em nome do controlador, distinção importante ao contratar serviços ([LGPD, art. 5º](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm)).

## uma rotina mais segura

Para experimentos, comece com dados fictícios ou anonimizados de verdade. Se o uso precisar de dados reais, documente a decisão, aplique controles de acesso e use apenas o ambiente autorizado. O guia de segurança da ANPD recomenda, entre outras medidas, controle de acesso para usuários de sistemas internos ([ANPD](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/anonimizado___guia_orientat-_seg_da_inf_p_atpp.pdf)).

Também vale manter um catálogo simples: ferramenta, finalidade, responsável, tipos de dado, fornecedor e revisão prevista. Não precisa nascer como sistema milionário. Uma tabela revisada mensalmente já torna visível o que antes acontecia escondido em abas do navegador.

IA não suspende a regra básica de privacidade: dado de cliente não é material gratuito para teste. Se a tarefa funciona sem identificar ninguém, melhor. Se não funciona, trate a escolha como decisão de dados, não como atalho de produtividade.

## fontes

- [ANPD: materiais educativos e publicações](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes)
- [ANPD: Resolução CD/ANPD nº 2/2022](https://www.gov.br/anpd/pt-br/acesso-a-informacao/institucional/atos-normativos/regulamentacoes_anpd/resolucao-cd-anpd-no-2-de-27-de-janeiro-de-2022)
- [Planalto: Lei Geral de Proteção de Dados Pessoais](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm)
- [ANPD: guia de segurança para agentes de pequeno porte](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/anonimizado___guia_orientat-_seg_da_inf_p_atpp.pdf)

---

*Conteúdo educativo; adequação à LGPD em um caso concreto pede avaliação profissional própria.*
