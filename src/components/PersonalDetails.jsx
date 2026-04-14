import "../styles/PersonalDetails.css";
import InputGroup from "./InputGroup";

function PersonalDetails({ personalInfo, handleInfoChange }) {
  return (
    <div className="personal-details">
      <h2>Personal Details</h2>
      <div className="personal-details-inputs">
        <InputGroup
          type="text"
          name="Full name"
          placeholder="Full name"
          id="name"
          value={personalInfo.name}
          handleChange={handleInfoChange}
        />
        <InputGroup
          type="email"
          name="Email"
          id="email"
          placeholder="email@mail.com"
          value={personalInfo.email}
          handleChange={handleInfoChange}
        />
        <InputGroup
          type="text"
          name="Phone number"
          id="phone"
          placeholder="999-999-9999"
          value={personalInfo.phone}
          handleChange={handleInfoChange}
        />
        <InputGroup
          type="text"
          name="Location"
          id="location"
          placeholder="Toronto, ON"
          value={personalInfo.location}
          handleChange={handleInfoChange}
        />
      </div>
    </div>
  );
}

export default PersonalDetails;
