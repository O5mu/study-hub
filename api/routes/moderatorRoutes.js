const express = require('express');
const router = express.Router();
const { Moderator, Course } = require('../models');

//Get all mods
router.get('/', async (req, res) => {
  try {
    const moderators = await Moderator.find();
    res.json(moderators);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get a specific mod
router.get('/:id', async (req, res) => {
  try {
    const moderator = await Moderator.findById(req.params.id);
    if (!moderator) {
      return res.status(404).json({ message: 'Moderator not found' });
    }
    res.json(moderator);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get mods by course
router.get('/course/:courseId', async (req, res) => {
  try {
    const moderators = await Moderator.find({ courses: Number(req.params.courseId) });
    res.json(moderators);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Create a new mod (admin only)
router.post('/', async (req, res) => {
  const moderator = new Moderator({
    name: req.body.name,
    courses: req.body.courses || []
  });

  try {
    const newModerator = await moderator.save();
    
    // Update moderator count for each course
    if (req.body.courses && req.body.courses.length > 0) {
      for (const courseId of req.body.courses) {
        await Course.findOneAndUpdate(
          { courseId: courseId },
          { $inc: { moderatorsCount: 1 } }
        );
      }
    }
    
    res.status(201).json(newModerator);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Update a mod
router.put('/:id', async (req, res) => {
  try {
    //First get the existing moderator to check course changes
    const existingModerator = await Moderator.findById(req.params.id);
    if (!existingModerator) {
      return res.status(404).json({ message: 'Moderator not found' });
    }
    
    const oldCourses = existingModerator.courses || [];
    const newCourses = req.body.courses || [];
    
    //Update the moderator
    const moderator = await Moderator.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    
    //Update course moderator counts
    const coursesToDecrement = oldCourses.filter(c => !newCourses.includes(c));
    const coursesToIncrement = newCourses.filter(c => !oldCourses.includes(c));
    
    for (const courseId of coursesToDecrement) {
      await Course.findOneAndUpdate(
        { courseId: courseId },
        { $inc: { moderatorsCount: -1 } }
      );
    }
    
    for (const courseId of coursesToIncrement) {
      await Course.findOneAndUpdate(
        { courseId: courseId },
        { $inc: { moderatorsCount: 1 } }
      );
    }
    
    res.json(moderator);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Delete a mod
router.delete('/:id', async (req, res) => {
  try {
    const moderator = await Moderator.findById(req.params.id);
    if (!moderator) {
      return res.status(404).json({ message: 'Moderator not found' });
    }
    
    // Decrement moderator count for each course
    if (moderator.courses && moderator.courses.length > 0) {
      for (const courseId of moderator.courses) {
        await Course.findOneAndUpdate(
          { courseId: courseId },
          { $inc: { moderatorsCount: -1 } }
        );
      }
    }
    
    await Moderator.findByIdAndDelete(req.params.id);
    res.json({ message: 'Moderator deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;