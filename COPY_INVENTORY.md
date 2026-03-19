# Inventário de Copy - Alicia's Ties

## Regras do inventário

- Escopo: site inteiro, cobrindo as rotas `/`, `/colecoes`, `/colecoes/petit`, `/atelier`, `/faq`, `/termos` e `/privacidade`.
- Organização: página > componente, respeitando a ordem visual de leitura de cada rota.
- Inclusões: texto visível, `document.title`, meta description, `alt` efetivamente renderizados, `aria-label` relevantes e mensagens associadas a CTAs.
- Duplicatas: mantidas por ocorrência, mesmo quando a mesma copy aparece em mais de uma página.
- Critério de verdade: somente strings em uso no runtime atual.
- Exclusões: comentários de código, nomes de tipos/interfaces, class names, texto de testes e strings dormentes não consumidas por componentes.

## Página: Home (/)

### Meta

#### Acessibilidade / SEO

- `document.title`: `Alicia's Ties | Soft Elegance`
- `meta[name="description"]`: `Landing editorial da Alicia’s Ties com coleções, atelier e conversão principal via WhatsApp.`

### Header

#### UI visível

- `Alicia's Ties`
- `Coleções`
- `O Ateliê`
- `Depoimentos`
- `Dúvidas`
- `Falar com a consultora`

#### Acessibilidade / SEO

- `Abrir menu`

#### Mensagem associada ao CTA

- `Falar com a consultora`:
  `Olá! Gostaria de conhecer os acessórios exclusivos da Alicia's Ties.`

### Menu mobile

#### UI visível

- `Alicia's Ties`
- `Coleções`
- `O Ateliê`
- `Depoimentos`
- `Dúvidas`
- `Falar com a consultora`

#### Acessibilidade / SEO

- `Fechar menu`
- `Menu principal`
- `Fechar menu`

#### Mensagem associada ao CTA

- `Falar com a consultora`:
  `Olá! Gostaria de conhecer os acessórios exclusivos da Alicia's Ties.`

### Hero

#### UI visível

- Título por segmentos:
  - `Onde o `
  - `afeto`
  - `se transforma em acessórios`
  - `memoráveis`
  - `.`
- Descrição:
  `Uma experiência digital inspirada no silêncio elegante de um atelier: peças artesanais para bebês e noivas, conduzidas com consultoria próxima e acabamento impecável.`
- CTA primário: `Encomendar via WhatsApp`
- CTA secundário: `Ver coleções`
- Selo:
  - `Materiais`
  - `Seda, pérolas e renda francesa`
- Selo:
  - `Processo`
  - `100% artesanal e sob curadoria`
- Selo:
  - `Atendimento`
  - `Consultoria acolhedora via WhatsApp`
- Indicação de scroll: `Role para descobrir`

#### Acessibilidade / SEO

- `aria-label` do título: `Onde o afeto se transforma em acessórios memoráveis.`
- `aria-label` da lista de selos: `Selos do atelier`
- `alt` da imagem principal: `Editorial Hero`

#### Mensagem associada ao CTA

- `Encomendar via WhatsApp`:
  `Olá! Gostaria de conhecer os acessórios exclusivos da Alicia's Ties.`

### CollectionGrid

#### UI visível

- Eyebrow: `Curadoria`
- Título: `Nossas coleções`
- Descrição:
  `Linhas exclusivas para infância, celebrações e primeiras memórias. Cada coleção guarda uma delicadeza própria.`
- Card:
  - `Petit`
  - `Laços, flores e detalhes delicados pensados para os primeiros momentos de encanto.`
  - `Ver detalhes`
- Card:
  - `Bridal`
  - `Pérolas, rendas e composições sob medida para noivas que querem uma memória inesquecível.`
  - `Ver detalhes`
- Card:
  - `Recém-Nascido`
  - `Texturas suaves e acabamentos gentis para acolher os primeiros dias com afeto e sofisticação.`
  - `Ver detalhes`

#### Acessibilidade / SEO

- `aria-label` do card: `Petit`
- `alt` da imagem do card: `Criança usando acessório artesanal delicado da coleção Petit.`
- `aria-label` do card: `Bridal`
- `alt` da imagem do card: `Noiva com acessório floral e perolado da coleção Bridal.`
- `aria-label` do card: `Recém-Nascido`
- `alt` da imagem do card: `Acessórios delicados para recém-nascido sobre tecido neutro.`

