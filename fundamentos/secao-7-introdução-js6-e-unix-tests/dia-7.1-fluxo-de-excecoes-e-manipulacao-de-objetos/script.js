const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos'); // através do construtor `new Error` já sabemos que será lançada a mensagem se algo der errado.
  }
};

const sum = (value1, value2) => {
  try { 
    verifyIsNumber(value1, value2);
    return value1 + value2;
  } catch (error) {
    alert(error.message);
  }
};

