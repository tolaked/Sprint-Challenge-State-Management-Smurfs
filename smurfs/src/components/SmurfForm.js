import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
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
    <StyledForm onSubmit={e => handleAddSmurf(e)}>
      <StyledLabel htmlFor="name">name</StyledLabel>
      <br />
      <StyedInput
        value={formvalues.name}
        name="name"
        placeholder="Enter Smurf name..."
        onChange={inputChange}
        type="text"
      />
      <br />
      <StyledLabel htmlFor="age">Age</StyledLabel>
      <br />
      <StyedInput
        value={formvalues.age}
        name="age"
        placeholder="Enter Smurf age..."
        onChange={inputChange}
        type="text"
      />
      <br />
      <StyledLabel htmlFor="height">Height</StyledLabel>
      <br />
      <StyedInput
        value={formvalues.height}
        name="height"
        placeholder="Enter Smurf height..."
        onChange={inputChange}
        type="text"
      />
      <br />
      <button>Add</button>
    </StyledForm>
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

const StyedInput = styled.input`
  margin-bottom: 10px;
`;

const StyledLabel = styled.label``;

const StyledForm = styled.form``;
