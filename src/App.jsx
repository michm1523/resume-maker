import PersonalDetails from "./components/PersonalDetails";
import Resume from "./components/Resume";
import "./styles/App.css";
import { useState } from "react";

const tempPersonalInfo = {
  name: "John Doe",
  email: "johndoe123@gmail.com",
  phone: "999-999-9999",
  location: "Toronto, ON",
};

function App() {
  const [personalInfo, setPersonalInfo] = useState(tempPersonalInfo);

  function handleInfoChange(attribute, value) {
    console.log(attribute + " " + value);
    setPersonalInfo({ ...personalInfo, [attribute]: value });
  }

  return (
    <div className="app">
      <div className="edit-resume">
        <div className="options">
          <button
            className="clear-btn"
            onClick={() => {
              setPersonalInfo({ name: "", email: "", phone: "", location: "" });
            }}
          >
            Clear Resume
          </button>
          <button
            className="load-btn"
            onClick={() => {
              setPersonalInfo(tempPersonalInfo);
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
      </div>
      <Resume personalInfo={personalInfo} />
    </div>
  );
}

export default App;
