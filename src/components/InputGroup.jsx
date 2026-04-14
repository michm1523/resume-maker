import "../styles/InputGroup.css";

function InputGroup({ type, name, id, placeholder, value, handleChange }) {
  return (
    <div className="input-group">
      <label htmlFor={id}>{name}</label>
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
