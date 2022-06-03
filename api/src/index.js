import cors from 'cors'
import express from 'express'
import 'dotenv/config'

import usuarioController from './Controller/usuarioController.js'


const server = express();
server.use(cors());
server.use(express.json());

server.use(usuarioController);

server.listen(process.env.PORT, () => console.log(`API online na porta ${process.env.PORT}`));