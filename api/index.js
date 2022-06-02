import cors from 'cors'
import express from 'express'
import 'dotenv/config'

const server = express();
server.use(cors());
server.use(express.json());

server.listen(process.env.PORT, () => console.log(`API online na porta ${process.env.PORT}`));