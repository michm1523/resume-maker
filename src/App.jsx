import PersonalDetails from "./components/PersonalDetails";
import Resume from "./components/Resume";
import EditEducation from "./components/EditEducation";
import "./styles/App.css";
import { useState } from "react";

const tempPersonalInfo = {
  name: "John Doe",
  email: "johndoe123@gmail.com",
  phone: "999-999-9999",
  location: "Toronto, ON",
};

const tempEducation = [
  {
    name: "University of Toronto",
    degree: "Bachelors in Computer Science",
    start: "Sept. 2025",
    end: "Apr. 2029",
    location: "Toronto, ON",
  },
  {
    name: "Fake University",
    degree: "Bachelors in Economics",
    start: "Sept. 2025",
    end: "Apr. 2029",
    location: "Toronto, ON",
  },
];

function App() {
  const [personalInfo, setPersonalInfo] = useState(tempPersonalInfo);
  const [education, setEducation] = useState(tempEducation);
  const [activeDrop, setActiveDrop] = useState("");

  function handleInfoChange(attribute, value) {
    setPersonalInfo({ ...personalInfo, [attribute]: value });
  }

  function handleEducationChange(index, info) {
    let newEducation = [...education];
    if (index == education.length) {
      newEducation.push(info);
    } else if (index == -1) {
      newEducation.pop();
    } else {
      newEducation[index] = info;
      if (Object.keys(info).length == 0) {
        newEducation.splice(index, 1);
        console.log("deleted");
      }
    }

    setEducation(newEducation);
  }

  return (
    <div className="app">
      <div className="edit-resume">
        <div className="options">
          <button
            className="clear-btn"
            onClick={() => {
              setPersonalInfo({ name: "", email: "", phone: "", location: "" });
              setEducation([]);
            }}
          >
            Clear Resume
          </button>
          <button
            className="load-btn"
            onClick={() => {
              setPersonalInfo(tempPersonalInfo);
              setEducation(tempEducation);
            }}
          >
            Load Template
          </button>
        </div>
        <PersonalDetails
          personalInfo={personalInfo}
          handleInfoChange={(event) => {
            handleInfoChange(event.target.id, event.target.value);
          }}
        />
        {activeDrop === "education" ? (
          <EditEducation
            open={open}
            education={education}
            handleDrop={() => {
              setActiveDrop("");
            }}
            handleChange={handleEducationChange}
          />
        ) : (
          <EditEducation
            open={false}
            education={education}
            handleDrop={() => {
              setActiveDrop("education");
            }}
          />
        )}
      </div>

      <Resume personalInfo={personalInfo} education={education} />
    </div>
  );
}

export default App;
