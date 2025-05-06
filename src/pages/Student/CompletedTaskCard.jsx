import timeIcon from "../../assets/time-icon.png";

function CompletedTaskCard(){
    const tasks = [
        {course:"COE202",title:"Home Work 1",time:"12 hours"},
        {course:"GS321",title:"Online Quiz",time:"1 week"},
        {course:"ICS253",title:"Home Assignment 2",time:"6 days"},
        {course:"SWE363",title:"Project (Phase 2)",time:"2 weeks"},
        
    ]
    return(
                    <div className="tasks-page">
                        <h1 className="page-title">Completed Tasks</h1>
                        <div className="card-container">
                            {tasks.map((task,index) => (
                                <div className="task-card" key={index}>
                                    <div className="task-header">
                                        <div className="task-course">{task.course}</div>
                                        <div classNAme="task-title">{task.title}</div>
                                    </div>
                                    <div className="task-stats">
                                        <div className="stat-item">
                                            <div className="stat-content">
                                            <img src={timeIcon} alt="Time" className="stat-icon" />
                                            <span className="stat-value">{task.time} Ago</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
    );
}
export default CompletedTaskCard;