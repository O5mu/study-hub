const express = require('express');
const router = express.Router();
const { Student } = require('../models');

//Get all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get a specific student
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    
    // If student role, check if they're requesting their own record
    if (req.user.role === 'student' && req.user.id !== req.params.id) {
      return res.status(403).json({ message: 'Access denied' });
    }
    
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get students by course
router.get('/course/:courseId', async (req, res) => {
  try {
    const students = await Student.find({ courses: Number(req.params.courseId) });
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Create a new student (admin only)
router.post('/', async (req, res) => {
  const student = new Student({
    name: req.body.name,
    courses: req.body.courses || []
  });

  try {
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Update a student (admin or self)
router.put('/:id', async (req, res) => {
  try {
    // Check if student is updating their own record
    if (req.user.role === 'student' && req.user.id !== req.params.id) {
      return res.status(403).json({ message: 'Access denied' });
    }
    
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    
    res.json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Delete a student (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json({ message: 'Student deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Enroll student in a course
router.post('/:id/enroll/:courseId', async (req, res) => {
  try {
    // Check if student is enrolling themselves
    if (req.user.role === 'student' && req.user.id !== req.params.id) {
      return res.status(403).json({ message: 'Access denied' });
    }
    
    const courseId = Number(req.params.courseId);
    const student = await Student.findById(req.params.id);
    
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    
    if (student.courses.includes(courseId)) {
      return res.status(400).json({ message: 'Student already enrolled in this course' });
    }
    
    student.courses.push(courseId);
    await student.save();
    
    res.json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Remove student from a course
router.delete('/:id/enroll/:courseId', async (req, res) => {
  try {
    // Check if student is unenrolling themselves
    if (req.user.role === 'student' && req.user.id !== req.params.id) {
      return res.status(403).json({ message: 'Access denied' });
    }
    
    const courseId = Number(req.params.courseId);
    const student = await Student.findById(req.params.id);
    
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    
    if (!student.courses.includes(courseId)) {
      return res.status(400).json({ message: 'Student not enrolled in this course' });
    }
    
    student.courses = student.courses.filter(c => c !== courseId);
    await student.save();
    
    res.json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;