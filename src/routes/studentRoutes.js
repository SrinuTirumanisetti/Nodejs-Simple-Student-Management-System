const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router.get("/students", studentController.getStudents); 
router.post("/students", studentController.addStudent); 
router.get("/students/:id",studentController.getStudent);
router.get("/dashboard/stats",studentController.getStats); 

module.exports = router;