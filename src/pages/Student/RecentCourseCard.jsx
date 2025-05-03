import resourceIcon from "../../assets/resource-icon.png";
 import mentorIcon from "../../assets/mentor-icon.png";
 function RecentCourseCard(){
     const courses = [
         {code:"SWE363",title:"Web Engineering & Development",department:"ICS",mentors:11,resources:14},
         {code:"COE202",title:"Digital Logic",department:"COE",mentors:4,resources:6}
 
     ]
    //  return(
    //  <div>
    //      <h1>Courses</h1>
    //      <div className="cardContainer">
    //      {courses.map((course,index) => (
    //      <div className="courseContainer">

    //         <div className="column single-item">
    //          <h2>{course.code}</h2>
    //          </div>

    //          <div className="column single-item">
    //          <h3>{course.title}</h3>
    //          </div>

    //          <div className="column single-item">
    //          <h4>{course.department} Dept</h4>
    //          </div>

    //          <div className="column double-item">
    //          <img src={resourceIcon} alt="resource icon"/>
    //          <p>Resources {course.resources}</p>
    //          </div>

    //          <div className="column double-item">
    //          <img src={mentorIcon} alt="mentor icon"/>
    //          <p>Mentors {course.mentors}</p>
    //          </div>
    //      </div>
    //      ))} 
    //      </div>
         
    //  </div>
    //  );

    return (
        <div className="courses-page">
          <h1 className="page-title">Recent Courses</h1>
          <div className="card-container">
            {courses.map((course, index) => (
              <div className="course-card" key={index}>
                <div className="course-header">
                  <h2 className="course-code">{course.code}</h2>
                  <h3 className="course-title">{course.title}</h3>
                  <h4 className="course-department">{course.department} Dept</h4>
                </div>
                
                <div className="course-stats">
                  <div className="stat-item">
                    <div className="stat-content">
                      <img src={resourceIcon} alt="Resource" className="stat-icon" />
                      <span className="stat-label">Resources</span>
                      <span className="stat-value">{course.resources}</span>
                    </div>
                  </div>
                  
                  <div className="stat-item">
                    <div className="stat-content">
                      <img src={mentorIcon} alt="Mentor" className="stat-icon" />
                      <span className="stat-label">Mentors</span>
                      <span className="stat-value">{course.mentors}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
 }
 export default RecentCourseCard;