# O Caminho de uma Escolha

Experiência interativa para a sala temática **Impacto da Tecnologia na Sociedade**. O visitante faz escolhas fictícias, observa como uma interface pode organizar sua atenção e recebe uma explicação final sobre cor, posição, ordem e linguagem.

## Objetivo pedagógico

A experiência não tenta descobrir a personalidade do visitante. Ela torna visível um princípio simples: as pessoas continuam responsáveis por suas decisões, mas a forma de apresentar opções pode facilitar, dificultar ou tornar uma escolha mais atraente. A revelação final transforma a surpresa em reflexão sobre autonomia, privacidade, recomendações e rastros digitais.

## Segurança e privacidade

O projeto não possui login, banco de dados, Firebase, cookies, analytics ou chamadas de API. Nenhuma resposta é enviada ou salva. Todas as opções são fictícias e o botão de reinício limpa o estado da sessão.

Na feira, o mediador deve explicar antes ou depois da interação que se trata de uma demonstração educativa e não de um teste psicológico. Não peça nomes, telefones, idade, opiniões políticas ou qualquer dado pessoal.

## Tecnologias

O projeto usa React, TypeScript, Vite, Tailwind CSS e Lucide React. A experiência é frontend estática e pode ser publicada na Vercel sem configuração de servidor.

## Executar localmente

```bash
pnpm install
pnpm dev
```

Para validar o projeto:

```bash
pnpm check
pnpm build:web
```

## Publicar na Vercel

No painel da Vercel, importe este repositório do GitHub. Use `pnpm build:web` como comando de build e `dist/public` como diretório de saída. O arquivo `vercel.json` já traz essa configuração. Não use `server/index.ts` como entrypoint da Vercel: ele é usado somente pelo ambiente WebDev local. Não são necessárias variáveis de ambiente.

Também é possível publicar diretamente pelo WebDev Management UI após salvar um checkpoint.

## Uso na feira

Abra a experiência em uma tela ou notebook e deixe o visitante clicar sozinho. Ao chegar à revelação, o mediador pode perguntar: **“Você controla completamente aquilo que aparece na sua tela?”** Em seguida, conecte a demonstração aos três núcleos do projeto: tecnologia cotidiana, dados/algoritmos/privacidade e tecnologia/trabalho/futuro.

## Créditos

Projeto interdisciplinar de Ciências Humanas — Impacto da Tecnologia na Sociedade.
