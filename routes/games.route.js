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
  const pageAsNumber = Number.parseInt(req.query.page);
  const sizeAsNumber = Number.parseInt(req.query.size);

  let page = 0;
  if(!Number.isNaN(pageAsNumber) && pageAsNumber > 0){
    page = pageAsNumber;
  }

  let size = 10;
  if(!Number.isNaN(sizeAsNumber) && !(sizeAsNumber > 10) && !(sizeAsNumber < 1)){
    size = sizeAsNumber;
  }

  const usersWithCount = await Games.findAndCountAll({
    limit: size,
    offset: page * size
  });
  res.send({
    content: usersWithCount.rows,
    totalPages: Math.ceil(usersWithCount.count / Number.parseInt(size))
  });
})
router.get("/", getGamesController);
router.get("/:name", getGameController);

export default router