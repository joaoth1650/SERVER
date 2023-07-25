import { Op } from "sequelize";
import Games from "../models/games.models.js";

const insertGameRepository = async (paramsEnviado) => {
  try {
    return await Games.create(paramsEnviado);
  } catch (err) {
    console.log(err);
  }
};

const updateGameRepository = async (paramsEnviado) => {
  try {
    await Games.update(paramsEnviado, {
      where: {
        id: paramsEnviado.id,
      },
    });

    return getGameRepository(paramsEnviado.id);
  } catch (err) {
    console.log(err);
  }
};

const deleteGameRepository = async (id) => {
  try {
    await Games.destroy({
      where: {
        id: id,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const getGamesRepository = async () => {
  try {
    return await Games.findAll();
  } catch (err) {
    console.log(err);
  }
};

const getGameRepository = async (id) => {
  try {
    return await Games.findAll({
      where: {
        [Op.or]: [
          {
            id: {
              [Op.like]: `${id}`
            }
          },
        ]
      } // Substitua 'coluna' pelo nome da coluna e 'valor' pelo valor que você deseja procurar
    })
  } catch (err) {
    console.log(err);
  }
};

const getAlgumGameRepository = async (name) => {
  try {
    return await Games.findAll({
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
  insertGameRepository,
  updateGameRepository,
  deleteGameRepository,
  getGamesRepository,
  getGameRepository,
  getAlgumGameRepository,
};