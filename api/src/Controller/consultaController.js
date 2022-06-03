import { marcarConsulta } from '../Repository/consultaRepository.js'

import { Router } from 'express'
const server = Router();

server.post('/usuario/marcar', async (req, resp) => {
    try{
        let { email, senha } = req.body;
        let resposta = await login(email, senha);
        resp.send(resposta);
    }
    catch(err){
        console.log(err);
        resp.status(400).send({
            erro: err.message
        });
    }
})

export default server;