import {
  insertUserRepository,
  updateUserRepository,
  deleteUserRepository,
  getUsersRepository,
  getUserRepository,
} from "../repositories/users.repositories.js";

const createUserService = (Users) => {
  return insertUserRepository(Users);
};

const updateUserService = (Users) => {
  return updateUserRepository(Users);
};

const deleteUserService = (id) => {
  return deleteUserRepository(id);
};

const getUsersService = () => {
  return getUsersRepository();
};

const getUserService = (name) => {
  return getUserRepository(name);
};

export {
  createUserService,
  updateUserService,
  deleteUserService,
  getUsersService,
  getUserService,
};