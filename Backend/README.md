# API de Usuários – Spring Boot

API REST desenvolvida em **Java com Spring Boot**, criada para estudo e prática de integração entre **backend e frontend**, seguindo boas práticas de organização, segurança e arquitetura.

## 📌 Funcionalidades

- Cadastro de usuários
- Listagem de usuários
- API REST simples e funcional
- Integração com frontend em React

## 🛠 Tecnologias Utilizadas

- Java
- Spring Boot
- Spring Web
- Spring Data JPA
- Hibernate
- Maven
- Banco de dados relacional

## 📂 Estrutura do Projeto

src/main/java

└── com.seuprojeto.api

├── controller

├── service

├── repository

├── entity

└── ApiApplication.java


## 🌐 Endpoints Disponíveis

### ➕ Cadastrar usuário
POST /usuarios

**Body (JSON):**
```json
{
  "nome": "João Silva",
  "email": "joao@email.com"
}
```
### 📄 Listar usuários

GET /usuarios

```json
[
  {
    "id": 1,
    "nome": "João Silva",
    "email": "joao@email.com"
  }
]
```
## ⚙️ Configuração do Projeto

Este projeto não versiona dados sensíveis.

Utilize o arquivo application-example.properties como base e crie um application.properties com suas configurações locais:

spring.datasource.url=jdbc:mysql://localhost:3306/seubanco

spring.datasource.username=SEU_USUARIO

spring.datasource.password=SUA_SENHA

## ▶️ Como Executar o Projeto

### Pré-requisitos

- Java 17 ou superior

- Maven

- Banco de dados configurado

### Executar a aplicação

./mvnw spring-boot:run

### A API ficará disponível em:

http://localhost:8080


# 🎯 Objetivo do Projeto

### Projeto desenvolvido com fins educacionais para:

Praticar desenvolvimento de APIs REST

Integrar frontend (React) com backend (Spring Boot)

Aplicar boas práticas de arquitetura e segurança

Compor portfólio profissional

# 👨‍💻 Autor

## Vitor Hugo de Faria Collin
