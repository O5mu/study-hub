import './StudentCard.css';

function StudentCard({ student }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>Role: Student</p>
      <p>Courses: {student.courses+","}</p>
    </div>
  );
}

export default StudentCard;
