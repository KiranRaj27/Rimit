const router = require("express").Router();
const Student = require("../models/studentModel");
const Class = require("../models/classmodel");

// CREATE STUDENT
router.post("/student", async (req, res) => {
  const newStudent = new Student(req.body);
  try {
    const savedStudent = await newStudent.save();
    res.status(200).json(savedStudent);
  } catch (error) {
    res.status(500).json(error);
  }
});

// CREATE CLASS
router.post("/class", async (req, res) => {
  const newClass = new Class(req.body);
  try {
    const savedClass = await newClass.save();
    res.status(200).json(savedClass);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE STUDNT CLASS
router.put("/update/:id", async (req, res) => {
  try {
    const student = await Student.findOne();
  } catch (error) {}
});

// DELETE STUDENT AND POST
router.delete("/delete/:id", async (req, res) => {
  try {
    const student = await Student.findOne({ rollno: req.params.id });
    await student.delete();
    if (student) {
      res.status(200).json("Deleted student details");
    } else {
      res.status(400).json("Not found");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/delete/class/:id", async (req, res) => {
  try {
    const delclass = await Class.findOne({ rollno: req.params.id });
    await delclass.delete();
    if (delclass) {
      res.status(200).json("Deleted class details");
    } else {
      res.status(400).json("Not found");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// READ ALL STUDENTS IN A CLASS and Division
router.post("/view", async (req, res) => {
  const getclass = await Class.findOne({
    standerd: req.body.standerd,
    division: req.body.division,
  });
  const id = getclass.id;
  const student = await Student.find({ classId: id });
  res.status(200).json(student);
});

// READ ALL STUDENTS IN A CLASS STANDARD
router.post("/viewall", async (req, res) => {
  const getclass = await Class.findOne({
    standerd: req.body.standerd,
  });
  const id = getclass.id;
  const student = await Student.find({ classId: id });
  res.status(200).json(student);
});

module.exports = router;
