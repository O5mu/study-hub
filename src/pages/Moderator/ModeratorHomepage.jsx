import React, { useState, useEffect } from "react";
import "../../components/Moderator.css";  // Correct CSS import
import ModeratorSidebar from "../../components/ModeratorSidebar";

function ModeratorHomepage() {
  // Simulate dynamic requested uploads
  const [requestedUploads, setRequestedUploads] = useState([]);

  useEffect(() => {
    // Simulate API call to get requested uploads
    setRequestedUploads([
      { id: 1, course: "SWE 363", fileName: "Exercise Questions.pdf", size: "1.3 MB", uploader: "Ibrahim Al-Dhafeer" }
    ]);
  }, []);

  // Handle Approve action
  const handleApprove = (id) => {
    console.log(`Upload ${id} approved!`);
  };

  // Handle Reject action
  const handleReject = (id) => {
    console.log(`Upload ${id} rejected!`);
  };

  // Handle sidebar navigation clicks
  const handleNavClick = (section) => {
    console.log(`Navigating to ${section}`);
    // Add logic for navigation (e.g., using React Router if needed)
    // navigate(`/path-to-${section}`);
  };

  return (
    <div className="container">
      <ModeratorSidebar onNavClick={handleNavClick} />
      <div className="main-content">
        <div className="header">
          <h2>Home</h2>
        </div>

        <div className="upload-section">
          <h3>Requested Upload List</h3>
          {requestedUploads.length === 0 ? (
            <div className="upload-box">No requested upload</div>
          ) : (
            requestedUploads.map((upload) => (
              <div key={upload.id} className="upload-box">
                <div>
                  <h4>{upload.course}</h4>
                  <p>{upload.fileName} - {upload.size}</p>
                  <p>From {upload.uploader}</p>
                  <div className="buttons">
                    <button className="btn approve" onClick={() => handleApprove(upload.id)}>Approve</button>
                    <button className="btn reject" onClick={() => handleReject(upload.id)}>Reject</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="courses-section">
          <h3>Associated Courses</h3>
          <div className="courses">
            <div className="course-card">
              <h4 className="course-code green">SWE 363</h4>
              <p>Web Engineering & Development</p>
              <p>📦 1.34 GB</p>
              <div className="buttons">
                <button className="btn upload">⬆ Upload</button>
                <button className="btn edit">✏️ Edit</button>
              </div>
            </div>
            <div className="course-card">
              <h4 className="course-code green">ICS 344</h4>
              <p>Information Security</p>
              <p>📦 880.43 MB</p>
              <div className="buttons">
                <button className="btn upload">⬆ Upload</button>
                <button className="btn edit">✏️ Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModeratorHomepage;
