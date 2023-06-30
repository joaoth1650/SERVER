import Games from "../models/games.models.js";

const insertGameRepository = async (Games) => {
  try {
    return await Games.create(Games);
  } catch (err) {
    console.log(err);
  }
};

const updateGameRepository = async (Games) => {
  try {
    await Games.update(Games, {
      where: {
        id: Games.id,
      },
    });

    return getGameRepository(Games.id);
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
    return await Games.findByPk(id);
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
};