#### Mensagem associada ao CTA

- Link do card `Bridal`:
  `Olá! Quero ver a coleção Bridal da Alicia's Ties para o meu momento especial.`
- Link do card `Recém-Nascido`:
  `Olá! Quero ver os acessórios para recém-nascido da Alicia's Ties.`

### Atelier summary

#### UI visível

- Eyebrow: `Atelier`
- Título: `A experiência do atelier`
- Descrição:
  `Cada peça nasce de um gesto lento e intencional. Entre fitas, pérolas e rendas, Alicia’s Ties transforma ocasiões especiais em lembranças táteis.`
- Texto de apoio:
  `Entre fitas, rendas francesas e pérolas escolhidas com intenção, o ateliê acompanha cada encomenda com ritmo calmo, curadoria sensível e atenção ao gesto artesanal.`
- CTA: `Conhecer o atelier`

### MemoryGrid

#### UI visível

- Eyebrow: `Memórias compartilhadas`
- Título: `Peças em histórias reais`
- Descrição:
  `Um recorte delicado de momentos que ganharam forma através de texturas, fita, brilho suave e intenção.`
- Placeholder:
  - `Placeholder para imagem futura`
  - `Ideal para close de tiara, laço, bordado, pérolas ou acabamento artesanal.`
  - `Proporção ideal: 1:1`
  - `Dimensão ideal: 1080 x 1080 px`
- Placeholder:
  - `Área reservada para detalhe`
  - `Use aqui uma foto de bastidor, caixa, mesa de criação ou mãos em processo.`
  - `Proporção ideal: 1:1`
  - `Dimensão ideal: 1080 x 1080 px`
- Placeholder:
  - `Espaço para retrato vertical`
  - `Perfeito para uma foto editorial de mãe e bebê, noiva ou detalhe em enquadramento vertical.`
  - `Proporção ideal: 2:3`
  - `Dimensão ideal: 1200 x 1800 px`

#### Acessibilidade / SEO

- `alt` da imagem: `Noiva usando acessório perolado e floral.`
- `alt` da imagem: `Bebê dormindo com laço suave em tom rosado.`
- `alt` da imagem: `Close de uma faixa delicada com renda clara.`
- `alt` da imagem: `Detalhes de casamento com fita de seda e luz quente.`
- `alt` da imagem: `Mãe segurando bebê com acessório floral delicado.`

### FAQ + CTA

#### UI visível

- Eyebrow: `Dúvidas`
- Título: `Tudo o que você precisa saber`
- Descrição:
  `O atendimento da Alicia's Ties é próximo, consultivo e desenhado para simplificar decisões delicadas.`
- Pergunta: `Qual é o prazo de entrega?`
- Resposta:
  `O prazo de produção artesanal varia entre 10 e 15 dias úteis, além do tempo de envio. Para datas especiais, recomendamos iniciar o atendimento com antecedência.`
- Pergunta: `É possível personalizar a peça?`
- Resposta:
  `Sim. Ajustamos cores, fitas, aplicações e outros detalhes conforme a proposta da peça e a ocasião. A consultora orienta o processo pelo WhatsApp.`
- Pergunta: `Como escolher o tamanho certo?`
- Resposta:
  `Para bebês e crianças usamos referências por faixa etária. Para noivas e encomendas sob medida, enviamos um guia simples para orientar a escolha.`
- Pergunta: `Como devo cuidar do acessório?`
- Resposta:
  `Guarde sua peça longe da umidade e da luz direta. Evite perfumes sobre tecidos e pérolas e faça a limpeza com pano macio e seco.`
- CTA title: `Vamos criar algo único?`
- CTA copy:
  `Inicie seu atendimento exclusivo e transforme sua ideia em uma peça inesquecível.`
- CTA button: `Encomendar via WhatsApp`

#### Mensagem associada ao CTA

- `Encomendar via WhatsApp`:
  `Olá! Gostaria de conhecer os acessórios exclusivos da Alicia's Ties.`

### Footer

#### UI visível

- `Alicia's Ties`
- `Catálogo editorial e consultoria acolhedora para peças feitas à mão, pensadas para bebês, noivas e histórias especiais.`
- `Instagram`
- `Termos`
- `Privacidade`
- `Atendimento personalizado via WhatsApp com placeholders fáceis de editar na configuração da V1.`
- `© 2026 Alicia's Ties`

