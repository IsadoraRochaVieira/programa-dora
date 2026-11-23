# acessibilidade que cabe no CSS: foco visível sem matar a estética

Existe um teste de qualidade que custa poucos segundos: largue o mouse, aperte Tab e tente usar a página. Se o foco some, pula para lugares estranhos ou fica escondido atrás de um cabeçalho fixo, o problema não é “preferência de navegação”. A interface deixou de mostrar onde a pessoa está.

A WCAG 2.2 é uma recomendação do W3C com critérios testáveis e independentes de tecnologia. O W3C aconselha usar essa versão como alvo atual de acessibilidade ([WCAG 2.2](https://www.w3.org/TR/WCAG22/)). Entre as adições estão foco não oculto, aparência do foco, alternativa para movimentos de arrastar, tamanho mínimo do alvo e autenticação acessível. É um lembrete simpático de que interface não termina quando fica bonita no meu notebook.

## não remova o contorno sem substituto

O clássico `outline: none` pode apagar a pista visual de quem navega por teclado. Eu prefiro estilizar `:focus-visible`, que permite um indicador claro quando a interação pede foco visível sem desenhar o mesmo efeito em todo clique do mouse.

```css
:focus-visible {
  outline: 3px solid #ffcc00;
  outline-offset: 3px;
}
```

Esse exemplo é um começo, não um certificado. A cor precisa funcionar sobre os fundos reais. O material explicativo do W3C observa que indicadores de foco também precisam de contraste contra cores adjacentes e que fundos variáveis, imagens e paralaxe podem criar combinações difíceis; uma solução com duas cores pode manter visibilidade em cenários diferentes ([W3C: Understanding Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html)).

## cuidado com elementos fixos

Banner de cookies, barra inferior e cabeçalho `position: sticky` conseguem esconder o componente focado. A WCAG 2.2 inclui o critério 2.4.11, no nível AA, para que o item com foco não fique totalmente oculto por conteúdo criado pela página ([WCAG 2.2, critério 2.4.11](https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum)). Na prática, eu testo o percurso completo com Tab e Shift+Tab, em tela grande e pequena, com todos os avisos abertos.

Links para “pular para o conteúdo” ajudam a evitar uma longa peregrinação pelo menu. Modais precisam manter o foco dentro deles enquanto abertos e devolvê-lo ao controle que os acionou quando fecham. Menus que aparecem visualmente mas continuam inalcançáveis por teclado não são menus completos; são cenografia.

## faça um teste humano e repetível

Meu checklist curto seria:

1. aumentar o zoom e conferir se o conteúdo continua operável;
2. percorrer a página usando apenas teclado;
3. observar foco em botões, links, campos, menu e modal;
4. confirmar que nada focado fica atrás de camadas fixas;
5. testar erros de formulário sem depender apenas de cor;
6. repetir no celular, onde alvos minúsculos viram um jogo de precisão.

A técnica G195 do W3C descreve uma forma de testar área e contraste do indicador, mas esclarece que técnicas são exemplos, não a única maneira de cumprir o requisito ([W3C G195](https://www.w3.org/WAI/WCAG22/Techniques/general/G195)). Isso é libertador: acessibilidade não exige que todo site pareça igual. Exige que a criatividade não esconda a interface de quem precisa usá-la.

Um bom foco pode combinar com a identidade visual. Pode ter contorno duplo, mudança sólida de fundo ou marcador lateral. O que não pode é ser um segredo. Design inclusivo não pede menos personalidade; pede que a personalidade também responda ao teclado.

## fontes

- [W3C: Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/)
- [W3C: Understanding Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html)
- [W3C: técnica G195 para indicador de foco visível](https://www.w3.org/WAI/WCAG22/Techniques/general/G195)

---

*Se eu não consigo ver onde está o foco, a interface virou caça ao tesouro — e ninguém pediu esse jogo.*
