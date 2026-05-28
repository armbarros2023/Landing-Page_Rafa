# Documentacao das melhorias - Igreja Acolhedora

Data da revisao: 28/05/2026

Site publicado: https://www.igrejaacolhedora.com.br
Repositorio: https://github.com/armbarros2023/Landing-Page_Rafa.git

## Resumo

Foi executado um ciclo completo de melhoria da landing page da Imersao Igreja Acolhedora com foco em desempenho, SEO, acessibilidade, boas praticas, estabilidade visual e publicacao em producao.

O trabalho partiu de apontamentos do PageSpeed Insights, principalmente entrega de imagens, cadeia de rede, reflow forcado, uso de API/CSS obsoleto e ajustes visuais nos logos.

## Principais entregas

- Otimizacao das imagens principais da landing page.
- Conversao e geracao de imagens responsivas em WebP.
- Ajuste de `srcset`, `sizes`, `width`, `height`, `loading`, `decoding` e `fetchpriority`.
- Melhoria do carregamento da imagem principal para favorecer LCP.
- Remocao de comportamento JavaScript que contribuia para reflow forcado.
- Simplificacao das animacoes de revelacao para evitar custo desnecessario no carregamento.
- Minificacao/compactacao do CSS inline da pagina.
- Ajustes de SEO tecnico com `robots.txt`, `sitemap.xml`, canonical e favicon.
- Correcao dos logos no rodape para evitar distorcao.
- Adicao do logo Arbtech no rodape.
- Troca do logo inicial pelo logo Equipe Rafael Barros com fundo transparente.
- Otimizacao do novo logo para WebP transparente, reduzindo o peso para cerca de 20 KB.
- Correcao do aviso de API obsoleta causado por `overflow: visible` em elemento `<img>`.
- Publicacao no servidor de producao e validacao do HTML servido.

## Otimizacoes de imagens

Foram criadas imagens otimizadas em `public/optimized/` e `docs/optimized/`, incluindo variantes JPEG e WebP em tamanhos menores para atender melhor desktop e mobile.

Problemas atacados:

- Imagens maiores do que o tamanho exibido.
- Falta de formato moderno para algumas imagens.
- Downloads desnecessarios acima do necessario para o viewport.
- Possivel impacto negativo no LCP.

Exemplos de melhorias aplicadas:

- Hero com `fetchpriority="high"` e carregamento eager.
- Imagens abaixo da dobra com `loading="lazy"`.
- Uso de `decoding="async"`.
- Inclusao de dimensoes explicitas para reduzir CLS.
- Uso de WebP quando trouxe economia real.

## Logo inicial

O logo inicial foi substituido pelo arquivo fornecido pelo cliente, com remocao de fundo e exportacao em formato transparente.

Arquivos gerados:

- `public/optimized/rafael-barros-logo-transparent.webp`
- `docs/optimized/rafael-barros-logo-transparent.webp`

Tambem foi mantida a versao PNG intermediaria localmente nos assets otimizados.

A versao WebP transparente foi escolhida para manter qualidade visual e evitar aumento do LCP. A versao PNG inicial ficou perto de 104 KB; a versao WebP final ficou perto de 20 KB.

## Logos do rodape

Os logos do Xaraies/Arbtech e da landing foram ajustados para nao ficarem esticados.

Foram usados limites de largura, altura automatica e `object-fit: contain`, preservando a proporcao correta dos arquivos.

## SEO tecnico

Foram adicionados ou ajustados:

- `robots.txt`
- `sitemap.xml`
- `favicon.ico`
- `rel="canonical"`
- Metadados principais da pagina
- Estrutura de publicacao em `docs/`

## Performance e JavaScript

O relatorio apontou reflow forcado. A causa provavel foi reduzida ao remover logica de animacao/reveal baseada em JavaScript no carregamento.

Tambem foi corrigido o aviso:

> Especificar overflow: visible em tags img, video e canvas pode fazer com que elas produzam conteudo visual fora dos limites do elemento.

Correcao aplicada:

- Antes: `overflow: visible !important`
- Depois: `overflow: clip !important`

Isso remove a causa do aviso sem alterar o comportamento visual esperado do logo.

## Publicacao

O site foi publicado no servidor VPS em:

`/var/www/html/`

A publicacao foi feita a partir da pasta:

`docs/`

Fluxo utilizado:

```bash
npm run build
rsync -az docs/ root@72.61.63.197:/var/www/html/
```

Observacao: credenciais de servidor nao devem ser documentadas no repositorio.

## Validacoes realizadas

Foram feitas validacoes locais e em producao:

- `npm run build`
- `curl -I` na pagina principal
- `curl -I` nos assets publicados
- Comparacao de hash entre `docs/index.html` local e HTML baixado de producao
- Lighthouse/PageSpeed em producao
- Conferencia de que dominios de anuncios de terceiros reportados nao estavam no HTML local nem no HTML publicado

## Resultado final medido

Depois das melhorias e da troca otimizada do logo, o Lighthouse mobile em producao ficou:

| Categoria | Pontuacao |
| --- | ---: |
| Performance | 100 |
| Acessibilidade | 100 |
| Boas praticas | 100 |
| SEO | 100 |

Metricas mobile finais:

| Metrica | Resultado |
| --- | ---: |
| FCP | 0.9 s |
| LCP | 1.7 s |
| TBT | 0 ms |
| CLS | 0.006 |
| Speed Index | 0.9 s |

## Arquivos principais alterados

- `index.html`
- `docs/index.html`
- `public/optimized/`
- `docs/optimized/`
- `public/robots.txt`
- `docs/robots.txt`
- `public/sitemap.xml`
- `docs/sitemap.xml`
- `public/favicon.ico`
- `docs/favicon.ico`

## Manutencao futura

Ao trocar imagens:

1. Gerar versoes otimizadas em WebP.
2. Manter dimensoes explicitas no HTML.
3. Usar `loading="lazy"` para imagens abaixo da dobra.
4. Usar `fetchpriority="high"` somente no recurso principal acima da dobra.
5. Rodar `npm run build`.
6. Publicar `docs/`.
7. Conferir o HTML publicado e rodar Lighthouse em producao.

Ao trocar logos:

1. Preservar transparencia quando necessario.
2. Evitar PNG grande no topo da pagina.
3. Preferir WebP transparente quando o suporte for suficiente.
4. Nao usar `overflow: visible` diretamente em `img`, `video` ou `canvas`.

