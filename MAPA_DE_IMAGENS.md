# Mapa de Imagens do Projeto

## Escopo
- Auditoria feita a partir do runtime atual em `src`, cruzando páginas, componentes, conteúdo e assets em `src/assets/images`.
- As três imagens marcadas por você como permanentes ficaram fora da lista principal de substituição:
  - `src/assets/images/memory-bride-vine.webp`
  - `src/assets/images/memory-baby-bow.webp`
  - `src/assets/images/hero-main.webp`
- O relatório inclui:
  - locais que hoje renderizam imagem
  - locais já preparados para imagem, mas ainda sem asset final
  - assets existentes que hoje não entram no runtime

## Resumo
- Ocorrências ativas com imagem, passíveis de troca futura: `19`
- Assets únicos em uso nessas ocorrências: `13`
- Ocorrências sem imagem, mas já previstas pela UI: `6`
- Formatos faltantes recorrentes: `3`
- Assets existentes fora do runtime atual: `3`

## Imagens preservadas

| Local | Asset atual | Dimensão do arquivo | Proporção do arquivo | Proporção de renderização | Observação |
| --- | --- | --- | --- | --- | --- |
| Home hero | `src/assets/images/hero-main.webp` | `1536 x 2752 px` | `24:43` | mobile `9:16`; desktop livre no split hero | Mantida por sua orientação. É importada diretamente em `src/components/sections/HomeEditorialHero.tsx`. |
| Home `/` > MemoryGrid | `src/assets/images/memory-bride-vine.webp` | `512 x 512 px` | `1:1` | `3:4` | Mantida por sua orientação. |
| Home `/` e Atelier `/atelier` > MemoryGrid | `src/assets/images/memory-baby-bow.webp` | `512 x 512 px` | `1:1` | `1:1` | Mantida por sua orientação. Também aparece no grid do atelier. |
| Atelier `/atelier` > MemoryGrid | `src/assets/images/memory-bride-vine.webp` | `512 x 512 px` | `1:1` | `3:4` | Mesmo asset da Home, mantido. |

## Slots com imagem atual

### Home (`/`)

| Slot | Componente | Asset atual | Dimensão do arquivo | Proporção do arquivo | Proporção de renderização | Onde ajustar depois |
| --- | --- | --- | --- | --- | --- | --- |
| CollectionGrid > card Petit | `CollectionGrid` > `CollectionCard` | `src/assets/images/collection-petit.webp` | `512 x 512 px` | `1:1` | sem proporção fixa; imagem full-bleed com `object-cover` e `min-h: 460px` | `src/content/collections.ts` |
| CollectionGrid > card Bridal | `CollectionGrid` > `CollectionCard` | `src/assets/images/collection-bridal.webp` | `512 x 512 px` | `1:1` | sem proporção fixa; imagem full-bleed com `object-cover` e `min-h: 460px` | `src/content/collections.ts` |
| CollectionGrid > card Recém-Nascido | `CollectionGrid` > `CollectionCard` | `src/assets/images/collection-newborn.webp` | `512 x 512 px` | `1:1` | sem proporção fixa; imagem full-bleed com `object-cover` e `min-h: 460px` | `src/content/collections.ts` |
| MemoryGrid > `memory-lace-headband` | `MemoryGrid` | `src/assets/images/memory-lace-headband.webp` | `512 x 512 px` | `1:1` | `1:1` | `src/content/atelier.ts` |
| MemoryGrid > `memory-wedding-details` | `MemoryGrid` | `src/assets/images/memory-wedding-details.webp` | `512 x 512 px` | `1:1` | `3:4` | `src/content/atelier.ts` |
| MemoryGrid > `memory-mother-baby` | `MemoryGrid` | `src/assets/images/memory-mother-baby.webp` | `512 x 512 px` | `1:1` | `16:9` | `src/content/atelier.ts` |

### Coleções (`/colecoes`)

| Slot | Componente | Asset atual | Dimensão do arquivo | Proporção do arquivo | Proporção de renderização | Observação |
| --- | --- | --- | --- | --- | --- | --- |
| CollectionGrid > card Petit | `CollectionGrid` > `CollectionCard` | `src/assets/images/collection-petit.webp` | `512 x 512 px` | `1:1` | sem proporção fixa; imagem full-bleed com `object-cover` e `min-h: 460px` | Reusa o mesmo asset da Home. |
| CollectionGrid > card Bridal | `CollectionGrid` > `CollectionCard` | `src/assets/images/collection-bridal.webp` | `512 x 512 px` | `1:1` | sem proporção fixa; imagem full-bleed com `object-cover` e `min-h: 460px` | Reusa o mesmo asset da Home. |
| CollectionGrid > card Recém-Nascido | `CollectionGrid` > `CollectionCard` | `src/assets/images/collection-newborn.webp` | `512 x 512 px` | `1:1` | sem proporção fixa; imagem full-bleed com `object-cover` e `min-h: 460px` | Reusa o mesmo asset da Home. |

### Coleção Petit (`/colecoes/petit`)

| Slot | Componente | Asset atual | Dimensão do arquivo | Proporção do arquivo | Proporção de renderização | Onde ajustar depois |
| --- | --- | --- | --- | --- | --- | --- |
| Produto > Laço de Seda Rosa | grade de produtos | `src/assets/images/petit-silk-rose.webp` | `512 x 512 px` | `1:1` | `4:5` | `src/content/collections.ts` |
| Produto > Renda Herança | grade de produtos | `src/assets/images/petit-lace-heirloom.webp` | `512 x 512 px` | `1:1` | `4:5` | `src/content/collections.ts` |
| Produto > Fita de Pérolas | grade de produtos | `src/assets/images/petit-pearl-ribbon.webp` | `512 x 512 px` | `1:1` | `4:5` | `src/content/collections.ts` |
| Produto > Laço Petit Champagne | grade de produtos | `src/assets/images/petit-champagne.webp` | `512 x 512 px` | `1:1` | `4:5` | `src/content/collections.ts` |
| Produto > Flor de Organza | grade de produtos | `src/assets/images/petit-organza-flower.webp` | `512 x 512 px` | `1:1` | `4:5` | `src/content/collections.ts` |

