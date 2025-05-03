import { useNavigate } from 'react-router-dom';
import CourseCard from '../../components/Admin/CourseCard';
import ModeratorCard from '../../components/Admin/ModeratorCard';
import StudentCard from '../../components/Admin/StudentCard';
import './AdminHomepage.css';
import useApi from '../../hooks/useAPI';

function ManageAccounts() {

  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate('/login');
  };

  const { data: moderators, loading: mLoading, error: mError } = useApi('moderators');
  const { data: students, loading: sLoading, error: sError } = useApi('students');

  if (mLoading || sLoading) return <div>Loading...</div>;
  if (mError || sError) return <div>Error: {mError || sError}</div>;


  return (
    <main>
      <h2>Moderators</h2>
      <div className="moderator-list">
        {moderators.map((m, i) => (
          <ModeratorCard key={i} moderator={m} />
        ))}
      </div>

      <h2>Students</h2>
      <div className="student-list">
        {students.map((s, i) => (
          <StudentCard key={i} student={s} />
        ))}
      </div>
    </main>
  );
}

export default ManageAccounts;
