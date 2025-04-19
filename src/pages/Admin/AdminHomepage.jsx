import { useNavigate } from 'react-router-dom';
import courses from '../../data/courses';
import CourseCard from '../../components/Admin/CourseCard';
import moderators from '../../data/moderators';
import ModeratorCard from '../../components/Admin/ModeratorCard';
import students from '../../data/students';
import StudentCard from '../../components/Admin/StudentCard';
import './AdminHomepage.css';

function AdminHomepage() {
  const navigate = useNavigate();

const handleSignOut = () => {
  navigate('/login');
};
  return (
    <main>

      <div className="top-bar">
  <button onClick={handleSignOut} className="signout-btn">Sign Out</button>
</div>

      <h2>Courses</h2>
<div className="course-scroll">
  {courses.map((course, index) => (
    <CourseCard key={index} course={course} />
  ))}
</div>

<h2>Moderators</h2>
<div className="moderator-scroll">
  {moderators.map((m, i) => (
    <ModeratorCard key={i} moderator={m} />
  ))}
</div>

<h2>Students</h2>
<div className="student-scroll">
  {students.map((s, i) => (
    <StudentCard key={i} student={s} />
  ))}
</div>

    </main>
  );
}

export default AdminHomepage;