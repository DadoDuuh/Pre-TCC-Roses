import { con } from './connection.js'

export async function marcarConsulta (nome, cpf, preco, nascimento, contato) {
    const comando = `
    INSERT INTO tb_consulta (id_consulta, id_psicologo ,id_paciente, vl_preco, dt_consulta, ds_contato)
     VALUES (1, 1, 1, 450.20, 2006-05-06, 'email@email.com');`

     const [resp] = await con.query(comando, [nome, cpf, preco, nascimento, contato])
     return resp[0];
}