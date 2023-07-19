import { Op } from "sequelize";
import Users from "../models/users.models.js";

const insertUserRepository = async (paramsEnviado) => {
  try {
    return await Users.create(paramsEnviado);
  } catch (err) {
    console.log(err);
  }
};

const updateUserRepository = async (paramsEnviado) => {
  try {
    await Users.update(paramsEnviado, {
      where: {
        id: paramsEnviado.id,
      },
    });

    return getUserRepository(paramsEnviado.id);
  } catch (err) {
    console.log(err);
  }
};

const deleteUserRepository = async (id) => {
  try {
    await Users.destroy({
      where: {
        id: id,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const getUsersRepository = async () => {
  try {
    return await Users.findAll();
  } catch (err) {
    console.log(err);
  }
};

const getUserRepository = async (name) => {
  try {
    return await Users.findAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${name}%`
            }
          },
        ]
      } // Substitua 'coluna' pelo nome da coluna e 'valor' pelo valor que você deseja procurar
    })
  } catch (err) {
    console.log(err);
  }
};

export {
  insertUserRepository,
  updateUserRepository,
  deleteUserRepository,
  getUsersRepository,
  getUserRepository,
};