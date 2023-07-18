import {
  createFavoriteService,
  updateFavoriteService,
  deleteFavoriteService,
  getFavoritesService,
  getFavoriteService,
} from "../services/favorites.service.js";

const createFavoritesController = async (req, res, next) => {
  const paramsEnviado = req.body;

  try {
    if (!paramsEnviado.name || !paramsEnviado.cost) {
      res.status(400).send({ msg: "Nome e preço são obrigatórios!" });
    }

    res.send(createFavoriteService(paramsEnviado));
  } catch (err) {
    console.log(err);
  }
};

const updateFavoritesController = async (req, res, next) => {
  const paramsEnviado = req.body;

  try {
    if (
      !paramsEnviado.category ||
      !paramsEnviado.name ||
      !paramsEnviado.cost
    ) {
      res.status(400).send({ msg: "Categoria, Nome e Preço são obrigatórios!" });
    }

    res.send(updateFavoriteService(paramsEnviado));
  } catch (err) {
    console.log(err);
  }
};

const deleteFavoriteController = async (req, res, next) => {
  const { id } = req.params;

  try {
    if (!id) {
      res.status(400).send({ msg: "ID nessário para exclusão" });
    }

    res.send(deleteFavoriteService(id));
  } catch (err) {
    console.log(err);
  }
};

const getFavoritesController = async (req, res, next) => {
  try {
    if (req.method !== "GET") {
      res.status(400).send({ msg: "Método incorreto" });
    }

    const result = await getFavoritesService();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

const getFavoriteController = async (req, res, next) => {
  const { name } = req.params;

  try {
    if (req.method !== "GET") {
      res.status(400).send({ msg: "Método incorreto" });
    }

    const result = await getFavoriteService(name);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

export {
  createFavoritesController,
  updateFavoritesController,
  deleteFavoriteController,
  getFavoritesController,
  getFavoriteController,
};