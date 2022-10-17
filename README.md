# yalo-estudantes
Teste Técnico Yalo

	Cadasto de estudantes

	Técnologias Utilizadas
	- NodeJs
	- Postgres
	- Express

	Como executar:

	Deverá ser acessada a pasta 'server', então no terminal digitar o comando:
	
	node server

	Com a aplicação executando, poderão ser utilizados simuladores de API's como
Postman ou Insomia, para acessar as rotas.
	Na pasta raiz consta o arquivo postman.json para importação das rotas utilizadas no
Postman, necessitando apenas ser importado.

	Também, conforme solicitado, há um arquivo .SQL com o script de criação do Banco de Dados.

	As rotas foram criadas de acordo com a tarefa, seguindo da seguinte forma:

	- Rota para listagem de estudantes(GET): /students?id_colegio&id_turma&score
			(valores passados por query params)

	- Busca por estudante(GET): /students/:id
			(deverá ser informado o ID do estudante por parametro)
	- Cadastro de Estudante(POST):/students
			(cadastro baseado nos valores enviados pelo Body da requisição)
			{
    				"id": 78,
				"cpf": "254123695",
				"name": "josé silva",
				"email": "jose@silva.com",
				"id_colegio": 2,
				"id_turma": 5,
				"score": 8

			}
	- Autualização de cadastro(PUT): /students/:id
			(Além do ID a ser alterado, deverá ser enviado Body com as alterações)
	- Exclusão do cadastro(DELETE): /students/:id
			(Deverá ser informado o ID a ser excluído)
	
	Todos critérios prospostos foram atendidos.
