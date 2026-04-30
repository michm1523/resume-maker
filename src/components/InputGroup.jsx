import "../styles/InputGroup.css";

function InputGroup({ type, name, id, placeholder, value = "", handleChange }) {
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

export default InputGroup;
