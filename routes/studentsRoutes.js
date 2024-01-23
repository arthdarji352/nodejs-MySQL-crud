const express = require("express");
const {
  getStudents,
  getStudentById,
  createStudent,
} = require("../contollers/studentController");

//router object
const router = express.Router();

//routes
//get all students list
router.get("/getAll", getStudents);

//get student by ID
router.get("/get/:id", getStudentById);

//CREATE students
router.post("/create", createStudent);

module.exports = router;
