import {
  createGameService,
  updateGameService,
  deleteGameService,
  getGamesService,
  getGameService,
} from "../services/games.service.js";

const createGamesController = async (req, res, next) => {
  const game = req.body;

  try {
    if (!game.name || !game.cost) {
      res.status(400).send({ msg: "Nome e preço são obrigatórios!" });
    }

    res.send(createGameService(game));
  } catch (err) {
    console.log(err);
  }
};

const updateGamesController = async (req, res, next) => {
  const game = req.body;

  try {
    if (
      !game.sku ||
      !game.name ||
      !game.cost
    ) {
      res.status(400).send({ msg: "Sku, Nome e Preço são obrigatórios!" });
    }

    res.send(updateGameService(game));
  } catch (err) {
    console.log(err);
  }
};

const deleteGameController = async (req, res, next) => {
  const { id } = req.params;

  try {
    if (!id) {
      res.status(400).send({ msg: "ID nessário para exclusão" });
    }

    res.send(deleteGameService(id));
  } catch (err) {
    console.log(err);
  }
};

const getGamesController = async (req, res, next) => {
  try {
    if (req.method !== "GET") {
      res.status(400).send({ msg: "Método incorreto" });
    }

    const result = await getGamesService();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

const getGameController = async (req, res, next) => {
  const { id } = req.params;

  try {
    if (req.method !== "GET") {
      res.status(400).send({ msg: "Método incorreto" });
    }

    const result = await getGameService(id);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

export {
  createGamesController,
  updateGamesController,
  deleteGameController,
  getGamesController,
  getGameController,
};