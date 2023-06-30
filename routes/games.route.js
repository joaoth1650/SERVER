import express from "express";
import {
  createGamesController,
  updateGamesController,
  deleteGameController,
  getGamesController,
  getGameController,
} from "../controllers/games.controller.js";

const router = express.Router();

router.post("/register", createGamesController);
router.put("/edit", updateGamesController);
router.delete("/:id", deleteGameController);
router.get("/", getGamesController);
router.get("/:id", getGameController);

export default router