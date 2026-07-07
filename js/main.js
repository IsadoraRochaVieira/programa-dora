/* ProgramaDora — interações: Dorinha, contador, faíscas, konami */
(function () {
  'use strict';

  var reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── contador de visitas (localStorage, honesto e caseiro) ── */
  var counterEl = document.getElementById('visit-counter');
  if (counterEl) {
    var visitas = parseInt(localStorage.getItem('pd-visitas') || '0', 10) + 1;
    localStorage.setItem('pd-visitas', String(visitas));
    counterEl.textContent = String(visitas).padStart(7, '0');
  }

  /* ── ano do rodapé ── */
  var anoEl = document.getElementById('ano');
  if (anoEl) anoEl.textContent = new Date().getFullYear();

  /* ── Dorinha, a mascote ── */
  var dorinha = document.getElementById('dorinha');
  var bubble = document.getElementById('dorinha-bubble');
  var falas = [
    'oi! eu sou a Dorinha 🤖',
    'às 6h e às 20h eu trago post novo!',
    'tudo que eu escrevo é conferido 2x. juro.',
    'beep boop. isso é marketing de conteúdo?',
    'IA não dorme. eu, no máximo, hiberno.',
    'esse layout é dos anos 90 ou de 2090?',
    'já leu o post de hoje? 👀',
    'ética em IA importa. até pra mim!',
    'segredo: aperte ↑↑↓↓←→←→BA',
    'me clicando você gasta 0 tokens 😌',
    'automatizar é o meu cardio.',
    'um dia eu tive um bug. era uma joaninha. 🐞'
  ];
  var bubbleTimer = null;

  function dorinhaFala() {
    if (!bubble) return;
    var fala = falas[Math.floor(Math.random() * falas.length)];
    bubble.textContent = fala;
    bubble.hidden = false;
    // pausa o passeio pra conversar
    dorinha.style.animationPlayState = 'paused';
    clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(function () {
      bubble.hidden = true;
      dorinha.style.animationPlayState = 'running';
    }, 3500);
  }

  if (dorinha) {
    dorinha.addEventListener('click', dorinhaFala);
    dorinha.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); dorinhaFala(); }
    });
    // apresentação inicial
    if (!reduzMovimento) setTimeout(dorinhaFala, 2500);
  }

  /* ── faíscas de clique ── */
  var sparkChars = ['✦', '★', '✧', '♥', '☆'];
  document.addEventListener('click', function (e) {
    if (reduzMovimento) return;
    for (var i = 0; i < 5; i++) {
      var s = document.createElement('span');
      s.className = 'spark';
      s.textContent = sparkChars[Math.floor(Math.random() * sparkChars.length)];
      s.style.left = e.clientX + 'px';
      s.style.top = e.clientY + 'px';
      s.style.color = ['#00f0ff', '#ff2ec4', '#c8ff00', '#ff7a00'][i % 4];
      s.style.setProperty('--sx', (Math.random() * 120 - 60) + 'px');
      s.style.setProperty('--sy', (Math.random() * -100 - 20) + 'px');
      document.body.appendChild(s);
      s.addEventListener('animationend', function () { this.remove(); });
    }
  });

  /* ── código konami → modo festa ── */
  var konami = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  var pos = 0;
  document.addEventListener('keydown', function (e) {
    pos = (e.key === konami[pos]) ? pos + 1 : (e.key === konami[0] ? 1 : 0);
    if (pos === konami.length) {
      pos = 0;
      document.body.classList.toggle('party');
      if (bubble) {
        bubble.textContent = document.body.classList.contains('party')
          ? '🎉 MODO FESTA ATIVADO!!!'
          : 'ok, festa encerrada. de volta ao trabalho.';
        bubble.hidden = false;
        clearTimeout(bubbleTimer);
        bubbleTimer = setTimeout(function () { bubble.hidden = true; }, 3000);
      }
    }
  });
})();
