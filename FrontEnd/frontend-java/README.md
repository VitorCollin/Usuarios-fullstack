# Frontend – Painel de Usuários

Frontend desenvolvido em **React**, com **Vite** e **Tailwind CSS**, integrado a uma **API REST em Java (Spring Boot)**.  
O projeto foi criado para estudo e prática de desenvolvimento frontend moderno, consumo de APIs e boas práticas de organização e UI.

## 📌 Funcionalidades

- Cadastro de usuários
- Listagem automática de usuários
- Integração com API REST
- Atualização dinâmica da lista após cadastro
- Modo claro e modo escuro (Dark Mode)
- Layout responsivo

## 🛠 Tecnologias Utilizadas

- React
- Vite
- Tailwind CSS
- Axios
- JavaScript (ES6+)

## 📂 Estrutura do Projeto

src

├── components

│ ├── FormUsuario.jsx

│ ├── ListaUsuarios.jsx

│ ├── Layout.jsx

│ └── ThemeToggle.jsx

├── services

│ └── api.js

├── App.jsx

├── main.jsx

└── index.css

## 🌐 Integração com a API

A comunicação com o backend é feita via **Axios**, utilizando uma URL configurada por **variáveis de ambiente**.

### Arquivo `.env` (não versionado)

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=http://localhost:8080

```

Um arquivo .env.example está disponível no repositório como referência.

▶️ Como Executar o Projeto

Pré-requisitos

- Node.js (versão 18 ou superior recomendada)

- NPM ou Yarn

- Backend em execução

### Passos para rodar

npm install

npm run dev

### O frontend estará disponível em:

http://localhost:5173

## 🎨 Estilização e Tema

O projeto utiliza Tailwind CSS para estilização e possui:

Design responsivo

Tema claro e escuro

Componentes reutilizáveis

Layout centralizado com boa experiência de leitura

## 🔐 Boas Práticas Aplicadas

Uso de variáveis de ambiente para URLs sensíveis

Separação de responsabilidades por componentes

Estado centralizado no componente pai

Código organizado e legível

Projeto pronto para versionamento no GitHub

## 🎯 Objetivo do Projeto

Projeto desenvolvido com fins educacionais para:

Praticar desenvolvimento frontend moderno

Consumir APIs REST

Integrar frontend e backend

Aplicar boas práticas de React

Compor portfólio profissional

# 👨‍💻 Autor

## Vitor Hugo de Faria Collin
