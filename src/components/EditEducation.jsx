import "../styles/EditEducation.css";
import { useState } from "react";
import EducationForm from "./EducationForm";
import InputGroup from "./InputGroup";

function EditEducation({ open, education, handleDrop, handleChange }) {
  const [form, setForm] = useState({
    open: false,
    index: -1,
    initialInfo: {},
  });

  return open ? (
    <div className="edit-education edit-education-open">
      <h2 onClick={handleDrop}>
        Education<ion-icon name="chevron-up-outline"></ion-icon>
      </h2>
      {form.open ? (
        Object.keys(form.initialInfo).length == 0 ? (
          <EducationForm
            info={education[form.index]}
            handleCancel={() => {
              handleChange(-1, form.initialInfo);
              setForm({ open: false, index: -1, initialInfo: {} });
            }}
          />
        ) : (
          <EducationForm
            info={education[form.index]}
            handleCancel={() => {
              handleChange(form.index, form.initialInfo);
              setForm({ open: false, index: -1, initialInfo: {} });
            }}
          />
        )
      ) : (
        <>
          <ul>
            {education.map((info) => {
              return <li>{info.name}</li>;
            })}
          </ul>
          <div
            className="add-education"
            onClick={() => {
              setForm({
                ...form,
                open: true,
                index: education.length,
                initialInfo: {},
              });
              handleChange(education.length, {});
            }}
          >
            <button>Add education</button>
          </div>
        </>
      )}
    </div>
  ) : (
    <div className="edit-education">
      <h2 onClick={handleDrop}>
        Education <ion-icon name="chevron-down-outline"></ion-icon>
      </h2>
    </div>
  );
}

export default EditEducation;
