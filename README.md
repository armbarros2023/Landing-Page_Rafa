# Landing Page Rafa

Landing page da Imersao Igreja Acolhedora, publicada em:

https://www.igrejaacolhedora.com.br

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build para publicacao

```bash
npm run build
npm run preview
```

## Publicacao

A pasta publicada em producao e no fluxo de GitHub Pages e:

`docs/`

Para publicar no VPS, gere o build e envie o conteudo de `docs/` para o servidor configurado:

```bash
npm run build
rsync -az docs/ root@72.61.63.197:/var/www/html/
```

Nao documentar credenciais no repositorio.

## Documentacao

- [Documentacao das melhorias](./DOCUMENTACAO-MELHORIAS.md)

## Observacoes

As imagens otimizadas ficam em `public/optimized/` e `docs/optimized/`.
Ao alterar imagens ou logos, manter versoes responsivas, dimensoes explicitas e validar com Lighthouse/PageSpeed.
