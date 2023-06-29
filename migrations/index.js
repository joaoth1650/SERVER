(async () => {

  const database = require('../src/db')
  const Produto = require('../models/Game')
  await database.sync();

  const novoProduto = await Produto.create({
    name: 'mouse usb',
    cost: '13',
    category: 'kakakakak'
  })

  console.log(novoProduto)



})();