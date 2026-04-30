import PersonalDetails from "./components/PersonalDetails";
import Resume from "./components/Resume";
import EditEducation from "./components/EditEducation";
import EditMenu from "./components/EditMenu";
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

const tempExperience = [
  {
    name: "John's Pies",
    title: "Baker",
    start: "Feb. 2025",
    end: "Aug. 2025",
    location: "Toronto, ON",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam minus distinctio ut qui eveniet quam explicabo. Unde earum perferendis modi neque, ad ex atque.",
  },
  {
    name: "John's Software Company",
    title: "Junior Software Engineer",
    start: "Sep. 2025",
    end: "Present",
    location: "Toronto, ON",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam minus distinctio ut qui eveniet quam explicabo. Unde earum perferendis modi neque, ad ex atque.",
  },
];

function App() {
  const [personalInfo, setPersonalInfo] = useState(tempPersonalInfo);
  const [education, setEducation] = useState(tempEducation);
  const [experience, setExperience] = useState(tempExperience);
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

  function handleExperienceChange(index, info) {
    let newExperience = [...experience];
    if (index == experience.length) {
      newExperience.push(info);
    } else if (index == -1) {
      newExperience.pop();
    } else {
      newExperience[index] = info;
      if (Object.keys(info).length == 0) {
        newExperience.splice(index, 1);
        console.log("deleted");
      }
    }

    setExperience(newExperience);
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
              setExperience([]);
            }}
          >
            Clear Resume
          </button>
          <button
            className="load-btn"
            onClick={() => {
              setPersonalInfo(tempPersonalInfo);
              setEducation(tempEducation);
              setExperience(tempExperience);
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

        <EditMenu
          type="education"
          open={activeDrop == "education"}
          info={education}
          handleDrop={() => {
            if (activeDrop == "education") {
              setActiveDrop("");
            } else {
              setActiveDrop("education");
            }
          }}
          handleChange={handleEducationChange}
        />
        <EditMenu
          type="experience"
          open={activeDrop == "experience"}
          info={experience}
          handleDrop={() => {
            if (activeDrop == "experience") {
              setActiveDrop("");
            } else {
              setActiveDrop("experience");
            }
          }}
          handleChange={handleExperienceChange}
        />
      </div>

      <Resume
        personalInfo={personalInfo}
        education={education}
        experience={experience}
      />
    </div>
  );
}

export default App;
