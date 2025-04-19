import courses from '../../data/courses';
import CourseCard from '../../components/Admin/CourseCard';

function ManageCourses() {
  return (
    <main>
      <h2>Manage Courses</h2>
      <div className="course-list">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </main>
  );
}

export default ManageCourses;
