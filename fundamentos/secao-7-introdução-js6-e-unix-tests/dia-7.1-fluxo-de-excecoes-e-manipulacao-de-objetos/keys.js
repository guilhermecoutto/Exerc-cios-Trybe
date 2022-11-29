// Tente criar uma função que exiba as habilidades do objeto student.
// Cada habilidade deve ser exibida no formato “Nome da habilidade,
// Nível: valor da chave referente à habilidade”.
// Após tentar criar a função, veja a sugestão de resposta logo abaixo e compare com a sua solução.

const student1 = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskills: 'Ótimo',
};

const student2 = {
  html: 'Bom',
  css: 'Ótimo',
  javascript: 'Ruim',
  softskills: 'Ótimo',
  git: 'Bom', // chave adicionada
};

const exibe = (estudante) => {
  const arrayDasHab = Object.keys(estudante);
  for (const i in arrayDasHab) {
    console.log(`${arrayDasHab[i]}, Nível: ${estudante[arrayDasHab[i]]}`);
  }
};
console.log("Estudante 1");
exibe(student1)