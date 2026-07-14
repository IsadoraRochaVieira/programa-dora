/* ProgramaDora — carrega posts/index.json e monta o feed */
(function () {
  'use strict';

  var grid = document.getElementById('feed-grid');
  if (!grid) return;
  var contador = document.getElementById('feed-count');

  function fmtData(iso) {
    var d = new Date(iso + 'T12:00:00');
    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  fetch('posts/index.json')
    .then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    })
    .then(function (posts) {
      posts.sort(function (a, b) { return b.date.localeCompare(a.date); });
      grid.innerHTML = '';
      posts.forEach(function (p, indice) {
        var card = document.createElement('article');
        card.className = 'card';
        card.dataset.tags = (p.tags || []).join('|').toLocaleLowerCase('pt-BR');
        card.style.setProperty('--ordem', indice);

        var meta = document.createElement('div');
        meta.className = 'card__meta';
        var emoji = document.createElement('span');
        emoji.className = 'card__emoji';
        emoji.textContent = p.emoji || '📄';
        var data = document.createElement('span');
        data.textContent = fmtData(p.date) + (p.hora ? ' • ' + p.hora : '');
        meta.appendChild(emoji);
        meta.appendChild(data);
        if (p.verificado) {
          var stamp = document.createElement('span');
          stamp.className = 'card__stamp';
          stamp.textContent = '✓✓ verificado 2x';
          meta.appendChild(stamp);
        }

        var h = document.createElement('h3');
        h.className = 'card__title';
        var link = document.createElement('a');
        link.href = 'post.html?p=' + encodeURIComponent(p.slug);
        link.textContent = p.title;
        h.appendChild(link);

        var sum = document.createElement('p');
        sum.className = 'card__summary';
        sum.textContent = p.summary || '';

        var tags = document.createElement('div');
        tags.className = 'card__tags';
        (p.tags || []).forEach(function (t) {
          var tag = document.createElement('span');
          tag.className = 'card__tag';
          tag.textContent = '#' + t;
          tags.appendChild(tag);
        });

        card.appendChild(meta);
        card.appendChild(h);
        card.appendChild(sum);
        card.appendChild(tags);
        grid.appendChild(card);
      });
      if (contador) contador.textContent = posts.length + ' edições no arquivo';

      document.querySelectorAll('[data-filter]').forEach(function (botao) {
        botao.addEventListener('click', function () {
          var filtro = botao.getAttribute('data-filter');
          var visiveis = 0;
          document.querySelectorAll('[data-filter]').forEach(function (b) { b.classList.remove('ativo'); });
          botao.classList.add('ativo');
          grid.querySelectorAll('.card').forEach(function (card) {
            var mostrar = filtro === 'todos' || card.dataset.tags.split('|').indexOf(filtro) !== -1;
            card.hidden = !mostrar;
            if (mostrar) visiveis += 1;
          });
          if (contador) contador.textContent = visiveis + (visiveis === 1 ? ' edição' : ' edições');
        });
      });
      if (!posts.length) {
        grid.innerHTML = '<p class="feed__loading">nenhum post ainda — a robozinha chega às 6h. ⏰</p>';
      }
    })
    .catch(function (err) {
      grid.innerHTML = '<p class="feed__loading">erro ao carregar os posts (' + err.message +
        '). se você abriu o arquivo direto do disco, rode um servidorzinho local. 🔌</p>';
    });
})();
