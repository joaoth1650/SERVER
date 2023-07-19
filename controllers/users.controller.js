import {
  createUserService,
  updateUserService,
  deleteUserService,
  getUsersService,
  getUserService,
} from "../services/users.service.js";

const createUsersController = async (req, res, next) => {
  const paramsEnviado = req.body;

  try {
    if (!paramsEnviado.name || !paramsEnviado.password) {
      res.status(400).send({ msg: "Nome e senha são obrigatórios!" });
    }

    res.send(createUserService(paramsEnviado));
  } catch (err) {
    console.log(err);
  }
};

const updateUsersController = async (req, res, next) => {
  const paramsEnviado = req.body;

  try {
    if (
      !paramsEnviado.name ||
      !paramsEnviado.email ||
      !paramsEnviado.password
    ) {
      res.status(400).send({ msg: "Nome, email e senha são obrigatórios!" });
    }

    res.send(updateUserService(paramsEnviado));
  } catch (err) {
    console.log(err);
  }
};

const deleteUserController = async (req, res, next) => {
  const { id } = req.params;

  try {
    if (!id) {
      res.status(400).send({ msg: "ID nessário para exclusão" });
    }

    res.send(deleteUserService(id));
  } catch (err) {
    console.log(err);
  }
};

const getUsersController = async (req, res, next) => {
  try {
    if (req.method !== "GET") {
      res.status(400).send({ msg: "Método incorreto" });
    }

    const result = await getUsersService();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

const getUserController = async (req, res, next) => {
  const { name } = req.params;

  try {
    if (req.method !== "GET") {
      res.status(400).send({ msg: "Método incorreto" });
    }

    const result = await getUserService(name);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

export {
  createUsersController,
  updateUsersController,
  deleteUserController,
  getUsersController,
  getUserController,
};