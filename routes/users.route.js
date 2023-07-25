import express from 'express';
import db from '../repositories/db.js'
import Users from "../models/users.models.js"
import verifyJWT from '../middleware/middlewareFrontal.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();
const SECRET = process.env.SECRET_KEY;
const router = express.Router();


const headers = {
	'x-access-token': '',
	'Content-Type': 'application/json',
};


router.post('/users/register', (req, res) => {
	const { name, email, password } = req.body;

	Users.create({ name, email, password })
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
	const { name, password } = req.body;

	Users.findOne({ where: { name, password } })
		.then(users=> {
			if (users) {
				const token = jwt.sign({ name: users.name, password: users.password }, SECRET, { expiresIn: 21600 });
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

router.get('/users/logout', async (req, res) => {
	if (req.headers && req.headers['x-access-token']) {
		const token = req.headers['x-access-token'];
		if (token) {
			return res
				.status(201).send()

		}
		return res.status(403).send("token nao informado")
	}
});


export default router