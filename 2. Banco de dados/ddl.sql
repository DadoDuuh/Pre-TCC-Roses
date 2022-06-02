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
    create table tb_paciente(
        id_paciente            int primary key auto_increment,
        nm_paciente            varchar(200),
        ds_cpf                 varchar(14),
        dt_nasc                date,
        ds_contato             varchar(200)
    );
    create table tb_consulta(
        id_consulta            int primary key auto_increment,
        id_psicologo           int,
        id_paciente            int,
        vl_preco               decimal(15,4),
        dt_consulta            datetime,
        ds_anotacoes           varchar(500),
        foreign key (id_psicologo) references tb_psicologo(id_psicologo),
        foreign key (id_paciente) references tb_paciente(id_paciente)
    );