import './ModeratorCard.css';

function ModeratorCard({ moderator, courses }) {
  const assignedCourses = courses.filter(c => moderator.courses?.includes(c.courseId));

  return (
    <div className="moderator-card">
      <h3>{moderator.name}</h3>
      <p>Role: Moderator</p>
      <p>
        Courses: {assignedCourses.length > 0
          ? assignedCourses.map(c => c.name).join(', ')
          : 'None'}
      </p>
    </div>
  );
}

export default ModeratorCard;
