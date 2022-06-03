import { consultaPCPF } from '../Repository/pacienteRepository.js'

import { Router } from 'express'
const server = Router();

server.get('/paciente/:cpf', async (req, resp) => {
    try{
        let cpf = req.params.cpf;
        let resposta = await consultaPCPF(cpf);
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