## Página: Coleções (/colecoes)

### Meta

#### Acessibilidade / SEO

- `document.title`: `Coleções | Alicia's Ties`
- `meta[name="description"]`: `Galeria editorial das coleções Petit, Bridal e Recém-Nascido da Alicia’s Ties.`

### Header

#### UI visível

- `Alicia's Ties`
- `Coleções`
- `O Ateliê`
- `Depoimentos`
- `Dúvidas`
- `Falar com a consultora`

#### Acessibilidade / SEO

- `Abrir menu`

#### Mensagem associada ao CTA

- `Falar com a consultora`:
  `Olá! Gostaria de conhecer os acessórios exclusivos da Alicia's Ties.`

### Menu mobile

#### UI visível

- `Alicia's Ties`
- `Coleções`
- `O Ateliê`
- `Depoimentos`
- `Dúvidas`
- `Falar com a consultora`

#### Acessibilidade / SEO

- `Fechar menu`
- `Menu principal`
- `Fechar menu`

#### Mensagem associada ao CTA

- `Falar com a consultora`:
  `Olá! Gostaria de conhecer os acessórios exclusivos da Alicia's Ties.`

### CollectionGrid

#### UI visível

- Eyebrow: `Curadoria`
- Título: `Nossas coleções`
- Descrição:
  `Descubra as linhas exclusivas da Alicia’s Ties, construídas para momentos delicados, celebrações elegantes e encomendas guiadas por consultoria.`
- Card:
  - `Petit`
  - `Laços, flores e detalhes delicados pensados para os primeiros momentos de encanto.`
  - `Ver detalhes`
- Card:
  - `Bridal`
  - `Pérolas, rendas e composições sob medida para noivas que querem uma memória inesquecível.`
  - `Ver detalhes`
- Card:
  - `Recém-Nascido`
  - `Texturas suaves e acabamentos gentis para acolher os primeiros dias com afeto e sofisticação.`
  - `Ver detalhes`

#### Acessibilidade / SEO

- `aria-label` do card: `Petit`
- `alt` da imagem do card: `Criança usando acessório artesanal delicado da coleção Petit.`
- `aria-label` do card: `Bridal`
- `alt` da imagem do card: `Noiva com acessório floral e perolado da coleção Bridal.`
- `aria-label` do card: `Recém-Nascido`
- `alt` da imagem do card: `Acessórios delicados para recém-nascido sobre tecido neutro.`

#### Mensagem associada ao CTA

- Link do card `Bridal`:
  `Olá! Quero ver a coleção Bridal da Alicia's Ties para o meu momento especial.`
- Link do card `Recém-Nascido`:
  `Olá! Quero ver os acessórios para recém-nascido da Alicia's Ties.`

### Bloco consultoria

#### UI visível

- Eyebrow: `Consultoria`
- Título: `Precisa de ajuda para escolher?`
- Descrição:
  `A consultora orienta materiais, ajustes, personalização e o melhor caminho para cada ocasião.`
- CTA: `Falar com nossa consultora`

#### Mensagem associada ao CTA

- `Falar com nossa consultora`:
  `Olá! Quero conversar sobre uma peça personalizada da Alicia's Ties.`

### Footer

#### UI visível

- `Alicia's Ties`
- `Catálogo editorial e consultoria acolhedora para peças feitas à mão, pensadas para bebês, noivas e histórias especiais.`
- `Instagram`
- `Termos`
- `Privacidade`
- `Atendimento personalizado via WhatsApp com placeholders fáceis de editar na configuração da V1.`
- `© 2026 Alicia's Ties`

## Página: Coleção Petit (/colecoes/petit)

### Meta

#### Acessibilidade / SEO

- `document.title`: `Coleção Petit | Alicia's Ties`
- `meta[name="description"]`: `Catálogo consultivo da coleção Petit com produtos, preços de referência e CTA para WhatsApp.`

### Header

#### UI visível

- `Alicia's Ties`
- `Coleções`
- `O Ateliê`
- `Depoimentos`
- `Dúvidas`
- `Falar com a consultora`

#### Acessibilidade / SEO

- `Abrir menu`

#### Mensagem associada ao CTA

- `Falar com a consultora`:
  `Olá! Gostaria de conhecer os acessórios exclusivos da Alicia's Ties.`

### Menu mobile

#### UI visível

