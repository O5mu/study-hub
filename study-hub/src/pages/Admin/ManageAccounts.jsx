import moderators from '../../data/moderators';
import students from '../../data/students';
import ModeratorCard from '../../components/Admin/ModeratorCard';
import StudentCard from '../../components/Admin/StudentCard';

function ManageAccounts() {
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
