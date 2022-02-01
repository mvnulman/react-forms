import React from "react";
import "../FormInput.css";

const FormInput = (props) => {
  const { label, onChange, id, ...InputProps} = props;
  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...InputProps} onChange={onChange}/>
    </div>
  );
};

export default FormInput;
