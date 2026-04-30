import "../styles/ExperienceForm.css";
import InputGroup from "./InputGroup";

function ExperienceForm({
  info,
  handleChange,
  handleCancel,
  handleSave,
  handleDelete,
}) {
  return (
    <form action="#" className="experience-form">
      <InputGroup
        type="text"
        name="name"
        placeholder="Enter company name"
        id="company-name"
        value={info.name}
        handleChange={handleChange}
      />
      <InputGroup
        type="text"
        name="title"
        placeholder="Enter position title"
        id="title"
        value={info.title}
        handleChange={handleChange}
      />
      <div className="start-end">
        <InputGroup
          type="text"
          name="start"
          placeholder="Enter start date"
          id="experience-start"
          value={info.start}
          handleChange={handleChange}
        />
        <InputGroup
          type="text"
          name="end"
          placeholder="Enter end date"
          id="experience-end"
          value={info.end}
          handleChange={handleChange}
        />
      </div>
      <InputGroup
        type="text"
        name="location"
        placeholder="Enter location"
        id="experience-location"
        value={info.location}
        handleChange={handleChange}
      />
      <InputGroup
        type="area"
        name="description"
        placeHolder="Enter description"
        id="experience-description"
        value={info.description}
        handleChange={handleChange}
      />
      <div className="experience-form-btn-group">
        <button className="cancel-experience" onClick={handleCancel}>
          Cancel
        </button>
        <button className="save-experience" onClick={handleSave}>
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

export default ExperienceForm;
