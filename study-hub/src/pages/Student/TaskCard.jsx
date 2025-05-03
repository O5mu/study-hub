import timeIcon from "../../assets/time-icon.png";
import useApi from '../../hooks/useAPI.js';

function TaskCard(){

    const { data: courses, loading, error } = useApi('courses');
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return(
                    <div className="tasks-page">
                        <h1 className="page-title">Tasks</h1>
                        <div className="card-container">
                            {courses.map((course,index) => (
                                <div className="task-card" key={index}>
                                    <div className="task-header">
                                        <div className="task-course">{course.name}</div>
                                        <div classNAme="task-title">{course.description}</div>
                                    </div>
                                    <div className="task-stats">
                                        <div className="stat-item">
                                            <div className="stat-content">
                                            <img src={timeIcon} alt="Time" className="stat-icon" />
                                            <span className="stat-value">{course.moderatorsCount} Left</span>
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