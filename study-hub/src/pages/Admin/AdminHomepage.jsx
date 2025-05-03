import { useNavigate } from 'react-router-dom';
import CourseCard from '../../components/Admin/CourseCard';
import ModeratorCard from '../../components/Admin/ModeratorCard';
import students from '../../data/students';
import StudentCard from '../../components/Admin/StudentCard';
import './AdminHomepage.css';
import useApi from '../../hooks/useAPI';

function AdminHomepage() {
  const navigate = useNavigate();

  const { data: courses, loading: cLoading, error: cError } = useApi('courses');
  const { data: moderators, loading: mLoading, error: mError } = useApi('moderators');

  const handleSignOut = () => {
    navigate('/login');
  };

  if (cLoading || mLoading) return <div>Loading...</div>;
  if (cError || mError) return <div>Error: {cError || mError}</div>;

  return (
    <main>
      <div className="top-bar">
        <button onClick={handleSignOut} className="signout-btn">Sign Out</button>
      </div>

      <h2>Courses</h2>
      <div className="course-scroll">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} moderators={moderators} />
        ))}
      </div>

      <h2>Moderators</h2>
      <div className="moderator-scroll">
        {moderators.map((m, index) => (
          <ModeratorCard key={index} moderator={m} courses={courses} />
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
