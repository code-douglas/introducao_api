# Introdução a API'S
- Repositório irá contar com toda a minha tragetória durante o desenvolvimento de uma API. 

### O que é uma API?

- <code>Application Programming Interface</code> Forma simples de comunicação entre aplicações, sem necessidade de <code>Views</code> pois geralmente o retorno da aplicação é via JSON, totalmente independente do front-end, aplicação baseada em requisição e resposta.

### Tecnológicas utilizadas:

- Javascript: Parte lógica
- Express.js: Criar a API.
- MongoDB: Base da dados utilizada
- Mongoose: Modelagem de dados
- Dotenv: Variaveis de ambiente
- Nodemon: Reload na aplicação a cada alteração.


### Rotas

- <code>/</code> rota que irá retornar código 200 indicando que a requisição foi feita bem-sucedida, além de uma mensagem em JSON.
- <code>/createproduct</code> rota que é responsável por receber os dados via dados de formulário, onde existem dois campos necessários o campo name(nome do produto) e o campo price(preco do produto), retornando uma mensagem de sucesso e o código 200. 