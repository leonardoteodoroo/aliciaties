# Alicia's Ties

Site editorial em `React 19 + TypeScript + Vite + Tailwind CSS` para a Alicia's Ties, com foco em catálogo visual, páginas institucionais e conversão principal via WhatsApp.

## Scripts

- `npm run dev`: ambiente local
- `npm run lint`: verificação de lint
- `npm run test`: testes com Vitest + cobertura
- `npm run build`: build de produção + geração de `dist/404.html`
- `npm run deploy`: publicação em GitHub Pages com `gh-pages`

## Estrutura

- `src/app`: router e layout base
- `src/components`: layout, seções e componentes de UI
- `src/content`: conteúdo centralizado da home, coleções, atelier, FAQ e páginas legais
- `src/config/site.ts`: configurações editáveis de WhatsApp, Instagram e navegação
- `src/assets/images`: assets locais internalizados do export do Stitch

## Deploy

O projeto está configurado para GitHub Pages no repositório `aliciaties`, com `base: '/aliciaties/'` em `vite.config.ts` e cópia automática de `index.html` para `404.html` após o build.
