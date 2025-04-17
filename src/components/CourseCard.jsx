import resourceIcon from "../assets/resource-icon.png";
import mentorIcon from "../assets/mentor-icon.png";
function CourseCard(){
    const courses = [
        {code:"SWE363",title:"Web Engineering & Development",department:"ICS",mentors:11,resources:14},
        {code:"ICS253",title:"Discrete Mathmatics",department:"ICS",mentors:9,resources:12},
        {code:"COE202",title:"Digital Logic",department:"COE",mentors:4,resources:6},

    ]
    return(
    <div>
        <h1>Courses</h1>
        <div className="cardContainer">
        {courses.map((course,index) => (
        <div className="courseContainer">
            <h2>{course.code}</h2>
            <h3>{course.title}</h3>
            <h4>{course.department} Dept</h4>
            <img src={resourceIcon} alt="resource icon"/>
            <p>Resources {course.resources}</p>
            <img src={mentorIcon} alt="mentor icon"/>
            <p>Mentors {course.mentors}</p>
        </div>
        ))} 
        </div>
        
    </div>
    );
}
export default CourseCard;

// function CourseCard() {
//     const courses = [
//       {
//         code: "SWE363",
//         title: "Web Engineering & Development",
//         department: "ICS",
//         mentors: 11,
//         resources: 14,
//       },
//       {
//         code: "ICS253",
//         title: "Discrete Mathematics",
//         department: "ICS",
//         mentors: 9,
//         resources: 12,
//       },
//       {
//         code: "COE202",
//         title: "Digital Logic",
//         department: "COE",
//         mentors: 4,
//         resources: 6,
//       },
//     ];
  
//     return (
//       <div>
//         <h1 className="title">Courses</h1>
//         <div className="cardContainer">
//           {courses.map((course, index) => (
//             <div className="courseCard" key={index}>
//               <h2>{course.code}</h2>
//               <h3>{course.title}</h3>
//               <p className="department">{course.department} Dept</p>
  
//               <div className="infoGroup">
//                 <span className="label">Resources</span>
//                 <div className="barContainer">
//                   <div
//                     className="barFill"
//                     style={{ width: `${course.resources * 5}%` }}
//                   ></div>
//                 </div>
//                 <span className="count">{course.resources}</span>
//               </div>
  
//               <div className="infoGroup">
//                 <span className="label">Mentors</span>
//                 <div className="mentorIcons">
//                   👤👤👤
//                 </div>
//                 <span className="count">+{course.mentors}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
  
//   export default CourseCard;
  