- `Alicia's Ties`
- `Coleções`
- `O Ateliê`
- `Depoimentos`
- `Dúvidas`
- `Falar com a consultora`

#### Acessibilidade / SEO

- `Fechar menu`
- `Menu principal`
- `Fechar menu`

#### Mensagem associada ao CTA

- `Falar com a consultora`:
  `Olá! Gostaria de conhecer os acessórios exclusivos da Alicia's Ties.`

### Intro

#### UI visível

- Eyebrow: `Excelência artesanal`
- Título: `Coleção Petit`
- Descrição:
  `A delicadeza em cada detalhe. Seda pura, rendas francesas e pequenos gestos costurados à mão para ocasiões que merecem ser guardadas para sempre.`
- CTA: `Falar com a consultora`

#### Mensagem associada ao CTA

- `Falar com a consultora`:
  `Olá! Gostaria de conhecer os acessórios exclusivos da Alicia's Ties.`

### Grade de produtos

#### UI visível

- Produto:
  - `Laço de Seda Rosa`
  - `Seda italiana em tom blush com acabamento invisível feito à mão.`
  - `R$ 185`
  - `Consultar`
- Produto:
  - `Renda Herança`
  - `Renda leve com estrutura delicada para composições autorais e batizados especiais.`
  - `R$ 220`
  - `Consultar`
- Produto:
  - `Fita de Pérolas`
  - `Ritmo suave de pérolas e fita com caimento leve para produções editoriais e celebrações.`
  - `R$ 198`
  - `Consultar`
- Produto:
  - `Laço Petit Champagne`
  - `Mini laço em tafetá de seda com brilho discreto e presença elegante.`
  - `R$ 140`
  - `Consultar`
- Produto:
  - `Flor de Organza`
  - `Pétalas moldadas individualmente com toque suave e acabamento artesanal.`
  - `R$ 210`
  - `Consultar`

#### Acessibilidade / SEO

- `alt` da imagem do produto: `Laço de seda rosa sobre fundo claro.`
- `alt` da imagem do produto: `Acessório delicado em renda clara da coleção Petit.`
- `alt` da imagem do produto: `Fita delicada com acabamento perolado da coleção Petit.`
- `alt` da imagem do produto: `Laço pequeno em tom champagne da coleção Petit.`
- `alt` da imagem do produto: `Flor de organza delicada da coleção Petit.`

#### Mensagem associada ao CTA

- `Consultar` para `Laço de Seda Rosa`:
  `Olá! Gostaria de consultar o Laço de Seda Rosa da coleção Petit.`
- `Consultar` para `Renda Herança`:
  `Olá! Gostaria de consultar o modelo Renda Herança da coleção Petit.`
- `Consultar` para `Fita de Pérolas`:
  `Olá! Gostaria de consultar a Fita de Pérolas da coleção Petit.`
- `Consultar` para `Laço Petit Champagne`:
  `Olá! Gostaria de consultar o Laço Petit Champagne da coleção Petit.`
- `Consultar` para `Flor de Organza`:
  `Olá! Gostaria de consultar a Flor de Organza da coleção Petit.`

### Card atelier exclusivo

#### UI visível

- Eyebrow: `Sob medida`
- Título: `Atelier exclusivo`
- Descrição:
  `Desenvolvemos peças autorais para batizados, aniversários e momentos que pedem delicadeza única.`
- CTA: `Agendar consultoria`

#### Mensagem associada ao CTA

- `Agendar consultoria`:
  `Olá! Gostaria de agendar uma consultoria para criar uma peça exclusiva da coleção Petit.`

### CTA final

#### UI visível

- Título: `Quer ajustar cor, tamanho ou acabamento?`
- Descrição:
  `Nossa equipe atende cada pedido como uma conversa íntima de atelier: com escuta, referência visual e direcionamento cuidadoso.`
- CTA: `Falar com a consultora`

#### Mensagem associada ao CTA

- `Falar com a consultora`:
  `Olá! Gostaria de conhecer os acessórios exclusivos da Alicia's Ties.`

### Footer

#### UI visível

- `Alicia's Ties`
- `Catálogo editorial e consultoria acolhedora para peças feitas à mão, pensadas para bebês, noivas e histórias especiais.`
- `Instagram`
- `Termos`
- `Privacidade`
- `Atendimento personalizado via WhatsApp com placeholders fáceis de editar na configuração da V1.`
- `© 2026 Alicia's Ties`

