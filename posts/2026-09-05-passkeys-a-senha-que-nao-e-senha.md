# passkeys: a senha que não é senha

Senha é uma tecnologia curiosa: precisa ser difícil para o criminoso, fácil para a dona da conta e diferente em cada site. Depois pedimos que uma cabeça humana administre dezenas delas e fingimos surpresa quando aparece “Isadora2026!” em três cadastros. Passkeys tentam mudar justamente essa relação.

Segundo a FIDO Alliance, passkeys substituem senhas por pares de chaves criptográficas e oferecem autenticação resistente a phishing ([FIDO Alliance](https://fidoalliance.org/passkeys/)). Uma chave fica protegida no dispositivo ou no provedor de credenciais; o serviço recebe a parte pública. Como o segredo usado para assinar o acesso não é entregue ao site, não há uma senha reutilizável para alguém copiar de um formulário falso ([FIDO Alliance](https://fidoalliance.org/passkeys/)).

Na prática, você entra confirmando com biometria, PIN ou desbloqueio do aparelho. O gesto parece simples porque a matemática faz o trabalho pesado nos bastidores.

## por que o phishing perde força

Uma senha pode ser digitada no endereço errado. A passkey é vinculada ao serviço para o qual foi criada, característica que impede seu uso por uma página impostora. A FIDO descreve passkeys como credenciais resistentes a phishing e baseadas em padrões, disponíveis para contextos pessoais, corporativos e governamentais ([FIDO Alliance](https://fidoalliance.org/implement-passkeys-overview/)).

Isso não torna a conta imortal. Ainda é preciso proteger o dispositivo, configurar recuperação e desconfiar de engenharia social. Um golpista pode tentar convencer você a aprovar outra ação, trocar dados cadastrais ou entregar códigos de recuperação. Segurança raramente morre; ela muda de endereço.

## como adotar sem se trancar para fora

Comece por uma conta importante que ofereça passkey e mantenha o método de recuperação atualizado. Entenda se a credencial será sincronizada entre seus dispositivos ou ficará presa a uma chave física. A FIDO diferencia passkeys sincronizadas e vinculadas a dispositivo, e cita chaves de segurança físicas como opção de maior garantia para contas sensíveis ([FIDO Alliance](https://fidoalliance.org/passkeys/)).

Em empresa, teste entrada, troca de aparelho, perda, desligamento de funcionário e acesso emergencial antes de expandir. Documente quem administra a recuperação. Não adianta eliminar a senha e criar um processo de suporte em que qualquer voz urgente consegue redefinir a conta.

Também não force uma migração sem explicar o que será guardado e onde. A experiência é nova para muita gente. Uma tela clara dizendo “use o desbloqueio deste aparelho; sua biometria não é enviada ao site” ensina mais do que um botão misterioso chamado WebAuthn.

Passkeys não são apenas senhas maiores. Elas mudam a prova: em vez de revelar um segredo compartilhado, o dispositivo demonstra que possui a chave correta. É uma mudança silenciosa e, pela primeira vez em muito tempo, a opção mais fácil pode ser também a mais segura.

## fontes

- [FIDO Alliance: visão geral de passkeys](https://fidoalliance.org/passkeys/)
- [FIDO Alliance: implementação de passkeys](https://fidoalliance.org/implement-passkeys-overview/)

---

*Tecnologia boa é aquela que reduz a quantidade de segredos que precisamos decorar e digitar por aí.*
