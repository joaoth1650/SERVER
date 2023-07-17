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
import verifyJWT from '../middleware/middlewareFrontal.js'


router.post("/games/register", verifyJWT , createGamesController);
router.put("/games/edit", verifyJWT ,updateGamesController);
router.delete("/games/delete/:id", verifyJWT ,deleteGameController);
router.get('/games/consultaPage/?', verifyJWT , async (req, res) => {
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
router.get("/games", verifyJWT ,getGamesController);
router.get("/games/:name" ,getGameController);



export default router