# Sobre o projeto

Este projeto foi desenvolvido para o processo seletivo da empresa Dock.

Nele, foi utilizado o framework ReactJS com TypeScript, SASS como pré-processador de CSS, ContextAPI para estado global e o consumo da API foi feito por meio da utilização do axios.

O objetivo do aplicação é listar os repositórios do Github de um usuário, conforme o nome de usuário inserido no campo de pesquisa.

## Rodando o projeto localmente

Clone o projeto na sua máquina.

Em seguida, crie um arquivo chamado `.env.development.local` com as mesmas informações do arquivo `.env.example`.

> Obs.: Optei aqui, por utilizar a API do GitHub de sem autenticação, visto que isso facilitaria o desevolvimento nesse caso. Como não tem autenticação, não é necessário gerar um token de acesso pessoal.

Depois disso, é preciso instalar os pacotes do projeto.

Rode o comando abaixo

```bash
yarn install
# ou
yarn
```

Com os pacotes instalados basta rodar o comando abaixo para inicializar o projeto:

```bash
yarn start
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

Depois disso basta testar, mas lembre-se clientes sem autenticação podem fazer 60 solicitações por hora na API do GitHub.

## Acessando o projeto em um servidor

Para visualizar o projeto rodando em um servidor da [`Vercel`](https://vercel.com/), acesse: [teste-dock.vercel.app](https://teste-dock.vercel.app/)