## Página: Atelier (/atelier)

### Meta

#### Acessibilidade / SEO

- `document.title`: `O Atelier | Alicia's Ties`
- `meta[name="description"]`: `Página institucional da experiência do atelier, materiais e memórias da Alicia’s Ties.`

### Header

#### UI visível

- `Alicia's Ties`
- `Coleções`
- `O Ateliê`
- `Depoimentos`
- `Dúvidas`
- `Falar com a consultora`

#### Acessibilidade / SEO

- `Abrir menu`

#### Mensagem associada ao CTA

- `Falar com a consultora`:
  `Olá! Gostaria de conhecer os acessórios exclusivos da Alicia's Ties.`

### Menu mobile

#### UI visível

- `Alicia's Ties`
- `Coleções`
- `O Ateliê`
- `Depoimentos`
- `Dúvidas`
- `Falar com a consultora`

#### Acessibilidade / SEO

- `Fechar menu`
- `Menu principal`
- `Fechar menu`

#### Mensagem associada ao CTA

- `Falar com a consultora`:
  `Olá! Gostaria de conhecer os acessórios exclusivos da Alicia's Ties.`

### Intro

#### UI visível

- Eyebrow: `Atelier`
- Título: `A experiência do atelier`
- Descrição:
  `Onde o afeto se transforma em acessórios memoráveis através da excelência. Cada detalhe é um sussurro de exclusividade.`

### Story block 01

#### UI visível

- Eyebrow: `01 — Dedicação`
- Título: `Artesanal`
- Descrição:
  `Cada ponto é conduzido à mão, com a precisão que só o tempo e o cuidado permitem. O resultado é uma peça que não parece produzida: parece escolhida para uma história específica.`

#### Acessibilidade / SEO

- `alt` da imagem: `Mãos costurando renda clara em um ambiente de atelier.`

### Story block 02

#### UI visível

- Eyebrow: `02 — Pureza`
- Título: `Materiais`
- Descrição:
  `Sedas, pérolas de água doce e rendas francesas são selecionadas por textura, caimento e delicadeza visual. A matéria-prima é parte do encanto, nunca mero detalhe.`

#### Acessibilidade / SEO

- `alt` da imagem: `Carretéis de fita e pérolas espalhadas sobre uma mesa clara.`

### Depoimento

#### UI visível

- `“A peça mais linda que minha filha já usou. Senti o cuidado em cada milímetro do tecido quando abri a caixa.”`
- `Mariana V., mãe da Sofia`

### MemoryGrid

#### UI visível

- Eyebrow: `Memórias compartilhadas`
- Título: `Peças em histórias reais`
- Descrição:
  `Um recorte delicado de momentos que ganharam forma através de texturas, fita, brilho suave e intenção.`
- Placeholder:
  - `Placeholder para imagem futura`
  - `Ideal para close de tiara, laço, bordado, pérolas ou acabamento artesanal.`
  - `Proporção ideal: 1:1`
  - `Dimensão ideal: 1080 x 1080 px`
- Placeholder:
  - `Área reservada para detalhe`
  - `Use aqui uma foto de bastidor, caixa, mesa de criação ou mãos em processo.`
  - `Proporção ideal: 1:1`
  - `Dimensão ideal: 1080 x 1080 px`
- Placeholder:
  - `Espaço para retrato vertical`
  - `Perfeito para uma foto editorial de mãe e bebê, noiva ou detalhe em enquadramento vertical.`
  - `Proporção ideal: 2:3`
  - `Dimensão ideal: 1200 x 1800 px`

#### Acessibilidade / SEO

- `alt` da imagem: `Noiva usando acessório perolado e floral.`
- `alt` da imagem: `Bebê dormindo com laço suave em tom rosado.`
- `alt` da imagem: `Close de uma faixa delicada com renda clara.`
- `alt` da imagem: `Detalhes de casamento com fita de seda e luz quente.`
- `alt` da imagem: `Mãe segurando bebê com acessório floral delicado.`

### CTA final

#### UI visível

- Título: `Continue a conversa fora do site`
- Descrição:
  `Veja mais referências no Instagram ou inicie sua encomenda diretamente com a consultora da Alicia's Ties.`
- CTA: `Ver mais no Instagram`
- CTA: `Falar com a consultora`

#### Mensagem associada ao CTA

