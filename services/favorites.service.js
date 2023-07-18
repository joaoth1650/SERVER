import {
  insertFavoriteRepository,
  updateFavoriteRepository,
  deleteFavoriteRepository,
  getFavoritesRepository,
  getFavoriteRepository,
} from "../repositories/favorites.repositories.js";

const createFavoriteService = (Favorites) => {
  return insertFavoriteRepository(Favorites);
};

const updateFavoriteService = (Favorites) => {
  return updateFavoriteRepository(Favorites);
};

const deleteFavoriteService = (id) => {
  return deleteFavoriteRepository(id);
};

const getFavoritesService = () => {
  return getFavoritesRepository();
};

const getFavoriteService = (name) => {
  return getFavoriteRepository(name);
};

export {
  createFavoriteService,
  updateFavoriteService,
  deleteFavoriteService,
  getFavoritesService,
  getFavoriteService,
};