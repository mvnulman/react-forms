import { useState } from "react";
import "../FormInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false)
  const { label, errorMessage, onChange, id, ...InputProps} = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...InputProps} 
      onChange={onChange} 
      onBlur={handleFocus} 
      onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
      focused={focused.toString()}/>
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
