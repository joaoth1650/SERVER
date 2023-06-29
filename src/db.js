const { sequelize } = require('../models/Game');

async function syncDatabase() {
  try {
    await sequelize.sync();
    console.log('Tabelas sincronizadas com sucesso!');
  } catch (error) {
    console.error('Erro ao sincronizar tabelas:', error);
  }
}

syncDatabase();
