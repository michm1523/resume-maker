import "../styles/EditEducation.css";
import { useState } from "react";
import EducationForm from "./EducationForm";

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
            handleSave={() => {
              setForm({ open: false, index: -1, initialInfo: {} });
            }}
            handleChange={(event) => {
              handleChange(form.index, {
                ...education[form.index],
                [event.target.name]: event.target.value,
              });
            }}
          />
        ) : (
          <EducationForm
            info={education[form.index]}
            handleCancel={() => {
              handleChange(form.index, form.initialInfo);
              setForm({ open: false, index: -1, initialInfo: {} });
            }}
            handleSave={() => {
              setForm({ open: false, index: -1, initialInfo: {} });
            }}
            handleChange={(event) => {
              handleChange(form.index, {
                ...education[form.index],
                [event.target.name]: event.target.value,
              });
            }}
            handleDelete={() => {
              handleChange(form.index, {});
              setForm({ open: false, index: -1, initialInfo: {} });
            }}
          />
        )
      ) : (
        <>
          <ul>
            {education.map((info, index) => {
              return (
                <li
                  onClick={() => {
                    setForm({
                      ...form,
                      open: true,
                      index: index,
                      initialInfo: education[index],
                    });
                  }}
                >
                  {info.name}
                </li>
              );
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
