import axios from 'axios'


const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function NovaConsulta(nome, nascimento, cpf, horario, data, preco, contato, id) {
    const resposta = await api.post('/usuario/marcar', {
        
        nome: nome,
        cpf: cpf,
        nascimento: nascimento,
        preco: preco,
        data: data,
        hora: horario,  
        contato: contato,
        id: id
        })

    return resposta.data;
}

export async function alterarConsulta(consulta, nome, nascimento, cpf, horario, data, preco, contato, id) {
    const resposta = await api.put(`/alterarConsulta/${consulta}`, {
        
        nome: nome,
        cpf: cpf,
        nascimento: nascimento,
        preco: preco,
        data: data,
        hora: horario,  
        contato: contato,
        id: id
        })

    return resposta.data;
}


export async function ConsultarTodos() {
    const resposta = await api.get('/consultar');
    return resposta.data;
}

export async function FiltrarPorCPF(cpf) {
    const resposta = await api.get(`/filtrarPorCPF?cpf=${cpf}`);
    return resposta.data;
}

export async function removerConsulta(consulta) {
    const resp = await api.delete(`/deletarConsulta/${consulta}`);
    return resp.status;
}

export async function buscarPorConsulta(consulta) {
    const resposta = await api.get(`/alterar/${consulta}`);
    return resposta.data;
}