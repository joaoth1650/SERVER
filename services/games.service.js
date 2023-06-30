import {
  insertGameRepository,
  updateGameRepository,
  deleteGameRepository,
  getGamesRepository,
  getGameRepository,
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

const getGameService = (id) => {
  return getGameRepository(id);
};

export {
  createGameService,
  updateGameService,
  deleteGameService,
  getGamesService,
  getGameService,
};