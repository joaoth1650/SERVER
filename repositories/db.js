import Sequelize from "sequelize";

const sequelize = new Sequelize(
  'joao','root','root',{
    host: 'localhost',
    dialect: 'mysql'
  }
);

export default sequelize;