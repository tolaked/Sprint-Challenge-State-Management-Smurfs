import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../state/actionCreator";

const SmurfForm = () => {
  const [formvalues, setFormValues] = useState({
    name: "",
    age: "",
    height: ""
  });

  const inputChange = (field, value) => {
    setFormValues({
      ...formvalues,
      [field]: value
    });
  };

  const handleAddSmurf = () => {
    const newSmurf = {
      name: formvalues.name,
      height: formvalues.height,
      age: parseInt(formvalues.age, 10)
    };
  };

  return (
    <form>
      <label htmlFor="name">name</label>
      <input
        value={formvalues.name}
        name="name"
        placeholder="Enter Smurf name..."
        inputChange={inputChange}
        type="text"
      />
      <br />
      <label htmlFor="age">Age</label>
      <input
        value={formvalues.age}
        name="age"
        placeholder="Enter Smurf age..."
        inputChange={inputChange}
        type="text"
      />
      <br />
      <label htmlFor="height">Height</label>
      <input
        value={formvalues.height}
        name="height"
        placeholder="Enter Smurf height..."
        inputChange={inputChange}
        type="text"
      />
    </form>
  );
};

export default SmurfForm;
