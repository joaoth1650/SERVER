import express from "express";
import cors from "cors";
import gameRouter from "../routes/games.route.js"
import userRouter from "../routes/users.route.js"
import favoriteRouter from "../routes/favorites.route.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", gameRouter);
app.use("/", userRouter);
app.use("/", favoriteRouter)


app.listen(3001, () => {
  console.log(`API RUNNING PORT 3001`);
});