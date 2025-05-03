const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const { Course, Moderator, Student, User } = require('../models');

dotenv.config();

//MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas for seeding'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

  const courses = [
    { courseId: 1, name: 'SWE 363', description: 'Web Development', department: 'ICS' },
    { courseId: 2, name: 'COE 292', description: 'Digital Logic', department: 'COE' },
    { courseId: 3, name: 'ICS 202', description: 'Data Structures', department: 'ICS' },
    { courseId: 4, name: 'MATH 208', description: 'Calculus II', department: 'Math' },
    { courseId: 5, name: 'PHYS 101', description: 'General Physics', department: 'Physics' },
    { courseId: 6, name: 'CHEM 101', description: 'Intro to Chemistry', department: 'Chem' },
    { courseId: 7, name: 'ENGL 214', description: 'Tech Writing', department: 'English' },
    { courseId: 8, name: 'IAS 111', description: 'Islamic Studies', department: 'IAS' },
    { courseId: 9, name: 'STAT 319', description: 'Probability & Stats', department: 'Stat' },
    { courseId: 10, name: 'ICS 343', description: 'Operating Systems', department: 'ICS' },
  ];
  
  const moderators = [
    { name: 'Ahmed AlHarthy', courses: [1, 3] },
    { name: 'Fatimah AlZahrani', courses: [2, 5] },
    { name: 'Ali AlQahtani', courses: [4, 9] },
    { name: 'Mona AlShahrani', courses: [3, 10] },
    { name: 'Salem AlDossary', courses: [6] },
    { name: 'Rania AlShehri', courses: [7, 8] },
    { name: 'Tariq AlAmri', courses: [1, 2, 3] },
    { name: 'Lama AlOtaibi', courses: [10] },
    { name: 'Nasser AlHarbi', courses: [9] },
    { name: 'Sara AlAnazi', courses: [5, 7] },
  ];
  
  const students = [
    { name: 'Yousef AlAli', courses: [1, 2] },
    { name: 'Reem AlGhamdi', courses: [3, 4, 10] },
    { name: 'Abdullah AlShammari', courses: [5, 6] },
    { name: 'Nouf AlYami', courses: [1, 3, 7] },
    { name: 'Majed AlMutairi', courses: [8] },
    { name: 'Noura AlDosari', courses: [9, 10] },
    { name: 'Saad AlMarri', courses: [2, 5, 6] },
    { name: 'Huda AlShehri', courses: [3, 7, 8] },
    { name: 'Faisal AlQahtani', courses: [1, 4, 9] },
    { name: 'Laila AlFahad', courses: [10] },
  ];
  

const users = [];

async function seedData() {
  try {

    await Course.deleteMany({});
    await Moderator.deleteMany({});
    await Student.deleteMany({});
    await User.deleteMany({});

    console.log('Existing data cleared');

    await Course.insertMany(courses);
    console.log('Courses seeded');

    await Moderator.insertMany(moderators);
    console.log('Moderators seeded');

    await Student.insertMany(students);
    console.log('Students seeded');

    await User.insertMany(users);
    console.log('Users seeded');

    console.log('All data seeded successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding data:', error);
    mongoose.connection.close();
    process.exit(1);
  }
}

seedData();