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
  { courseId: 1, name: 'SWE 363', description: 'Web Development', department: 'ICS', moderatorsCount: 3 }
];

const moderators = [
  { name: 'Ahmed AlHarthy', courses: [1, 3] }
];

const students = [
  { name: 'Yousef AlAli', courses: [1, 2] }
];

const users = [
  { 
    email: 'student@example.com', 
    password: '1234', 
    role: 'student' 
  },
  {
    email: 'moderator@example.com',
    password: '1234',
    role: 'moderator'
  },
  {
    email: 'admin@example.com',
    password: '1234',
    role: 'admin'
  }
];

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


    //HASHING GOES HERE LATER!!!!!!
    //for (const user of users) {
    //  const salt = await bcrypt.genSalt(10);
    //  const hashedPassword = await bcrypt.hash(user.password, salt);
    //  
    //  await User.create({
    //    email: user.email,
    //    password: hashedPassword,
    //    role: user.role
    //  });
    //}

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