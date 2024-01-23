const db = require("../config/db");

//get all students
const getStudents = async (req, res) => {
  try {
    const data = await db.query("SELECT * from students");
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "No records found",
      });
    }
    res.status(200).send({
      success: true,
      message: "all students found",
      totalSTudents: data[0].length,
      data: data[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Get all studensts APi",
      error,
    });
  }
};

const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    // const data = await db.query(`SELECT * from students WHERE id=` + id);
    const data = await db.query(`SELECT * FROM students WHERE id=?`, [id]);
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "No records found",
      });
    }
    res.status(200).send({
      success: true,
      message: "students found",
      studentData: data[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Get studenst by id APi",
      error,
    });
  }
};
const createStudent = async (req, res) => {
  try {
    const { name, roll_no, fees, medium } = req.body;
    if (!name || !roll_no || !fees || !medium) {
      res.status(500).send({
        success: false,
        message: "Please provide all fields",
      });
    }

    const data = await db.query(
      `INSERT INTO STUDENTS (name,roll_no,fees,medium) VALUES (? , ? , ? , ? )`,
      [name, roll_no, fees, medium]
    );
    if (!data) {
      res.status(404).send({
        success: false,
        message: "Error in INSERT QUERY",
      });
    }
    res.status(201).send({
      success: true,
      message: "students created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in create studenst  APi",
      error,
    });
  }
};

module.exports = { getStudents, getStudentById, createStudent };
