# API de Autenticação com JWT - Professor Lucas

Esta é uma API simples de autenticação usando JWT (JSON Web Token) construída com Express.
A aplicação permite realizar login, gerar um token JWT e acessar uma rota protegida mediante a autenticação.

## Funcionalidades

- **Rota pública** (`/`): Acessível sem autenticação. Retorna uma mensagem de boas-vindas.
- **Rota de login** (`/login`): Recebe um nome de usuário e senha, valida as credenciais e retorna um token JWT.
- **Rota protegida** (`/protected`): Requer um token JWT válido para acessar. Retorna dados protegidos do usuário.

## Pré-requisitos

- **Node.js**: A aplicação requer o Node.js instalado em sua máquina. Se ainda não o tiver instalado, acesse [nodejs.org](https://nodejs.org/) e instale a versão LTS.

- **Instalar as dependências**: Execute o comando abaixo para instalar as dependências do projeto.

```bash
npm install
```

## Inicializando o projeto

```bash
npm start
```

## Configurando variável de ambiente

Antes de rodar a aplicação, é necessário configurar uma variável de ambiente para a chave secreta utilizada para assinar os tokens JWT.

### Passo a Passo

1. Na raiz do seu projeto, crie um arquivo chamado `.env`.

2. Dentro desse arquivo `.env`, adicione a seguinte linha:

```bash
   SECRET_KEY=colocar-a-secret-aqui-ass
```

Essa chave secreta é usada para assinar os tokens JWT e garantir a segurança da sua aplicação. Não compartilhe essa chave publicamente e nunca a inclua no controle de versão (como o Git).

Salve o arquivo .env.
Agora, a variável de ambiente SECRET_KEY estará configurada corretamente, e a aplicação poderá usá-la.

## Adicionando o `.env` ao `.gitignore`

É importante garantir que o arquivo `.env`, que contém informações sensíveis como a chave secreta para JWT, não seja enviado para o controle de versão. Para isso, adicione o arquivo `.env` ao seu `.gitignore`.

## Testando a API de Autenticação com JWT

### 1. Usando o Insomnia ou Postman

## Testar a Rota pública (`/`)

1. Crie uma requisição **GET** para `http://localhost:3000/`.
2. Você deve receber uma resposta com a mensagem:

```json
{
  "message": "Bem-vindo à API pública!"
}
```

## Testar a Rota de Login (`/login`)

1. Crie uma requisição **POST** para `http://localhost:3000/login`.
2. Na aba de **Body**, escolha o tipo **JSON** e adicione o seguinte JSON:

```json
{
  "username": "professor.lucas",
  "password": "1234"
}
```

Se as credenciais estiverem corretas, você receberá um token JWT na resposta:

```json
{
  "message": "Login bem-sucedido!",
  "token": "seu-token-aqui"
}
```

## Testar a Rota Protegida (/protected)

Agora que você tem o token JWT, crie uma requisição GET para `http://localhost:3000/protected`.

Adicione o token JWT no cabeçalho `Authorization` no formato:

```bash
Bearer seu-token-aqui

```

Se o token for válido e não expirado, você deve receber a seguinte resposta:

```json
{
  "message": "Conteúdo protegido acessado!",
  "user": { ... }  // Decodificação do token com os dados do usuário
}
```
