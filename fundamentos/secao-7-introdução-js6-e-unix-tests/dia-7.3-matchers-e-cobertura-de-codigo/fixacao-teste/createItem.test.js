const createItem = require('./createItem');
describe('a função createItem', () => {
  it('cria um item válido', () => {
    expect(createItem('banana', 'g', 2.00, 12)).toEqual({ name: 'banana', unit: 'g', price: 2.00, quantity: 12 })
  });
  it('utiliza zero como quantidade padrão', () => {
    expect(createItem('banana', 'kg', '1.99').quantity)
  });
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(createItem()).toThrow('Necessário parametro')

  });
  it.todo('Lança um erro se o nome do item não é uma string');
  it.todo('Lança um erro se o preço é negativo');
  it.todo('Lança um erro se o preço é zero');
});