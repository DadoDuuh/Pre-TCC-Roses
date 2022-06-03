import { con } from './connection.js'

export async function buscarPCPF (cpf) {
    const comando = `
    SELECT id_consulta	idconsulta,
    id_psicologo		idpsicologo,
    ds_cpf		        cpfpaciente,
    vl_preco		    preco,
    dt_consulta	        dataconsulta,
    ds_anotacoes 	    anotacoes
    FROM tb_consulta
    WHERE ds_cpf		like ?;`   

    const resp = await con.query(comando, [cpf])
    return resp;

}