### Atelier (`/atelier`)

| Slot | Componente | Asset atual | Dimensão do arquivo | Proporção do arquivo | Proporção de renderização | Onde ajustar depois |
| --- | --- | --- | --- | --- | --- | --- |
| Story block 01 | `AtelierStoryBlock` | `src/assets/images/atelier-artisanal.webp` | `512 x 512 px` | `1:1` | `4:5` | `src/content/atelier.ts` |
| Story block 02 | `AtelierStoryBlock` | `src/assets/images/atelier-materials.webp` | `512 x 512 px` | `1:1` | `4:5` | `src/content/atelier.ts` |
| MemoryGrid > `memory-lace-headband` | `MemoryGrid` | `src/assets/images/memory-lace-headband.webp` | `512 x 512 px` | `1:1` | `1:1` | `src/content/atelier.ts` |
| MemoryGrid > `memory-wedding-details` | `MemoryGrid` | `src/assets/images/memory-wedding-details.webp` | `512 x 512 px` | `1:1` | `3:4` | `src/content/atelier.ts` |
| MemoryGrid > `memory-mother-baby` | `MemoryGrid` | `src/assets/images/memory-mother-baby.webp` | `512 x 512 px` | `1:1` | `16:9` | `src/content/atelier.ts` |

## Onde falta imagem hoje

### Home (`/`) > MemoryGrid

| Slot | Estado atual | Dimensão sugerida no conteúdo | Proporção sugerida no conteúdo | Proporção real do slot | Onde está definido | Observação |
| --- | --- | --- | --- | --- | --- | --- |
| `placeholder-detail-square` | placeholder textual | `1080 x 1080 px` | `1:1` | `1:1` | `src/content/atelier.ts` em `homeMemoryCards` | Slot pronto para receber imagem sem ajuste estrutural. |
| `placeholder-process-square` | placeholder textual | `1080 x 1080 px` | `1:1` | `1:1` | `src/content/atelier.ts` em `homeMemoryCards` | Slot pronto para receber imagem sem ajuste estrutural. |
| `placeholder-editorial-portrait` | placeholder textual | `1200 x 1800 px` | `2:3` | `3:4` | `src/content/atelier.ts` em `homeMemoryCards` | Há desalinhamento: o conteúdo sugere `2:3`, mas o componente renderiza `3:4`. Vale decidir isso antes de produzir a foto final. |

### Atelier (`/atelier`) > MemoryGrid

| Slot | Estado atual | Dimensão sugerida no conteúdo | Proporção sugerida no conteúdo | Proporção real do slot | Onde está definido | Observação |
| --- | --- | --- | --- | --- | --- | --- |
| `placeholder-detail-square` | placeholder textual | `1080 x 1080 px` | `1:1` | `1:1` | `src/content/atelier.ts` em `atelierMemoryCards` | Mesmo formato da Home, com copy diferente. |
| `placeholder-process-square` | placeholder textual | `1080 x 1080 px` | `1:1` | `1:1` | `src/content/atelier.ts` em `atelierMemoryCards` | Mesmo formato da Home, com copy diferente. |
| `placeholder-editorial-portrait` | placeholder textual | `1200 x 1800 px` | `2:3` | `3:4` | `src/content/atelier.ts` em `atelierMemoryCards` | Mesmo desalinhamento da Home entre conteúdo sugerido e renderização real do slot. |

## Assets existentes, mas fora do runtime atual

| Asset | Dimensão do arquivo | Proporção do arquivo | Estado atual | Observação |
| --- | --- | --- | --- | --- |
| `src/assets/images/hero-bride-baby.webp` | `1080 x 1350 px` | `4:5` | dormente | Está importada em `src/content/home.ts` como `homeHero.image`, mas `HomeEditorialHero.tsx` ignora esse campo e usa `hero-main.webp` hardcoded. |
| `src/assets/images/hero-main-old.webp` | `1080 x 1350 px` | `4:5` | não usado | Existe no diretório de assets, mas não aparece em imports do runtime. |
| `src/assets/images/hero-mobile.webp` | `1080 x 1350 px` | `4:5` | não usado | Existe no diretório de assets, mas não aparece em imports do runtime. |

## Observações técnicas
- `CollectionCard` não usa proporção fixa. Ele usa imagem de fundo com `object-cover`, altura mínima de `460px` e largura variável pelo grid. Isso significa que crops futuros serão agressivos, especialmente nos cards mais largos.
- A grade de produtos Petit e os story blocks do atelier renderizam em `4:5`, mas hoje usam arquivos `1:1`. Se você produzir imagens novas especificamente para esses módulos, vale gerar já em `4:5`.
- O `MemoryGrid` mistura slots `1:1`, `3:4` e `16:9`, mas as imagens atuais são todas `1:1`. Os slots retrato e paisagem hoje dependem de crop.
- Se você quiser substituir imagens por seção, os pontos de troca ficam concentrados em dois arquivos:
  - `src/content/collections.ts`
  - `src/content/atelier.ts`
- A hero é exceção: a imagem renderizada vem direto de `src/components/sections/HomeEditorialHero.tsx`.
