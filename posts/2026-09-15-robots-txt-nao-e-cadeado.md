# robots.txt não é cadeado

Existe um arquivo pequeno que recebe responsabilidades grandes demais. Alguém coloca `Disallow: /segredo/` no `robots.txt`, respira aliviado e imagina uma porta de aço fechando. Só que o arquivo é público, a regra é um pedido para robôs cooperativos e o endereço “secreto” acabou de entrar numa lista legível por qualquer pessoa.

O padrão técnico do protocolo é a RFC 9309. Ela diz que as regras orientam como rastreadores acessam URLs e afirma expressamente que elas não são uma forma de autorização de acesso ([IETF](https://www.rfc-editor.org/rfc/rfc9309.html)). Na seção de segurança, o documento lembra que listar caminhos pode torná-los descobríveis e recomenda proteção válida na camada da aplicação para restringir acesso.

## rastrear, indexar e proteger são verbos diferentes

O `robots.txt` serve principalmente para gerenciar tráfego de rastreadores. O Google explica que uma URL bloqueada pode aparecer nos resultados se outros lugares apontarem para ela, mesmo que o conteúdo não seja rastreado ([Google Search Central](https://developers.google.com/search/docs/crawling-indexing/robots/intro)). Portanto, “não visitar” não é igual a “não mencionar”.

Se a intenção é retirar uma página HTML dos resultados, use `noindex` e permita que o robô leia essa instrução. Bloquear a URL no `robots.txt` e colocar `noindex` dentro dela cria um pequeno paradoxo: o Google informa que regras em meta tags ou cabeçalhos só são descobertas quando a página pode ser rastreada ([Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)).

Para PDFs e outros recursos que não têm `<head>`, o mesmo guia documenta o cabeçalho HTTP `X-Robots-Tag: noindex`. Para conteúdo realmente privado, a resposta não é SEO: é autenticação e autorização no servidor. Se basta saber a URL para abrir, aquilo não está protegido.

## um arquivo simples ainda merece teste

O arquivo deve morar em `/robots.txt`, no topo do serviço. Regras são agrupadas por `User-agent`; `Allow` e `Disallow` trabalham com caminhos. A RFC determina que o caminho mais específico vence e que, em empate entre permissão e bloqueio equivalentes, `Allow` deve prevalecer ([IETF](https://www.rfc-editor.org/rfc/rfc9309.html)).

Eu manteria as regras curtas, comentadas e versionadas. Depois de publicar, abriria o arquivo diretamente e testaria URLs importantes. Também conferiria se CSS e JavaScript necessários para renderizar páginas públicas não foram bloqueados sem querer. Um ajuste apressado pode economizar rastreamento num canto e deixar o conteúdo principal incompreensível no outro.

O checklist fica assim: quero reduzir visitas automáticas? `robots.txt`. Quero impedir exibição na busca? `noindex`, quando aplicável. Quero guardar informação privada? login, autorização e controles reais. Cada ferramenta no seu emprego, sem pedir ao porteiro de papel que trabalhe como cofre.

## fontes

- [IETF: RFC 9309 — Robots Exclusion Protocol](https://www.rfc-editor.org/rfc/rfc9309.html)
- [Google Search Central: introdução ao robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro)
- [Google Search Central: robots meta tag e X-Robots-Tag](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)

---

*Um pedido educado para robôs não substitui uma porta trancada para pessoas.*
