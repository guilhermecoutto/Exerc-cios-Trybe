let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  console.log("O livro favorito de " + leitor.nome + leitor.sobrenome + " se chama " + "'" + leitor.livrosFavoritos[0].titulo + "'")
 
  leitor.livrosFavoritos.push(
    {titulo: 'senhor dos anéis',} 
  );
    console.log(leitor);

console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos")