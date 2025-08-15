const studentService = require("../services/studentService");

function getStudents(req,res){ // retrive all the students
    res.json(studentService.getAllStudents())
}

function getStudent(req,res){
    const student = studentService.getStudentById(req.params.id);
    if(student){
        res.json(student);
    }else{
        res.status(404).json({message:"student not found"});
    }
}

function addStudent(req,res){ 
    const newStudent = studentService.createStudent(req.body);
    res.status(201).json(newStudent);
}

function getStats(req,res){ 
    res.json(studentService.getDashboardStats());
}

module.exports = {
    getStudents,
    getStudent,
    addStudent,
    getStats
}