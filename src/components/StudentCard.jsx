import personIcon from '../assets/person-icon.png';
import courseIcon from '../assets/course-icon.png';
function StudentCard(){
    const students = [
        {name:"Muhammad AlMuhammad",numOfCourses:3},
        {name:"Faisal AlSulami",numOfCourses:4},
        {name:"Osama AlBassam",numOfCourses:5}
    ]
    return ( 
    <div>
        <h1>Students</h1>
        {students.map((student,index) => (
        <div className= "studentCard">
        <img src={personIcon} alt="person icon"></img>
        <h2>{student.name}</h2>
        <h3>Student</h3>
        <img src={courseIcon} alt="course icon"></img>
        <p>{student.numOfCourses} Courses</p>
        </div>
        ))}
    </div>
    );
}
export default StudentCard;