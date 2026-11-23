# core web vitals sem neurose de nota perfeita

Existe um tipo específico de tristeza digital: passar a tarde perseguindo um 100 no Lighthouse enquanto a pessoa real ainda toca no menu e espera. A nota pode orientar, mas não é o produto. O objetivo é tornar a experiência rápida, estável e responsiva para gente usando aparelhos e redes que não moram no nosso escritório.

Os Core Web Vitals observam três aspectos: o LCP representa a velocidade percebida de carregamento do conteúdo principal, o INP mede a responsividade às interações e o CLS mede mudanças inesperadas de layout. Os limites classificados como “bons” pelo Google são LCP de até 2,5 segundos, INP de até 200 milissegundos e CLS de até 0,1, avaliados no percentil 75 das visitas ([web.dev](https://web.dev/articles/defining-core-web-vitals-thresholds)). Isso não transforma 2,51 segundos numa tragédia; oferece uma régua comum para investigar experiência.

## laboratório e rua são lugares diferentes

Lighthouse e DevTools produzem dados de laboratório: repetíveis, úteis antes de publicar e excelentes para encontrar trabalho pesado. Dados de campo, ou RUM, mostram o que ocorreu com visitantes reais. Eles variam conforme aparelho, conexão, cache, localização e comportamento. A documentação do web.dev alerta que laboratório e campo naturalmente divergem; também explica que o INP depende de interações reais e, por isso, não pode ser medido diretamente num teste de laboratório, no qual o TBT costuma servir como aproximação ([web.dev](https://web.dev/articles/vitals-measurement-getting-started)).

Minha rotina seria simples. Primeiro, abrir a página numa janela sem cache e descobrir qual elemento é o LCP. É a imagem de capa? O título? Depois, verificar se esse recurso chega cedo, tem tamanho adequado e não espera uma cadeia de scripts. Para CLS, reservar largura e altura de imagens, anúncios e componentes assíncronos. Para INP, interagir com filtros, menus e formulários enquanto observo tarefas longas no painel de desempenho.

Em seguida eu olharia dados reais no PageSpeed Insights ou no Chrome UX Report, quando houver volume suficiente. O próprio guia de medição recomenda prestar atenção à cauda da distribuição, porque uma mediana bonita pode esconder usuários com experiências ruins; a classificação considera se 75% das visitas atingem o limite bom em cada métrica ([web.dev](https://web.dev/articles/vitals-measurement-getting-started)).

## priorize por impacto, não por vaidade

Uma imagem gigantesca no topo, um pacote JavaScript carregado em toda rota e um widget externo bloqueando interação merecem atenção antes de micro-otimizar um ícone. Registre hipótese, mudança e resultado. Se comprimir a capa melhorou o LCP sem destruir a qualidade, ótimo. Se remover uma animação reduziu travamentos no celular, melhor ainda.

Também não esconda o problema com uma tela de carregamento cinematográfica. A pessoa continua esperando; agora só ganhou fogos de artifício. Performance é parte do design, porque define quando o conteúdo aparece, quando o botão responde e se a página permanece no lugar.

O relatório perfeito é o que vira uma experiência perceptivelmente melhor. O número é instrumento; o visitante é o motivo.

## fontes

- [web.dev: como foram definidos os limites dos Core Web Vitals](https://web.dev/articles/defining-core-web-vitals-thresholds)
- [web.dev: primeiros passos para medir Web Vitals](https://web.dev/articles/vitals-measurement-getting-started)
- [web.dev: fluxo de trabalho com ferramentas do Google](https://web.dev/articles/vitals-tools)

---

*Nota máxima é simpática; um botão que responde na hora é muito mais convincente.*
