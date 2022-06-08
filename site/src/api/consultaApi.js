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