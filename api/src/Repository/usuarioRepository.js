import {con} from './connection.js'

export async function login(email, senha){
    const comando =
    `SELECT id_psicologo 		id,
    nm_psicologo		        nome,
    ds_email			        email
    FROM tb_psicologo
    WHERE ds_email 		        = ?
    AND ds_senha			    = ?;`

    const [resp] = await con.query(comando, [email, senha])
    return resp[0];
}

