USE Roses;

-- carga inicial usuário psicologo
INSERT INTO tb_psicologo (nm_psicologo, ds_email, ds_senha)
     VALUES ('admin', 'admin@admin.com.br', '1234');
     
-- CSU01:: efetuar login
SELECT id_psicologo 		id,
       nm_psicologo		    nome,
       ds_email			    email
  FROM tb_psicologo
 WHERE ds_email 		 = 'admin@admin.com.br'
   AND ds_senha			 = '1234';
   

 -- CSU08:: consultar as proximas consultas       
SELECT id_consulta		idconsulta,
       id_psicologo		idpsicologo,
       id_paciente		idpaciente,
	   vl_preco		    preco,
       dt_consulta	    dataconsulta,
       ds_anotacoes 	anotacoes
  FROM tb_consulta;
  

-- CSU03:: marcar consulta
INSERT INTO tb_consulta (id_consulta, id_psicologo ,id_paciente, vl_preco, dt_consulta, ds_contato)
     VALUES (1, 1, 1, 450.20, 2006-05-06, 'email@email.com');






-- CSU04:: remover consulta
DELETE FROM tb_consulta 
      WHERE id_consulta = 1;




-- CSU05:: consultar as consultas arquivadas      
SELECT id_consulta		idconsulta,
       id_psicologo		idpsicologo,
       id_paciente		idpaciente,
	   vl_preco		    preco,
       dt_consulta	    dataconsulta,
       ds_anotacoes 	anotacoes
  FROM tb_consulta;
  



-- CSU06:: pesquisar consulta por cpf
SELECT id_consulta		idconsulta,
       id_psicologo		idpsicologo,
       ds_cpf		    cpfpaciente,
	   vl_preco		    preco,
       dt_consulta	    dataconsulta,
       ds_anotacoes 	anotacoes
	FROM tb_consulta
	WHERE ds_cpf		like '123.456.789-10';
 


  
-- CSU07:: incluir anotações
INSERT INTO tb_consulta	(ds_anotacoes)
	VALUES ('anotacoes');