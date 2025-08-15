const { getStudents, addStudent } = require("../data/student");

function getAllStudents() { 
  return getStudents();
}

function getStudentById(id) { 
  return getStudents().find((s) => s.id == id);
}

function createStudent(studentData) { 
  const newStudent = { id: Date.now(), ...studentData };
  addStudent(newStudent);
  return newStudent;
}

function getDashboardStats() { 
  const students = getStudents();
  return {
    totalStudents: students.length,
    activeStudents: students.filter((s) => s.status == "Active").length,
    inactiveStudents: students.filter((s) => s.status == "Inactive").length,
  };
}
module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    getDashboardStats
}