import resourceIcon from "../../assets/resource-icon.png";
import mentorIcon from "../../assets/mentor-icon.png";
import useApi from "../../hooks/useAPI";

function CourseCard() {
  const { data: courses, loading, error } = useApi('courses');
  const { data: moderators } = useApi('moderators');  // Fetch moderators as well

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Count the number of moderators for each course
  const countModeratorsForCourse = (courseId) => {
    return moderators?.filter(moderator => moderator.courses.includes(courseId)).length || 0;
  };

  return (
    <div className="courses-page">
      <h1 className="page-title">Courses</h1>
      <div className="card-container">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <div className="course-header">
              <h2 className="course-code">{course.name}</h2>
              <h3 className="course-title">{course.description}</h3>
              <h4 className="course-department">{course.department} Dept</h4>
            </div>
            
            <div className="course-stats">
            <div className="stat-item">
                <div className="stat-content">
                  <img src={mentorIcon} alt="Mentor" className="stat-icon" />
                  <span className="stat-label">Mentors</span>
                  <span className="stat-value">
                    {countModeratorsForCourse(course.courseId)} {/* Count moderators */}
                  </span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-content">
                  <img src={resourceIcon} alt="Resource" className="stat-icon" />
                  <span className="stat-label">Resources</span>
                  <span className="stat-value">{course.resourcesCount}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseCard;
