import { alterarConsulta, ConsultarTodos, DeletarConsulta, marcarConsulta, incluirAnotações, FiltrarPorCPF } from '../Repository/consultaRepository.js'

import { Router } from 'express'
const server = Router();

//marcar consulta
server.post('/usuario/marcar', async (req, resp) => {
    try {
        const novaconsulta = req.body;
        if (!novaconsulta.id) {
            throw new Error("Usuário não logado.")
        }
        if (!novaconsulta.nome) {
            throw new Error("Nome do paciente obrigatório.")
        }
        if (!novaconsulta.cpf) {
            throw new Error("CPF obrigatório.")
        }
        if (!novaconsulta.nascimento) {
            throw new Error("Data de nascimento obrigatória.")
        }
        if (!novaconsulta.preco) {
            throw new Error("Valor da consulta é obrigatório.")
        }
        if (!novaconsulta.data) {
            throw new Error("Data da consulta obrigatória.")
        }
        if (!novaconsulta.hora) {
            throw new Error("Horário da consulta obrigatório.")
        }
        if (!novaconsulta.contato) {
            throw new Error("Meio de contato obrigatório.")
        }

        const agendamento = await marcarConsulta(novaconsulta)
        resp.send(agendamento)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

//consultar
server.get('/consultar', async (req, resp) => {
    try {
        const resposta = await ConsultarTodos();
        resp.send(resposta)
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})

//deletar consulta
server.delete('/deletarConsulta/:consulta', async (req, resp) => {
    try {
        const { consulta } = req.params;
        const resposta = await DeletarConsulta(consulta)
        if (resposta != 1) {
            throw new Error("Consulta não pode ser removida")
        }
        resp.status(204).send()
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})

//alterar consulta
server.put('/alterarConsulta/:consulta', async (req, resp) => {
    try {
        const agendamento = req.body;
        const { consulta } = req.params

        if (!agendamento.nome) {
            throw new Error("Nome do paciente obrigatório.")
        }
        if (!agendamento.cpf) {
            throw new Error("CPF obrigatório.")
        }
        if (!agendamento.nascimento) {
            throw new Error("Data de nascimento obrigatória.")
        }
        if (!agendamento.preco) {
            throw new Error("Valor da consulta é obrigatório.")
        }
        if (!agendamento.data) {
            throw new Error("Data da consulta obrigatória.")
        }
        if (!agendamento.hora) {
            throw new Error("Horário da consulta obrigatório.")
        }
        if (!agendamento.contato) {
            throw new Error("Meio de contato obrigatório.")
        }
        const resposta = await alterarConsulta(consulta, agendamento)
        if (resposta != 1) {
            throw new Error("Não foi possível alterar consulta.")
        }
        else {
            resp.sendStatus(204)
        }
    } catch (err) {
        resp.send({
            erro: err.message
        });

    }
})

server.put('/incluirAnotacoes/:consulta', async (req, resp) => {
    try {
        const agendamento = req.body;
        const { consulta } = req.params;
        if (!agendamento.anotacoes) {
            throw new Error('Insira uma anotação.')
        }

        const resposta = await incluirAnotações(consulta, agendamento)
        if (resposta != 1) {
            throw new Error('Não foi possível inserir anotações.')
        }
        else {
            resp.sendStatus(204)
        }
    }
    catch (err) {
        resp.send({
            erro: err.message
        });
    }
})

server.get('/filtrarPorCPF', async (req, resp) => {
    try {
        const { cpf } = req.query;
        const resposta = await FiltrarPorCPF (cpf)
        if(!resposta){
            resp.sendStatus(404)
        }
        else{
            resp.send(resposta)
        }
    } catch (err) {
        resp.status(404).send({
            erro:err.message
        });
    }
})
export default server;