import express from "express";
import {
  createGamesController,
  updateGamesController,
  deleteGameController,
  getGamesController,
  getGameController,
} from "../controllers/games.controller.js";

const router = express.Router();
import Games from "../models/games.models.js";


router.post("/register", createGamesController);
router.put("/edit", updateGamesController);
router.delete("/delete/:id", deleteGameController);
router.get('/consultaPage/?', async (req, res) => {
  const page = +req.query.page || 0;
  const size = +req.query.size || 12;

  const gamesWithCount = await Games.findAndCountAll({
    limit: size,
    offset: page * size
  });

  res.send({
    content: gamesWithCount.rows,
    totalPages: Math.ceil(gamesWithCount.count / size)
  });
});
router.get("/", getGamesController);
router.get("/:name", getGameController);

export default router