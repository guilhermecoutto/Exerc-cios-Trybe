let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  for ( let key in info){
    console.log("bem vinda, " + info.personagem);
  }
  info['recorrente'] = 'sim'
  console.log(info);

  for( let index in info){
    console.log(info[index]);
  }


  for( let index in info){
    console.log(index);
  }
  let info2 = {
  personagem: 'Margarida e tio patinhas',
  origem: 'Pato Donald e Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas’',
  recorrente: 'ambos recorrentes'
}
console.log(info2);

