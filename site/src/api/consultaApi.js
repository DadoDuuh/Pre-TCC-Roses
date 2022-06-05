import axios from 'axios'


const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function NovaConsulta(id, nome, nascimento, cpf, horario, data, preco, contato) {
    const resposta = api.post('/usuario/marcar', {
        id: id,
        nome: nome,
        cpf: cpf,
        nascimento: nascimento,
        preco: preco,
        data: data,
        hora: horario,  
        contato: contato
        })

    return resposta.data;
}