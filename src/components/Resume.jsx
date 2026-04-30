import "../styles/Resume.css";
import html2pdf from "html2pdf.js";

function Resume({ personalInfo, education, experience }) {
  return (
    <div
      className="resume"
      onClick={() => {
        const opt = {
          margin: 0,
          filename: "resume.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 4, width: 600, height: 776 },
          jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        };

        const resume = document.querySelector(".resume");
        html2pdf().set(opt).from(resume).save();
      }}
    >
      <div className="resume-container">
        <div className="title-section">
          <h1>{personalInfo.name}</h1>
          <p>
            {personalInfo.phone} | {personalInfo.email} |{" "}
            {personalInfo.location}
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
      <div className="download">
        <p>Download</p>
        <ion-icon name="download-outline"></ion-icon>
      </div>
    </div>
  );
}

export default Resume;
