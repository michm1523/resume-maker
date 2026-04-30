import "../styles/EducationForm.css";
import InputGroup from "./InputGroup";

function EducationForm({
  info,
  handleChange,
  handleCancel,
  handleSave,
  handleDelete,
}) {
  return (
    <form action="#" className="education-form">
      <InputGroup
        type="text"
        name="name"
        placeholder="Enter name of school"
        id="school-name"
        value={info.name}
        handleChange={handleChange}
      />
      <InputGroup
        type="text"
        name="degree"
        placeholder="Enter degree"
        id="degree"
        value={info.degree}
        handleChange={handleChange}
      />
      <div className="start-end">
        <InputGroup
          type="text"
          name="start"
          placeholder="Enter start date"
          id="education-start"
          value={info.start}
          handleChange={handleChange}
        />
        <InputGroup
          type="text"
          name="end"
          placeholder="Enter end date"
          id="education-end"
          value={info.end}
          handleChange={handleChange}
        />
      </div>
      <InputGroup
        type="text"
        name="location"
        placeholder="Enter location"
        id="education-location"
        value={info.location}
        handleChange={handleChange}
      />
      <div className="education-form-btn-group">
        <button className="cancel-education" onClick={handleCancel}>
          Cancel
        </button>
        <button className="save-education" onClick={handleSave}>
          Save
        </button>
        {handleDelete && (
          <button onClick={handleDelete}>
            <ion-icon name="trash-outline"></ion-icon>
          </button>
        )}
      </div>
    </form>
  );
}

export default EducationForm;
