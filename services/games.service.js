import {
  insertGameRepository,
  updateGameRepository,
  deleteGameRepository,
  getGamesRepository,
  getGameRepository,
  getAlgumGameRepository,
} from "../repositories/games.repositories.js";

const createGameService = (Games) => {
  return insertGameRepository(Games);
};

const updateGameService = (Games) => {
  return updateGameRepository(Games);
};

const deleteGameService = (id) => {
  return deleteGameRepository(id);
};

const getGamesService = () => {
  return getGamesRepository();
};

const getGameService = (name) => {
  return getGameRepository(name);
};

const getAlgumGameService = (name) => {
  return getAlgumGameRepository(name);
}

export {
  createGameService,
  updateGameService,
  deleteGameService,
  getGamesService,
  getGameService,
  getAlgumGameService,
};