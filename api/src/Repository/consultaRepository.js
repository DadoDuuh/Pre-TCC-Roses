import { con } from './connection.js'

export async function marcarConsulta(agendamento) {
    const comando = `
    INSERT INTO tb_consulta (id_psicologo ,nm_paciente, ds_cpf, dt_nascimento, vl_preco, dt_consulta, hr_consulta, ds_contato)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`

    const [resp] = await con.query(comando, [agendamento.id, agendamento.nome, agendamento.cpf, agendamento.nascimento, agendamento.preco, agendamento.data, agendamento.horario, agendamento.contato])
    agendamento.consulta = resp.insertId
    return agendamento;
}

export async function ConsultarTodos() {
    const comando = `
    SELECT id_consulta		consulta,
       id_psicologo		    id,
       nm_paciente 		    nome,
       ds_cpf 			    cpf,
       dt_nascimento	    nascimento,
	   vl_preco		        preco,
       dt_consulta	        data,
       hr_consulta		    horario,
       ds_contato 		    contato,
       ds_anotacoes 	    anotacoes
       FROM tb_consulta`

    const [linhas] = await con.query(comando)
    return linhas;
}

export async function ConsultarMarcadas() {
    const comando = `
    SELECT id_consulta		consulta,
       id_psicologo		    id,
       nm_paciente 		    nome,
       ds_cpf 			    cpf,
       dt_nascimento	    nascimento,
	   vl_preco		        preco,
       dt_consulta	        data,
       hr_consulta		    horario,
       ds_contato 		    contato,
       ds_anotacoes 	    anotacoes
       FROM tb_consulta
       WHERE dt_consulta > CURDATE();`

    const [linhas] = await con.query(comando)
    return linhas;
}


export async function DeletarConsulta(consulta) {
    const comando = `
    DELETE FROM tb_consulta 
    WHERE id_consulta = ?`

    const [resposta] = await con.query(comando, [consulta])
    return resposta.affectedRows

}

export async function alterarConsulta(consulta, agendamento) {
    const comando = `
    UPDATE tb_consulta		
    SET nm_paciente 		    = ?,
    ds_cpf 			        = ?,
    dt_nascimento	        = ?,
    vl_preco		        = ?,
    dt_consulta	            = ?,
    hr_consulta		        = ?,
    ds_contato 		        = ?
    WHERE id_consulta = ?`
    const [resposta] = await con.query(comando, [agendamento.nome, agendamento.cpf, agendamento.nascimento, agendamento.preco, Number(agendamento.data), agendamento.horario, agendamento.contato, consulta])
    return resposta.affectedRows
}
export async function incluirAnotações(consulta, agendamento) {
    const comando = `
    UPDATE tb_consulta	
	SET ds_anotacoes =  ? 
	WHERE id_consulta = ?`

    const [resposta] = await con.query(comando, [agendamento.anotacoes, consulta])
    return resposta.affectedRows
}
export async function FiltrarPorCPF(cpf) {
    const comando = `
    SELECT id_consulta		consulta,
    id_psicologo		    id,
    nm_paciente 		    nome,
    ds_cpf 			        cpf,
    dt_nascimento	        nascimento,
    vl_preco		        preco,
    dt_consulta	            data,
    hr_consulta		        horario,
    ds_contato 		        contato,
    ds_anotacoes 	        anotacoes
    FROM tb_consulta
    WHERE ds_cpf		    like ?`

    const [linhas] = await con.query(comando, [`%${cpf}%`])
    return linhas
}

export async function buscarPorConsulta(consulta) {
    const comando = `
    select id_consulta 	consulta, 
        id_psicologo		id,
        nm_paciente	 		nome,
        ds_cpf				cpf,
        dt_nascimento	nascimento,
        vl_preco		     preco,
        dt_consulta	           data,
        hr_consulta		    horario,
        ds_contato 		    contato,
        ds_anotacoes 	    anotacoes
        from tb_consulta 
    where id_consulta = ? `

    const [linhas] = await con.query(comando, [consulta]);
    return linhas[0];
}

export async function FiltrarArquivadasPorCPF(cpf) {
    const comando = `
    SELECT id_consulta		consulta,
    id_psicologo		    id,
    nm_paciente 		    nome,
    ds_cpf 			        cpf,
    dt_nascimento	        nascimento,
    vl_preco		        preco,
    dt_consulta	            data,
    hr_consulta		        horario,
    ds_contato 		        contato,
    ds_anotacoes 	        anotacoes
    FROM tb_consulta
    WHERE ds_cpf		    like ? 
    and dt_consulta < CURDATE();`

    const [linhas] = await con.query(comando, [`%${cpf}%`])
    return linhas
}

export async function ConsultarArquivadas() {
    const comando = `
    SELECT id_consulta		consulta,
    id_psicologo		    id,
    nm_paciente 		    nome,
    ds_cpf 			        cpf,
    dt_nascimento	        nascimento,
    vl_preco		        preco,
    dt_consulta	            data,
    hr_consulta		        horario,
    ds_contato 		        contato,
    ds_anotacoes 	        anotacoes
    FROM tb_consulta
    WHERE dt_consulta < CURDATE();`

    const [linhas] = await con.query(comando)
    return linhas
}

export async function ConsultarData() {
    const comando = `
    SELECT CURDATE();`

    const [linhas] = await con.query(comando)
    return linhas
}