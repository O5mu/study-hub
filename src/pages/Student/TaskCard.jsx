import timeIcon from "../../assets/time-icon.png";

function TaskCard(){
    const tasks = [
        {course:"SWE363",title:"Project (Phase 3)",time:"4 hours"},
        {course:"ICS253",title:"Home Assignment 4",time:"3 days"},
        {course:"COE202",title:"Home Work 2",time:"2 days"}
    ]
    return(
                    <div className="tasks-page">
                        <h1 className="page-title">Tasks</h1>
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
                                            <span className="stat-value">{task.time} Left</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
    );
}
export default TaskCard;