/* ProgramaDora — interações: countdown, reveal, magnético, tilt,
   cursor glow, cookies LGPD, Dorinha 2.0, konami */
(function () {
  'use strict';

  var reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ponteiroFino = window.matchMedia('(pointer: fine)').matches;

  /* leitura da página + camadas cinéticas do hero */
  var progresso = document.getElementById('progresso');
  var shapes = document.querySelectorAll('.shape[data-prof]');
  var ultimoScroll = 0;
  function atualizaScroll() {
    var y = window.scrollY || 0;
    var max = document.documentElement.scrollHeight - innerHeight;
    if (progresso) progresso.style.width = (max > 0 ? y / max * 100 : 0) + '%';
    if (!reduzMovimento) {
      shapes.forEach(function (s) {
        var prof = Number(s.getAttribute('data-prof')) || 1;
        s.style.translate = '0 ' + (y * prof * -.025) + 'px';
      });
    }
    ultimoScroll = y;
  }
  addEventListener('scroll', atualizaScroll, { passive: true });
  atualizaScroll();

  /* título que decodifica uma vez, mantendo o texto acessível */
  var decode = document.getElementById('decode');
  if (decode && !reduzMovimento) {
    var alvoDecode = decode.getAttribute('data-texto') || decode.textContent;
    var chars = '0123456789#@%&*ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var quadro = 0;
    var decodeTimer = setInterval(function () {
      decode.textContent = alvoDecode.split('').map(function (letra, i) {
        if (letra === ' ' || i < quadro / 2) return letra;
        return chars[Math.floor(Math.random() * chars.length)];
      }).join('');
      quadro += 1;
      if (quadro > alvoDecode.length * 2) {
        clearInterval(decodeTimer);
        decode.textContent = alvoDecode;
      }
    }, 38);
  }

  /* ── ano do rodapé ── */
  var anoEl = document.getElementById('ano');
  if (anoEl) anoEl.textContent = new Date().getFullYear();

  /* ── countdown até a próxima edição (6h / 20h) ── */
  var timerEl = document.getElementById('countdown-timer');
  var edicaoEl = document.getElementById('countdown-edicao');

  function proximaEdicao() {
    var agora = new Date();
    var seis = new Date(agora); seis.setHours(6, 0, 0, 0);
    var vinte = new Date(agora); vinte.setHours(20, 0, 0, 0);
    if (agora < seis) return { quando: seis, nome: 'edição das 06h' };
    if (agora < vinte) return { quando: vinte, nome: 'edição das 20h' };
    seis.setDate(seis.getDate() + 1);
    return { quando: seis, nome: 'edição das 06h' };
  }

  function tiquetaque() {
    if (!timerEl) return;
    var alvo = proximaEdicao();
    var diff = Math.max(0, alvo.quando - new Date());
    var h = Math.floor(diff / 3600000);
    var m = Math.floor(diff / 60000) % 60;
    var s = Math.floor(diff / 1000) % 60;
    function pad(n) { return String(n).padStart(2, '0'); }
    timerEl.textContent = pad(h) + ':' + pad(m) + ':' + pad(s);
    if (edicaoEl) edicaoEl.textContent = '→ ' + alvo.nome;
  }
  tiquetaque();
  setInterval(tiquetaque, 1000);

  /* ── reveal ao rolar ── */
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('visivel'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { observer.observe(el); });

  /* ── botões magnéticos ── */
  if (ponteiroFino && !reduzMovimento) {
    document.querySelectorAll('[data-magnetico]').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var r = btn.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) * 0.25;
        var y = (e.clientY - r.top - r.height / 2) * 0.35;
        btn.style.transform = 'translate(' + x + 'px,' + y + 'px)';
      });
      btn.addEventListener('mouseleave', function () { btn.style.transform = ''; });
    });
  }

  /* ── tilt 3D nos cards (delegado, pois o feed carrega depois) ── */
  if (ponteiroFino && !reduzMovimento) {
    document.addEventListener('mousemove', function (e) {
      var card = e.target.closest ? e.target.closest('.card') : null;
      if (!card) return;
      var r = card.getBoundingClientRect();
      var rx = ((e.clientY - r.top) / r.height - 0.5) * -6;
      var ry = ((e.clientX - r.left) / r.width - 0.5) * 6;
      card.style.transform = 'perspective(700px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg)';
    });
    document.addEventListener('mouseout', function (e) {
      var card = e.target.closest ? e.target.closest('.card') : null;
      if (card && !card.contains(e.relatedTarget)) card.style.transform = '';
    });
  }

  /* ── cursor glow ── */
  var glow = document.getElementById('cursor-glow');
  if (glow && ponteiroFino && !reduzMovimento) {
    var gx = -400, gy = -400, mx = gx, my = gy;
    document.addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; });
    (function anima() {
      gx += (mx - gx) * 0.12;
      gy += (my - gy) * 0.12;
      glow.style.left = gx + 'px';
      glow.style.top = gy + 'px';
      requestAnimationFrame(anima);
    })();
  } else if (glow) {
    glow.style.display = 'none';
  }

  /* ── cookie banner (LGPD) ── */
  var cookies = document.getElementById('cookies');
  var cookiesOk = document.getElementById('cookies-ok');
  if (cookies && !localStorage.getItem('pd-lgpd-ok')) {
    cookies.hidden = false;
    setTimeout(function () { cookies.classList.add('visivel'); }, 900);
  }
  if (cookiesOk) {
    cookiesOk.addEventListener('click', function () {
      localStorage.setItem('pd-lgpd-ok', new Date().toISOString());
      cookies.classList.remove('visivel');
      setTimeout(function () { cookies.hidden = true; }, 700);
    });
  }

  /* ── formulário participe → e-mail ── */
  var form = document.getElementById('form-participe');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nome = document.getElementById('f-nome').value.trim();
      var tipo = document.getElementById('f-tipo').value;
      var msg = document.getElementById('f-msg').value.trim();
      var assunto = '[ProgramaDora] ' + tipo + ' — ' + nome;
      var corpo = 'Nome: ' + nome + '\nTipo: ' + tipo + '\n\n' + msg;
      location.href = 'mailto:isadorarocha1898@gmail.com?subject=' +
        encodeURIComponent(assunto) + '&body=' + encodeURIComponent(corpo);
    });
  }

  /* ── Dorinha 2.0 ── */
  var dorinha = document.getElementById('dorinha');
  var bubble = document.getElementById('dorinha-bubble');
  var falas = [
    'oi! eu sou a Dorinha, a IA da casa 💜',
    'o cronômetro lá em cima? é a próxima edição automática.',
    'tudo que publico passa por uma segunda IA. desconfiança saudável!',
    'já viu a lista de cursos? tem coisa boa e gratuita.',
    'achou um erro? me dedura na seção participe. eu aguento.',
    'este site não te rastreia. só te informa. 🍪✖️',
    'dica: aperte ↑↑↓↓←→←→BA…',
    'o TCC da Isadora virou este blog. ciência aplicada!',
    'se uma edição falhar, ela não finge que publicou: segurança primeiro.'
  ];
  var falaIdx = 0, bubbleTimer = null;

  function dorinhaFala(texto) {
    if (!bubble) return;
    bubble.textContent = texto || falas[falaIdx++ % falas.length];
    bubble.hidden = false;
    clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(function () { bubble.hidden = true; }, 4200);
  }
  if (dorinha) {
    dorinha.addEventListener('click', function () { dorinhaFala(); });
    if (!reduzMovimento) setTimeout(function () { dorinhaFala(); }, 3200);
  }

  /* ── konami → chuva de confete ── */
  var konami = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  var pos = 0;
  document.addEventListener('keydown', function (e) {
    pos = (e.key === konami[pos]) ? pos + 1 : (e.key === konami[0] ? 1 : 0);
    if (pos === konami.length) {
      pos = 0;
      if (reduzMovimento) return;
      dorinhaFala('🎉 você achou o segredo!');
      var chars = ['✦', '✧', '💜', '🤖', '⚡', '✨'];
      for (var i = 0; i < 60; i++) {
        var c = document.createElement('span');
        c.className = 'confete';
        c.textContent = chars[i % chars.length];
        c.style.left = Math.random() * 100 + 'vw';
        c.style.animationDuration = (2.2 + Math.random() * 2.5) + 's';
        c.style.animationDelay = (Math.random() * 1.2) + 's';
        document.body.appendChild(c);
        c.addEventListener('animationend', function () { this.remove(); });
      }
    }
  });
})();
