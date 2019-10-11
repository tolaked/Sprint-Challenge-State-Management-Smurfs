import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf, inputChange, updateSmurf } from "../state/actionCreator";

const SmurfForm = props => {
  const formvalues = props.formValues;

  const inputChange = e => {
    const { name, value } = e.target;
    props.inputChange({ name, value });
  };

  const handleAddSmurf = e => {
    e.preventDefault();
    if (formvalues.id !== null) {
      props.updateSmurf(formvalues);
    } else {
      const newSmurf = {
        name: formvalues.name,
        height: formvalues.height,
        age: parseInt(formvalues.age, 10)
      };
      props.addSmurf(newSmurf);
    }
  };

  return (
    <form onSubmit={e => handleAddSmurf(e)}>
      <label htmlFor="name">name</label>
      <input
        value={formvalues.name}
        name="name"
        placeholder="Enter Smurf name..."
        onChange={inputChange}
        type="text"
      />
      <br />
      <label htmlFor="age">Age</label>
      <input
        value={formvalues.age}
        name="age"
        placeholder="Enter Smurf age..."
        onChange={inputChange}
        type="text"
      />
      <br />
      <label htmlFor="height">Height</label>
      <input
        value={formvalues.height}
        name="height"
        placeholder="Enter Smurf height..."
        onChange={inputChange}
        type="text"
      />
      <button>Add</button>
    </form>
  );
};

export default connect(
  state => ({ formValues: state.form }),
  dispatch => ({
    addSmurf: smurfs => dispatch(addSmurf(smurfs)),
    inputChange: target => dispatch(inputChange(target)),
    updateSmurf: updatedSmurf => dispatch(updateSmurf(updatedSmurf))
  })
)(SmurfForm);
