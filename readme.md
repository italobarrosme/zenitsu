# O que é e como usar o Zod com TypeScript!

O Zod é uma biblioteca de validação de esquema para dados em TypeScript-first. É muito útil para garantir a integridade dos dados, especialmente quando se trabalha com APIs ou outras fontes de dados externas.

Para usar o Zod com TypeScript, é necessário primeiro definir o esquema (Schema) dos dados que serão validados. Isso é feito com a ajuda do `z.object` para definir um objeto com propriedades e `z.array` para definir um array com itens com esquemas específicos.

A tipagem é feita por inferência, com base no esquema definido. O Zod suporta todos os tipos primitivos do TypeScript, além de tipos complexos como union types e tipos personalizados.

Após definir o esquema, é possível usar o método de esquemas como o `parse` para validar os dados.

O Zod também possui recursos adicionais, como a possibilidade de definir mensagens de erro personalizadas, permitindo um controle mais refinado sobre como os erros são apresentados ao usuário.

O Zod foi projetado para ser o mais amigável possível ao desenvolvedor. O objetivo é eliminar declarações de tipo duplicadas. Com Zod, você declara um validador uma vez e Zod inferirá automaticamente o tipo estático de TypeScript. É fácil compor tipos mais simples em estruturas de dados complexas.

## Objetivo

Neste projeto, foi desenvolvido um exemplo básico de requisição para uma API simulada, onde os dados são validados por meio do schema do zod, utilizando um hook customizado no React chamado [useUsers](https://github.com/italobarrosme/zenitsu/tree/main/src/hooks/useUsers). O código verifica se os dados estão de acordo com o esquema definido pelo UserSchema da biblioteca zod e armazena a lista de usuários no estado do componente. Em caso de erro, é gerado um objeto de exceção.

## O que foi usado

- Reactjs
- Vite
- Tailwindcss
- zod: [github do zod](https://github.com/colinhacks/zod)
