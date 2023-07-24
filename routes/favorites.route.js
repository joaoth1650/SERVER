import express from "express";
const router = express.Router();
import {
  createFavoritesController,
  updateFavoritesController,
  deleteFavoriteController,
  getFavoritesController,
  getFavoriteController,
} from "../controllers/favorites.controller.js";

import favorites from "../models/favorites.models.js";
import verifyJWT from '../middleware/middlewareFrontal.js'


router.post("/favorites/register", verifyJWT , createFavoritesController);
router.put("/favorites/edit", verifyJWT ,updateFavoritesController);
router.delete("/favorites/delete/:id" ,deleteFavoriteController);
router.get("/favorites", verifyJWT ,getFavoritesController);
router.get("/favorite/:name",getFavoriteController);



export default router