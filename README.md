# Dashboard App

![imagem_2023-03-16_065553133](https://user-images.githubusercontent.com/97895946/225583743-fb3467bf-b89c-4c85-a584-edd0b65986d5.png) ![imagem_2023-03-16_065829408](https://user-images.githubusercontent.com/97895946/225583734-a91de531-550f-492e-9fcb-aa8535c8280c.png)
![imagem_2023-03-16_070356499](https://user-images.githubusercontent.com/97895946/225583740-e1a207be-a0a2-4a23-97c4-b568ebcb6108.png)

O **Dashboard App** é um aplicativo feito com **_TypeScript_**, **_ReactJS_** e **_NextJS_**. Ele permite ao usuário administrar a página de usuários, criando novos por meio de um formulário, e ver informações de sua empresa em gráficos na página principal. Esta aplicação explora o potencial de estilização do **_Chakra UI_**, seu design responsivo, a criação de formulários e _prefetch_ e _cache local de dados_ para melhor performance, portanto algumas das features citadas não foram implementadas. Mais informações na área de Features.

Esta aplicação utiliza **_Chakra UI_** na estilização, **_React Hook Forms_** e **_Yup_** para os formulários, **_Apex Charts_** para os gráficos, **_Axios_** para lidar com as requisições HTTP, **_MirageJS_** para simular um Back-end e **_React Query_** para _prefetch_, _refetch_ e _cache local de dados_.

## Features

- O usuário poderá logar na sua conta de administrador (Feature simulada).
- O usuário poderá ver os inscritos da semana e a taxa de abertura de seu projeto em dois gráficos estilizados (Feature simulada).
- O usuário poderá criar um novo usuario ao clicar no botão _Criar novo_, inserindo nome, email e senha do usuário criado.
- O usuário poderá ver os usuários atualmente registrados em uma lista com suas informações e data de cadastro.
- O usuário terá uma melhor experiência com a performance da aplicação pois a lista faz _refetch_ de tempos em tempos, trazendo possíveis novas informações do banco de dados.
- A aplicação também usa dos conceitos de _prefetch_ e _cache local de dados_ para melhorar a performance e economizar em requisições.
- O usuário poderá trocar as páginas de usuários por meio dos botões do componente de Paginação.
- O usuário poderá acessar a aplicação de qualquer dispositivo, pois ela é responsiva e se adequada a qualquer dispositivo.

## Tecnologias Utilizadas

- Chakra UI
- TypeScript
- ReactJS
- NextJS
- Axios
- MirageJS
- Apex Charts
- React Hook Forms
- React Query
- Yup
