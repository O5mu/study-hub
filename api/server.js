const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const courseRoutes = require('./routes/courseRoutes');
const moderatorRoutes = require('./routes/moderatorRoutes');
const studentRoutes = require('./routes/studentRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('DB Connected'))
  .catch(err => console.error('DB FAILED TO CONNECT!:', err));

app.use('/api/courses', courseRoutes);
app.use('/api/moderators', moderatorRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Course Management API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});