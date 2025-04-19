import './ModeratorCard.css';

function ModeratorCard({ moderator }) {
    return (
      <div className="moderator-card">
        <h3>{moderator.name}</h3>
        <p>Role: Moderator</p>
        <p>Courses: {moderator.courses+","}</p>
      </div>
    );
  }
  
  export default ModeratorCard;
  