const express = require('express');
const router = express.Router();
const { Course } = require('../models');

router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific course
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findOne({ courseId: req.params.id });
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new course (admin only)
router.post('/', async (req, res) => {
  const course = new Course({
    courseId: req.body.courseId,
    name: req.body.name,
    description: req.body.description,
    department: req.body.department,
    moderatorsCount: req.body.moderatorsCount || 0
  });

  try {
    const newCourse = await course.save();
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a course (admin only)
router.put('/:id', async (req, res) => {
  try {
    const course = await Course.findOneAndUpdate(
      { courseId: req.params.id },
      req.body,
      { new: true }
    );
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a course (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const course = await Course.findOneAndDelete({ courseId: req.params.id });
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json({ message: 'Course deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;