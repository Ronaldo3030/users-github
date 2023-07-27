# Aplicação GitHub API Proxy - Front-End

Este projeto é uma aplicação web que mostra os dados dos usuários do GitHub de forma interativa e amigável. Ele foi desenvolvido usando React e está hospedado no site https://users-github.onrender.com/. Ele também usa a API proxy criada no back-end, que está hospedada no repositório https://github.com/Ronaldo3030/api-users-github.

## Como usar
Para usar esta aplicação, você pode acessar o site https://users-github.onrender.com/ no seu navegador. Você vai ver uma tela com uma lista de usuários do GitHub, com o ID, o login e a foto de cada um. Você pode clicar em um usuário para ver mais detalhes sobre ele, como a URL do perfil, a data de criação do login e os repositórios públicos que ele possui. Você também pode pesquisar por um usuário específico digitando o login dele no campo “Procurar”. Você pode navegar pela lista de usuários usando os botões “Anterior” e “Próximo”.

## Funcionalidades
A aplicação possui as seguintes funcionalidades:

* Lista de usuários: Mostra uma lista de usuários do GitHub, usando a API do GitHub diretamente.
* Detalhes do usuário: Mostra as informações detalhadas de um usuário específico, usando a API proxy criada no back-end.
* Tabela de repositórios: Mostra uma tabela com os repositórios públicos de um usuário específico, usando a API proxy criada no back-end.
* Pesquisa por usuário: Permite pesquisar por um usuário específico digitando o login dele no campo “Procurar”.
* Paginação: Permite navegar pela lista de usuários usando os botões “Anterior” e “Próximo”.

## Componentes
A aplicação React foi organizada em componentes que estão dentro da pasta /src/components. Os componentes são os seguintes:

* App: O componente principal da aplicação, que renderiza os outros componentes e gerencia as rotas.
* Button: O componente que mostra os botões “Anterior” e “Próximo” para navegar pela lista de usuários.
* Card: O componente que mostra cada usuário na lista de usuários, com o ID, o login, a foto e um link para o perfil no GitHub.
* Header: O componente que mostra o cabeçalho da aplicação, com o título e um link para voltar à tela inicial.
* Id: O componente que mostra o ID de um usuário.
* Input: O componente que mostra o campo “Procurar” para pesquisar por um usuário específico.
* Loading: O componente que mostra uma animação de carregamento enquanto os dados dos usuários são buscados.
* Modal: O componente que mostra uma janela modal com os detalhes de um usuário específico, incluindo a tabela de repositórios.
* Tabela: O componente que mostra uma tabela com os repositórios públicos de um usuário específico, com o ID, o nome e o link para cada repositório.
* Users: O componente que mostra a lista de usuários do GitHub, usando a API do GitHub diretamente.