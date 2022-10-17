CREATE DATABASE yalo_aluno

CREATE TABLE public.yalo_aluno (
	id int NOT NULL,
	cpf varchar NOT NULL,
	name varchar NOT NULL,
	email varchar NULL DEFAULT null,
	id_colegio int NOT NULL,
	id_turma varchar NOT NULL,
	socore int NULL DEFAULT 0,
	CONSTRAINT yalo_aluno_id UNIQUE (id)
	CONSTRAINT yalo_aluno_id UNIQUE (cpf)
);