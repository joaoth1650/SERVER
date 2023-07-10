import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();
const SECRET = process.env.SECRET_KEY;

const verifyJWT = (req, res, next) => {
  const token = req.headers['x-access-token'];
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) { return res.status(401).end()
    }
    req.name = decoded.name;
    next();
  })
}

export default verifyJWT