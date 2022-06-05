import { login } from '../Repository/usuarioRepository.js'

import { Router } from 'express'
const server = Router();

server.post('/usuario/login', async (req, resp) => {
    try{
        let { email, senha } = req.body;
        let resposta = await login(email, senha);
        if(!resposta) {
            throw new Error('Credenciais inválidas.');
        }
        resp.send(resposta);
    }
    catch(err){
        console.log(err);
        resp.status(401).send({
            erro: err.message
        });
    }
})

export default server;