- `Falar com a consultora`:
  `Olá! Gostaria de conhecer os acessórios exclusivos da Alicia's Ties.`

### Footer

#### UI visível

- `Alicia's Ties`
- `Catálogo editorial e consultoria acolhedora para peças feitas à mão, pensadas para bebês, noivas e histórias especiais.`
- `Instagram`
- `Termos`
- `Privacidade`
- `Atendimento personalizado via WhatsApp com placeholders fáceis de editar na configuração da V1.`
- `© 2026 Alicia's Ties`

## Página: FAQ (/faq)

### Meta

#### Acessibilidade / SEO

- `document.title`: `Dúvidas Frequentes | Alicia's Ties`
- `meta[name="description"]`: `Dúvidas frequentes sobre prazos, personalização, medidas e cuidado com os acessórios da Alicia’s Ties.`

### Header

#### UI visível

- `Alicia's Ties`
- `Coleções`
- `O Ateliê`
- `Depoimentos`
- `Dúvidas`
- `Falar com a consultora`

#### Acessibilidade / SEO

- `Abrir menu`

#### Mensagem associada ao CTA

- `Falar com a consultora`:
  `Olá! Gostaria de conhecer os acessórios exclusivos da Alicia's Ties.`

### Menu mobile

#### UI visível

- `Alicia's Ties`
- `Coleções`
- `O Ateliê`
- `Depoimentos`
- `Dúvidas`
- `Falar com a consultora`

#### Acessibilidade / SEO

- `Fechar menu`
- `Menu principal`
- `Fechar menu`

#### Mensagem associada ao CTA

- `Falar com a consultora`:
  `Olá! Gostaria de conhecer os acessórios exclusivos da Alicia's Ties.`

### FAQ + CTA

#### UI visível

- Eyebrow: `Dúvidas`
- Título: `Dúvidas Frequentes`
- Descrição:
  `Reunimos respostas para as perguntas mais comuns antes de iniciar o atendimento personalizado.`
- Pergunta: `Qual é o prazo de entrega?`
- Resposta:
  `O prazo de produção artesanal varia entre 10 e 15 dias úteis, além do tempo de envio. Para datas especiais, recomendamos iniciar o atendimento com antecedência.`
- Pergunta: `É possível personalizar a peça?`
- Resposta:
  `Sim. Ajustamos cores, fitas, aplicações e outros detalhes conforme a proposta da peça e a ocasião. A consultora orienta o processo pelo WhatsApp.`
- Pergunta: `Como escolher o tamanho certo?`
- Resposta:
  `Para bebês e crianças usamos referências por faixa etária. Para noivas e encomendas sob medida, enviamos um guia simples para orientar a escolha.`
- Pergunta: `Como devo cuidar do acessório?`
- Resposta:
  `Guarde sua peça longe da umidade e da luz direta. Evite perfumes sobre tecidos e pérolas e faça a limpeza com pano macio e seco.`
- CTA title: `Vamos criar algo único?`
- CTA copy:
  `Se preferir, a consultora pode orientar seu pedido diretamente no WhatsApp.`
- CTA button: `Encomendar via WhatsApp`

#### Mensagem associada ao CTA

- `Encomendar via WhatsApp`:
  `Olá! Gostaria de conhecer os acessórios exclusivos da Alicia's Ties.`

### Footer

#### UI visível

- `Alicia's Ties`
- `Catálogo editorial e consultoria acolhedora para peças feitas à mão, pensadas para bebês, noivas e histórias especiais.`
- `Instagram`
- `Termos`
- `Privacidade`
- `Atendimento personalizado via WhatsApp com placeholders fáceis de editar na configuração da V1.`
- `© 2026 Alicia's Ties`

## Página: Termos (/termos)

### Meta

#### Acessibilidade / SEO

- `document.title`: `Termos de Uso | Alicia's Ties`
- `meta[name="description"]`: `Página provisória de termos de uso da Alicia’s Ties.`

### Header

#### UI visível

- `Alicia's Ties`
- `Coleções`
- `O Ateliê`
- `Depoimentos`
- `Dúvidas`
- `Falar com a consultora`

#### Acessibilidade / SEO

- `Abrir menu`

#### Mensagem associada ao CTA

- `Falar com a consultora`:
  `Olá! Gostaria de conhecer os acessórios exclusivos da Alicia's Ties.`

### Menu mobile

#### UI visível

