import React from "react";
import { Link } from "react-router-dom";  // Import Link from React Router
import "./ModeratorSidebar.jsx";  // Correct CSS import

function ModeratorSidebar() {
  return (
    <div className="sidebar">
      <div className="user-name">Osama Al-Bassam</div>

      <ul className="nav-links">
        {/* Use Link to navigate between pages */}
        <li className="active">
          <Link to="/moderator">🏠 Home</Link>  {/* Link to Moderator Home page */}
        </li>
        <li>
          <Link to="/moderator/add-resources">📚 Add Resources</Link>  {/* Link to Add Resources page */}
        </li>
        <li>
          <Link to="/moderator/approve-resources">📥 Approve Resources</Link>  {/* Link to Approve Resources page */}
        </li>
      </ul>

      <div className="help-center">
        <div className="help-icon">❓</div>
        <div>
          <strong>Help Center</strong>
          <p>Having Trouble in Uploading?<br />Please contact us now</p>
          <button className="help-btn">Go to Help Center</button>
        </div>
      </div>
    </div>
  );
}

export default ModeratorSidebar;
