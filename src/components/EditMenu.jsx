import "../styles/EditMenu.css";
import { useState } from "react";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";

function EditMenu({ type, open, info, handleDrop, handleChange }) {
  const [form, setForm] = useState({
    open: false,
    index: -1,
    initialInfo: {},
  });

  return open ? (
    <div className="edit-menu edit-menu-open">
      {type == "education" ? (
        <h2 onClick={handleDrop}>
          Education
          <ion-icon name="chevron-up-outline"></ion-icon>
        </h2>
      ) : (
        <h2 onClick={handleDrop}>
          Experience
          <ion-icon name="chevron-up-outline"></ion-icon>
        </h2>
      )}

      {form.open ? (
        Object.keys(form.initialInfo).length == 0 ? (
          type == "education" ? (
            <EducationForm
              info={info[form.index]}
              handleCancel={() => {
                handleChange(-1, form.initialInfo);
                setForm({ open: false, index: -1, initialInfo: {} });
              }}
              handleSave={() => {
                setForm({ open: false, index: -1, initialInfo: {} });
              }}
              handleChange={(event) => {
                handleChange(form.index, {
                  ...info[form.index],
                  [event.target.name]: event.target.value,
                });
              }}
            />
          ) : (
            <ExperienceForm
              info={info[form.index]}
              handleCancel={() => {
                handleChange(-1, form.initialInfo);
                setForm({ open: false, index: -1, initialInfo: {} });
              }}
              handleSave={() => {
                setForm({ open: false, index: -1, initialInfo: {} });
              }}
              handleChange={(event) => {
                handleChange(form.index, {
                  ...info[form.index],
                  [event.target.name]: event.target.value,
                });
              }}
            />
          )
        ) : type == "education" ? (
          <EducationForm
            info={info[form.index]}
            handleCancel={() => {
              handleChange(form.index, form.initialInfo);
              setForm({ open: false, index: -1, initialInfo: {} });
            }}
            handleSave={() => {
              setForm({ open: false, index: -1, initialInfo: {} });
            }}
            handleChange={(event) => {
              handleChange(form.index, {
                ...info[form.index],
                [event.target.name]: event.target.value,
              });
            }}
            handleDelete={() => {
              handleChange(form.index, {});
              setForm({ open: false, index: -1, initialInfo: {} });
            }}
          />
        ) : (
          <ExperienceForm
            info={info[form.index]}
            handleCancel={() => {
              handleChange(form.index, form.initialInfo);
              setForm({ open: false, index: -1, initialInfo: {} });
            }}
            handleSave={() => {
              setForm({ open: false, index: -1, initialInfo: {} });
            }}
            handleChange={(event) => {
              handleChange(form.index, {
                ...info[form.index],
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
            {info.map((item, index) => {
              return (
                <li
                  onClick={() => {
                    setForm({
                      ...form,
                      open: true,
                      index: index,
                      initialInfo: info[index],
                    });
                  }}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
          <div
            className="add-menu"
            onClick={() => {
              setForm({
                ...form,
                open: true,
                index: info.length,
                initialInfo: {},
              });
              handleChange(info.length, {});
            }}
          >
            {type == "education" ? (
              <button>Add education</button>
            ) : (
              <button>Add experience</button>
            )}
          </div>
        </>
      )}
    </div>
  ) : (
    <div className="edit-menu">
      {type == "education" ? (
        <h2 onClick={handleDrop}>
          Education <ion-icon name="chevron-down-outline"></ion-icon>
        </h2>
      ) : (
        <h2 onClick={handleDrop}>
          Experience <ion-icon name="chevron-down-outline"></ion-icon>
        </h2>
      )}
    </div>
  );
}

export default EditMenu;
