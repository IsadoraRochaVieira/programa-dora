# 👾 ProgramaDora

> **programa** + **Dora** = programadora. O blog da Isadora sobre IA, marketing online, automações e ética.

Site estático (HTML/CSS/JS puro, sem build) com linguagem editorial contemporânea: tipografia cinética, formas reativas, cards assimétricos e microinterações acessíveis.

## Como funciona

- **Posts** são arquivos markdown em [`posts/`](posts/), indexados por [`posts/index.json`](posts/index.json).
- **Automação**: o GitHub Actions executa `scripts/publish_editorial.py` todo dia às **6h** e às **20h** (horário de Brasília). Uma chamada pesquisa e escreve; uma segunda chamada independente refaz a busca e confere cada afirmação. Se qualquer validação falhar, nada é publicado.
- **Publicação**: GitHub Pages, direto da branch `main`.

## Ativar as publicações automáticas

No repositório do GitHub, crie o secret `OPENAI_API_KEY` em **Settings → Secrets and variables → Actions**. Opcionalmente, crie as variáveis `SITE_URL` (URL pública sem barra final) e `OPENAI_MODEL` (o padrão é `gpt-5.6-terra`). Em **Settings → Pages**, selecione **GitHub Actions** como origem. Depois, abra **Actions → Publicação editorial automática → Run workflow** para testar uma edição manual. O agendamento só começa quando o workflow estiver na branch padrão do GitHub.

## Rodar localmente

Qualquer servidor estático serve:

```
node scripts/dev_server.js
```

Abra http://127.0.0.1:4311.

## Mascote

A esfera colorida no canto chama **Dorinha**. Clique nela. Aperte ↑↑↓↓←→←→BA também.
