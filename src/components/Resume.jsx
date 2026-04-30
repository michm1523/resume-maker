import "../styles/Resume.css";

function Resume({ personalInfo, education, experience }) {
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
        <ul className="res-list">
          {education.map((ed) => {
            return (
              <li className="res-item">
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
      <div className="experience-section">
        <h2 className="section-title">Experience</h2>
        <ul className="res-list">
          {experience.map((exp) => {
            return (
              <li className="res-item">
                <div>
                  <h3>{exp.title}</h3>
                  <p>{exp.location}</p>
                </div>
                <div>
                  <p>{exp.name}</p>
                  <p>
                    {exp.start} - {exp.end}
                  </p>
                </div>
                <p className="res-description">{exp.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Resume;
