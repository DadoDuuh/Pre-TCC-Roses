 create database Roses;
    use Roses;
    create table tb_psicologo(
        id_psicologo           int primary key auto_increment,
        nm_psicologo           varchar(200),
        ds_cpf                 varchar(14),
        dt_nasc                date,
        ds_email               varchar(200),
        ds_senha               varchar(200)
    );

    create table tb_consulta(
        id_consulta            int primary key auto_increment,
        id_psicologo        int,
        nm_paciente			varchar(200),
        ds_cpf              varchar(14),
        dt_nascimento 		date,
        vl_preco            decimal(15,4),
        dt_consulta         date,
        hr_consulta			time,
        ds_contato			varchar(200),
        ds_anotacoes        varchar(1000),
        foreign key (id_psicologo) references tb_psicologo(id_psicologo)
    );