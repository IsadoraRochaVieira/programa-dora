# 👾 ProgramaDora

> **programa** + **Dora** = programadora. O blog da Isadora sobre IA, marketing online, automações e ética.

Site estático (HTML/CSS/JS puro, sem build) com design maximalista anacrônico: terminal anos 80, vaporwave, neobrutalism e Geocities — tudo ao mesmo tempo, de propósito.

## Como funciona

- **Posts** são arquivos markdown em [`posts/`](posts/), indexados por [`posts/index.json`](posts/index.json).
- **Automação**: agentes de IA pesquisam novidades e publicam posts todo dia às **6h** e às **20h**, com **dupla verificação** (uma IA escreve, outra confere fato por fato). O protocolo completo está em [`CLAUDE.md`](CLAUDE.md).
- **Publicação**: GitHub Pages, direto da branch `main`.

## Rodar localmente

Qualquer servidor estático serve:

```
python -m http.server 4173
# ou
npx serve .
```

Abra http://localhost:4173.

## Mascote

A robozinha que anda no rodapé chama **Dorinha**. Clique nela. Aperte ↑↑↓↓←→←→BA também.
