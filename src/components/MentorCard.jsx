import personIcon from "../assets/person-icon.png";
import courseIcon from "../assets/course-icon.png";
import starIcon from "../assets/star-icon.png";
function MentorCard(){
    const mentors =[
        {name:"Muhammad Al Muhammad",numOfCourses:3,rating:3.7},
        {name:"Hussam Maslmani ",numOfCourses:2,rating:4.2},
        {name:"Osama Al Bassam",numOfCourses:4,rating:4.5},
    ]
    return(
    <div>
        <h1>Moderators</h1>
        {mentors.map((mentor,index) => (
            <div>
                <img src={personIcon} alt="person icon"/>
                <h2>{mentor.name}</h2>
                <h3>Mentor</h3>
                <img src={courseIcon} alt="course icon"/>
                <p>{mentor.numOfCourses} Courses</p>
                <img src={starIcon} alt="star icon"/>
                <p>{mentor.rating}</p>
            </div>
        ))}

    </div>
    )
}
export default MentorCard;