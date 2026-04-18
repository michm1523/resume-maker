import "../styles/EducationForm.css";
import InputGroup from "./InputGroup";

function EducationForm({ info, handleChange, handleCancel, handleSave }) {
  return (
    <form action="#">
      <InputGroup
        type="text"
        name="School"
        placeholder="Enter name of school"
        id="school-name"
        value={info.name}
      />
      <InputGroup
        type="text"
        name="Degree"
        placeholder="Enter degree"
        id="degree"
        value={info.degree}
      />
      <div className="start-end">
        <InputGroup
          type="text"
          name="Start Date"
          placeholder="Enter start date"
          id="education-start"
          value={info.start}
        />
        <InputGroup
          type="text"
          name="End Date"
          placeholder="Enter end date"
          id="education-end"
          value={info.end}
        />
      </div>
      <InputGroup
        type="text"
        name="Location"
        placeholder="Enter location"
        id="education-location"
        value={info.location}
      />
      <div className="education-form-btn-group">
        <button className="cancel-education" onClick={handleCancel}>
          Cancel
        </button>
        <button className="save-education">Save</button>
      </div>
    </form>
  );
}

export default EducationForm;
