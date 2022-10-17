const studentsData = require('../data/studentData')



exports.findStudentById = async function(id){
    const student = await studentsData.getOneStudent(id)
    if(!student) throw new Erro ('Student not found!')
    return student
}
exports.saveStudents = function(student){
    return studentsData.postStudents(student)
}

exports.excludeStudent = function(id){
    return studentsData.deleteStudent(id) 
}

exports.updateStudent = async function(id, body){
    await exports.findStudentById(id)
    return studentsData.updateStudent(id, body)
}

exports.findStudents = function(school, room, score){
    
    if(!school && !room){return studentsData.getStudentsScore(score)}
    if(!school && !score){return studentsData.getStudentsClass(room)}
    if(!room && !score){return studentsData.getStudentsBySchool(school)}
    if(!school){return studentsData.getStudentsClassAndScore(room, score)}
    if(!room){return studentsData.getStudentsSchoolAndScore(school, score)}
    if(!score){return studentsData.getStudentsSchoolAndClass(school, room)}
    if(school && room && score) {return studentsData.getStudentsAllFilters(school, room, score)}

}




