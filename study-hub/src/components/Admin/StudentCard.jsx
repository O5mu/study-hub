import './StudentCard.css';

function StudentCard({ student , courses }) {

  const assignedCourses = courses.filter(course =>
    student.courses?.includes(course.courseId)
  );

  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>Role: Student</p>
      <p>Courses: {assignedCourses.length > 0 
        ? assignedCourses.map(course => course.name).join(', ') 
        : 'No courses assigned'}</p>
    </div>
  );
}

export default StudentCard;
