const database = require('../infra/database')

exports.getStudentsBySchool = function (school){
    return database.query(`SELECT * FROM yalo_aluno where id_colegio = ${school};`)
}
exports.getStudentsClass = function (room){
    return database.query(`SELECT * FROM yalo_aluno where id_turma = ${room};`)
}
exports.getStudentsScore = function (score){
    return database.query(`SELECT * FROM yalo_aluno where score = ${score};`)
}
exports.getStudentsSchoolAndScore = function (school,score){
    return database.query(`SELECT * FROM yalo_aluno where score = ${score} and id_colegio = ${school}; `)
}
exports.getStudentsClassAndScore = function (room,score){
    return database.query(`SELECT * FROM yalo_aluno where score = ${score} and id_turma = ${room};`)
}
exports.getStudentsAllFilters = function (school, room, score){
    return database.query(`SELECT * FROM yalo_aluno where score = ${score} and id_colegio = ${school} and id_turma = ${room} ;`)
}
exports.getStudentsSchoolAndClass = function (school, room){
    return database.query(`SELECT * FROM yalo_aluno where id_colegio = ${school} and id_turma = ${room} ;`)
}

exports.getOneStudent = function (id){
    return database.one(`SELECT * FROM yalo_aluno where id = ${id};`)
}

exports.postStudents = function(student){
    return  database.one(`INSERT INTO yalo_aluno (id, cpf, name, email, id_colegio, id_turma, score) VALUES (${student.id}, '${student.cpf}','${student.name}','${student.email}',${student.id_colegio},${student.id_turma},${student.score}) returning *;`)
}

exports.deleteStudent = function(id){
    return database.none(`DELETE FROM yalo_aluno where id = ${id};`)
}
exports.updateStudent = function(id, body){
    return database.none(`UPDATE yalo_aluno SET cpf = '${body.cpf}', name = '${body.name}', email = '${body.email}', id_colegio = ${body.id_colegio}, id_turma = ${body.id_turma}, score = ${body.score} where id = ${id};`)
}