USE Roses;

-- carga inicial usuário psicologo
INSERT INTO tb_psicologo (nm_psicologo, ds_email, ds_senha)
     VALUES ('admin', 'admin@admin.com.br', '1234');
     
-- CSU01:: efetuar login
SELECT id_psicologo 		id,
       nm_psicologo			nome,
       ds_email			    email
  FROM tb_psicologo
 WHERE ds_email 		 = 'admin@admin.com.br'
   AND ds_senha			 = '1234';
   


     select id_consulta 	consulta, 
          id_psicologo		id,
     nm_paciente	 		nome,
          ds_cpf				cpf,
          dt_nascimento	nascimento,
          vl_preco		     preco,
          dt_consulta	     dataconsulta,
          hr_consulta		horario,
          ds_contato 		contato,
          ds_anotacoes 	anotacoes
     from tb_consulta 
     where id_consulta = 23;



 -- CSU08:: consultar as proximas consultas       
SELECT id_consulta		idconsulta,
       id_psicologo		idpsicologo,
       nm_paciente 		nome,
       ds_cpf 			cpf,
       dt_nascimento	nascimento,
	   vl_preco		    preco,
       dt_consulta	    dataconsulta,
       hr_consulta		horario,
       ds_contato 		contato,
       ds_anotacoes 	anotacoes
  FROM tb_consulta;

   SELECT id_consulta		idconsulta,
       id_psicologo		idpsicologo,
       nm_paciente 		nome,
      ds_cpf 			cpf,
      dt_nascimento	nascimento,
  	   vl_preco		    preco,
       dt_consulta	    dataconsulta,
       hr_consulta		horario,
       ds_contato 		contato,
       ds_anotacoes 	anotacoes
  FROM tb_consulta
  WHERE dt_consulta > CURDATE();
  

-- CSU03:: marcar consulta
INSERT INTO tb_consulta (id_psicologo ,nm_paciente, ds_cpf, dt_nascimento, vl_preco, dt_consulta, hr_consulta, ds_contato)
     VALUES (1, "Jennifer Oliveira de Sousa", "544.598.158-42", "2006-06-11", 150.50, "2022-06-20", "14:00:00", 'email@email.com');






-- CSU04:: remover consulta
DELETE FROM tb_consulta 
      WHERE id_consulta = 1;



-- CSU05:: alterar consulta
UPDATE tb_consulta		
    SET nm_paciente 		= "sadsasa",
    ds_cpf 			        = "123.456.789-12",
    dt_nascimento	        = "2000-01-01",
    vl_preco		        = 150.50,
    dt_consulta	            = "2000-01-01",
    hr_consulta		        = "14:00:00",
    ds_contato 		        = "email@email.com"
    WHERE id_consulta = 1;


  
-- CSU06:: incluir anotações
UPDATE tb_consulta	
	SET ds_anotacoes = 'oi' 
	WHERE id_consulta = 8;


-- CSU07:: pesquisar consulta por cpf
SELECT id_consulta		consulta,
       id_psicologo		id,
       nm_paciente 		nome,
       ds_cpf 			cpf,
       dt_nascimento	nascimento,
	   vl_preco		    preco,
       dt_consulta	    dataconsulta,
       hr_consulta		horario,
       ds_contato 		contato,
       ds_anotacoes 	anotacoes
	FROM tb_consulta
	WHERE ds_cpf		like '544.598.158-42';
 

 
-- CSU08:: consultar as consultas arquivadas      
SELECT id_consulta		idconsulta,
       id_psicologo		idpsicologo,
       nm_paciente 		nome,
       ds_cpf 			cpf,
       dt_nascimento	nascimento,
	   vl_preco		    preco,
       dt_consulta	    dataconsulta,
       hr_consulta		horario,
       ds_contato 		contato,
       ds_anotacoes 	anotacoes
  FROM tb_consulta;
