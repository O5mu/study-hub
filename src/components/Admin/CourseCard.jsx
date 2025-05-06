import './CourseCard.css';

function CourseCard({ course, moderators }) {
  const mentorCount = moderators.filter(m =>
    m.courses?.includes(course.courseId)
  ).length;

  return (
    <div className="course-card">
      <h3 className="course-code">{course.name}</h3>
      <p className="course-title">{course.description}</p>
      <p className="course-dept">{course.department}</p>
      <p className="course-mentors">Mentors: {mentorCount}</p>
    </div>
  );
}

export default CourseCard;
