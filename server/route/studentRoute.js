const express = require ('express')

const router = express.Router()

const studentsService = require('../service/studentsService')

router.get('/students', async function(req, res){

   const students = await studentsService.findStudents(req.query.id_colegio, req.query.id_turma, req.query.score)

   res.json(students)
})
router.get('/students/:id', async function(req, res){
    const oneStudent = await studentsService.findStudentById(req.params.id)
    return res.json(oneStudent)
})

router.post('/students', async function(req, res){
    const student = req.body

    try {
        const newStudent = await studentsService.saveStudents(student)
    
        res.status(201).json(newStudent)
        
    } catch (error) {
        res.status(409).send(error.message)
    }
})
router.put('/students/:id', async function(req, res){
    const body = req.body
    try {
        await studentsService.updateStudent(req.params.id, body)
        res.status(204).end()
        
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.delete('/students/:id', async function(req, res){
    const id = req.params.id
    await studentsService.excludeStudent(id)
    res.status(204).end()
})


module.exports = router