import "../styles/Resume.css";

function Resume({ personalInfo, education }) {
  return (
    <div className="resume">
      <div className="title-section">
        <h1>{personalInfo.name}</h1>
        <p>
          {personalInfo.phone} | {personalInfo.email} | {personalInfo.location}
        </p>
      </div>
      <div className="education-section">
        <h2 className="section-title">Education</h2>
        <ul className="res-education-list">
          {education.map((ed) => {
            return (
              <li className="res-education-item">
                <div>
                  <h3>{ed.name}</h3>
                  <p>{ed.location}</p>
                </div>
                <div>
                  <p>{ed.degree}</p>
                  <p>
                    {ed.start} - {ed.end}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Resume;
