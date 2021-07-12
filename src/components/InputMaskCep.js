import React from "react";
import InputMask from "react-input-mask";

const InputMaskCep = ({ cep, onChange }) => (
  <InputMask mask="99999-999" className="form-control" value={cep} onChange={onChange} />
);

export default InputMaskCep;