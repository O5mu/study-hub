const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  courseId: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  }
}, { timestamps: true });

const moderatorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  courses: [{
    type: Number,
    ref: 'Course'
  }]
}, { timestamps: true });

const studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  courses: [{
    type: Number,
    ref: 'Course'
  }]
}, { timestamps: true });

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['student', 'moderator', 'admin'],
    required: true
  }
}, { timestamps: true });

// Create models
const Course = mongoose.model('Course', courseSchema);
const Moderator = mongoose.model('Moderator', moderatorSchema);
const Student = mongoose.model('Student', studentSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
  Course,
  Moderator,
  Student,
  User
};