import { Link } from 'react-router-dom';

function ModeratorSidebar() {
  return (
    <aside>
      <h3>Moderator</h3>
      <ul>
        <li><Link to="/moderator">Home</Link></li>
        <li><Link to="/approve-resources">Approve Resources</Link></li>
        <li><Link to="/add-resource">Add Resource</Link></li>
      </ul>
    </aside>
  );
}

export default ModeratorSidebar;
