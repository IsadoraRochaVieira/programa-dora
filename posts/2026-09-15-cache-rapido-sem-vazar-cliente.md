# cache rápido sem vazar cliente

Cache deixa sites rápidos guardando respostas para reutilizá-las. Também consegue servir o painel de uma pessoa para outra quando configurado no modo “vai dar certo”. Velocidade é ótima; vazamento em alta velocidade continua sendo vazamento.

No HTTP existem caches privados, normalmente ligados a um navegador, e caches compartilhados, como proxies e CDNs. A documentação da MDN explica que conteúdo personalizado colocado num cache compartilhado pode ser recuperado por outros usuários e causar exposição involuntária de informação ([MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching)). Cookie presente não transforma uma resposta automaticamente em privada.

## entenda os nomes que parecem pegadinha

`Cache-Control: private` permite armazenamento apenas em cache privado. É uma opção para respostas personalizadas que podem permanecer no dispositivo da própria pessoa, mas não circular numa CDN compartilhada ([MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control)).

`no-store` pede que nenhum cache armazene a resposta. Já `no-cache` não significa “não guardar”: significa que a resposta não deve ser reutilizada sem validação com o servidor ([MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control)). Os nomes são antigos, a confusão é moderna e copiar cinco diretivas contraditórias não melhora o entendimento.

Para HTML público que muda, revalidação com `no-cache`, `ETag` ou `Last-Modified` pode evitar baixar tudo outra vez quando nada mudou. Para arquivos estáticos com nome versionado — como `app.abc123.js` — a MDN mostra o padrão de vida longa com `max-age` e `immutable`, porque uma alteração produz uma URL nova ([MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control)).

## classifique antes de acelerar

Eu dividiria respostas em quatro grupos: público imutável, público mutável, personalizado e sensível. Imagens e bundles com hash entram no primeiro. A home e artigos entram no segundo. O painel da conta pertence ao terceiro. Tokens, respostas de autenticação e dados especialmente delicados pedem uma análise conservadora no quarto.

Depois verificaria cabeçalhos reais no navegador e na borda, não apenas a intenção no código. CDNs e caches gerenciados têm configurações próprias; a MDN observa que o comportamento varia por produto e pode ser controlado também em painéis ou arquivos de configuração ([MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching)).

O teste mais importante usa duas sessões: abra como uma pessoa, depois solicite a mesma URL como outra e sem autenticação. Confira corpo, cabeçalhos e chaves que diferenciam a resposta. Ao invalidar conteúdo, teste também se versões antigas continuam acessíveis.

Cache não é verniz colocado no final. Ele participa da arquitetura de dados. Quando a regra é explícita por categoria de conteúdo, o site ganha velocidade sem transformar clientes em vizinhos de gaveta.

## fontes

- [MDN: guia de cache HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching)
- [MDN: referência de Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control)
- [IETF: RFC 9111 — HTTP Caching](https://www.rfc-editor.org/rfc/rfc9111.html)

---

*A resposta mais rápida é inútil quando chega para a pessoa errada.*
