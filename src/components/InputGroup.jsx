import "../styles/InputGroup.css";

function InputGroup({ type, name, id, placeholder, value = "", handleChange }) {
  if (type == "area") {
    return (
      <div className="input-group">
        <label htmlFor={id}>
          {name[0].toUpperCase()}
          {name.substring(1, name.length)}
        </label>
        <textarea
          name={name}
          id={id}
          placeholder={placeholder}
          onChange={handleChange}
          rows={3}
          cols={30}
          value={value}
        ></textarea>
      </div>
    );
  } else {
    return (
      <div className="input-group">
        <label htmlFor={id}>
          {name[0].toUpperCase()}
          {name.substring(1, name.length)}
        </label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          id={id}
          value={value}
          onChange={handleChange}
        />
      </div>
    );
  }
}

export default InputGroup;
