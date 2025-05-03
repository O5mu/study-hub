import './CourseCard.css';

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <h3 className="course-code">{course.name}</h3>
      <p className="course-title">{course.description}</p>
      <p className="course-dept">{course.department}</p>
      <p className="course-mentors">Mentors: {course.mentors}</p>
    </div>
  );
}

export default CourseCard;