- `Alicia's Ties`
- `Coleções`
- `O Ateliê`
- `Depoimentos`
- `Dúvidas`
- `Falar com a consultora`

#### Acessibilidade / SEO

- `Fechar menu`
- `Menu principal`
- `Fechar menu`

#### Mensagem associada ao CTA

- `Falar com a consultora`:
  `Olá! Gostaria de conhecer os acessórios exclusivos da Alicia's Ties.`

### Documento legal

#### UI visível

- Eyebrow: `Documento`
- Título: `Termos de Uso`
- Prefixo de atualização: `Atualizado em`
- Data: `19 de março de 2026`
- Seção: `Conteúdo provisório`
- Parágrafo:
  `Este conteúdo provisório organiza as informações mínimas da V1 enquanto o texto jurídico definitivo é preparado.`
- Parágrafo:
  `Ao navegar pelo site, você entende que o atendimento comercial e a formalização final da encomenda acontecem diretamente com a consultora da Alicia’s Ties.`
- Seção: `Atendimento e encomendas`
- Parágrafo:
  `Os produtos apresentados funcionam como catálogo editorial e referência estética.`
- Parágrafo:
  `Prazos, ajustes, disponibilidade de materiais e personalizações são confirmados durante a conversa no WhatsApp.`

### Footer

#### UI visível

- `Alicia's Ties`
- `Catálogo editorial e consultoria acolhedora para peças feitas à mão, pensadas para bebês, noivas e histórias especiais.`
- `Instagram`
- `Termos`
- `Privacidade`
- `Atendimento personalizado via WhatsApp com placeholders fáceis de editar na configuração da V1.`
- `© 2026 Alicia's Ties`

## Página: Privacidade (/privacidade)

### Meta

#### Acessibilidade / SEO

- `document.title`: `Privacidade | Alicia's Ties`
- `meta[name="description"]`: `Página provisória de política de privacidade da Alicia’s Ties.`

### Header

#### UI visível

- `Alicia's Ties`
- `Coleções`
- `O Ateliê`
- `Depoimentos`
- `Dúvidas`
- `Falar com a consultora`

#### Acessibilidade / SEO

- `Abrir menu`

#### Mensagem associada ao CTA

- `Falar com a consultora`:
  `Olá! Gostaria de conhecer os acessórios exclusivos da Alicia's Ties.`

### Menu mobile

#### UI visível

- `Alicia's Ties`
- `Coleções`
- `O Ateliê`
- `Depoimentos`
- `Dúvidas`
- `Falar com a consultora`

#### Acessibilidade / SEO

- `Fechar menu`
- `Menu principal`
- `Fechar menu`

#### Mensagem associada ao CTA

- `Falar com a consultora`:
  `Olá! Gostaria de conhecer os acessórios exclusivos da Alicia's Ties.`

### Documento legal

#### UI visível

- Eyebrow: `Documento`
- Título: `Política de Privacidade`
- Prefixo de atualização: `Atualizado em`
- Data: `19 de março de 2026`
- Seção: `Conteúdo provisório`
- Parágrafo:
  `Esta política provisória descreve como os dados informados voluntariamente na conversa comercial podem ser utilizados para viabilizar o atendimento.`
- Parágrafo:
  `Até a publicação do texto definitivo, Alicia’s Ties limita o tratamento ao necessário para orçamento, personalização e acompanhamento da encomenda.`
- Seção: `Contato e continuidade`
- Parágrafo:
  `As conversas iniciadas pelo WhatsApp podem ser usadas para responder dúvidas, apresentar opções e concluir o atendimento solicitado.`
- Parágrafo:
  `Para ajustes futuros desta política, o texto será atualizado nesta página e a data de revisão será alterada.`

### Footer

#### UI visível

- `Alicia's Ties`
- `Catálogo editorial e consultoria acolhedora para peças feitas à mão, pensadas para bebês, noivas e histórias especiais.`
- `Instagram`
- `Termos`
- `Privacidade`
- `Atendimento personalizado via WhatsApp com placeholders fáceis de editar na configuração da V1.`
- `© 2026 Alicia's Ties`

## Observações de cobertura

- Este inventário contempla apenas strings em uso no runtime atual.
- Campos definidos mas não consumidos por componentes não foram incluídos.
- Exemplo excluído: `homeHero.imageAlt` em `src/content/home.ts`, já que a hero renderiza `Editorial Hero` diretamente no componente.
