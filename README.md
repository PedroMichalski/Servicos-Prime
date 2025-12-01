# Servicos-Prime

Serviços Prime é um projeto desenvolvido com o objetivo de criar uma plataforma online para a busca de serviços domésticos, oferecendo uma experiência moderna, acessível e intuitiva tanto para profissionais quanto para contratantes.
A proposta é entregar algo inovador no mercado, agilizando o processo de encontrar profissionais qualificados de forma prática e segura.

Tecnologias Utilizadas
Frontend

HTML5

CSS3

JavaScript

Modularização de componentes (includes)

Estrutura organizada em pages, components, scripts e styles

Backend

Node.js

Express

Banco de dados simples em arquivo JSON (database.json)

Importante: O backend atual não está 100% funcional.
Ele foi desenvolvido principalmente para fins de teste e prototipagem, e ainda possui limitações e pontos a serem melhorados.

Estrutura do Projeto
src/
│
├── backend/
│   ├── server.js
│   ├── database.json
│   ├── package.json
│   └── node_modules/
│
└── frontend/
    ├── components/
    │   ├── footer.html
    │   ├── header_logged.html
    │   ├── header_loggout.html
    │   └── profile_card.html
    │
    ├── pages/
    │   ├── login.html
    │   ├── register.html
    │   └── services.html
    │
    ├── scripts/
    │   ├── auth.js
    │   ├── include.js
    │   ├── login.js
    │   └── register.js
    │
    └── styles/
        ├── main.css
        └── variables.css

Instalação e Execução
 1. Clonar o repositório
git clone <seu-repositorio>
cd src/backend

 2. Instalar dependências
npm install

 3. Rodar o servidor backend
node server.js


O servidor provavelmente roda em:

http://localhost:3000


Como o backend ainda está em desenvolvimento, algumas rotas podem apresentar erros ou comportamento limitado.

 4. Rodar o frontend

O frontend não exige build. Basta abrir os arquivos HTML em src/frontend/pages/.

 Funcionalidades Atuais

Página de login

Página de registro

Página de listagem de serviços

Sistema visual de componentes reutilizáveis (header, footer etc.)

Integração básica com o backend (em teste)

 Melhorias Futuras (já previstas)

Correção e finalização das rotas do backend

Implementação de autenticação JWT

Aperfeiçoamento da lógica de registro e login

Otimização do banco de dados

Melhorias de UI/UX

Hospedagem do site

Integração completa entre frontend e backend

 Status do Projeto

 Em desenvolvimento
O projeto ainda está em fase de construção, com partes não finalizadas — especialmente no backend.
O repositório já está organizado para receber melhorias e expandir para funcionalidades mais robustas.
