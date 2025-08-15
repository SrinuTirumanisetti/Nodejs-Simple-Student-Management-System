let students = []; 
module.exports = {
  getStudents: () => {
    if (students.length == 0) {
      throw new Error("No students found");
    }
    return students;
  },
  setStudents: (newStudents) => {
    students = newStudents;
  },
  addStudent: (student) => {
    students.push(student);
  },
};
