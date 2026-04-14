import "../styles/Resume.css";

function Resume({ personalInfo }) {
  return (
    <div className="resume">
      <div className="title-section">
        <h1>{personalInfo.name}</h1>
        <p>
          {personalInfo.phone} | {personalInfo.email} | {personalInfo.location}
        </p>
      </div>
    </div>
  );
}

export default Resume;
