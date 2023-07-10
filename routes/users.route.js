import express from 'express';
import db from '../repositories/db.js'
import User from "../models/users.models.js"
import verifyJWT from '../middleware/middlewareFrontal.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();
const SECRET = process.env.SECRET_KEY;
const router = express.Router();

router.post('/register', (req, res) => {
  const { username, password } = req.body;

  User.create({ username, password })
    .then(() => {
      res.send('Usuário registrado com sucesso');
      console.log(res)
    })
    .catch(err => {
      console.error('Erro ao registrar o usuário:', err);
      res.status(500).send('Erro ao registrar o usuário');
    });
});


router.post('/users/login', (req, res) => {
  const { username, password } = req.body;

  User.findOne({ where: { username, password } })
    .then(user => {
      if (user ) {
        const token = jwt.sign({username: user.username, password: user.password}, SECRET, {expiresIn: 21600});
        return res.json(token);
      } else {
        // Credenciais inválidas
        res.status(401).send('Credenciais inválidas');
      }
    })
    .catch(err => {
      console.error('Erro ao fazer login:', err);
      res.status(500).send('Erro ao fazer login');
      
    });
});


export default router