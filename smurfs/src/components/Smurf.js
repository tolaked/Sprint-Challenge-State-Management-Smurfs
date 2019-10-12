import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs, prepopulate, removeSmurf } from "../state/actionCreator";
import styled from "styled-components";

const Smurf = props => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  const mySmurfs = props.smurfs;

  return (
    <StyledDiv>
      {mySmurfs.map(char => (
        <div key={char.id}>
          {<h5>Name:{char.name}</h5>}
          <p>Age: {char.age}</p>
          <p>Height: {char.height}</p>
          <button onClick={id => props.prepopulate(char)}>Edit</button>
          <button onClick={id => props.removeSmurf(char.id)}>Delete</button>
        </div>
      ))}
    </StyledDiv>
  );
};

export default connect(
  state => ({ smurfs: state.smurfs }),
  dispatch => ({
    fetchSmurfs: () => dispatch(fetchSmurfs()),
    prepopulate: values => dispatch(prepopulate(values)),
    removeSmurf: data => dispatch(removeSmurf(data))
  })
)(Smurf);

const StyledDiv = styled.div`
  display: flex;
`;

const styledDiv = styled.div``;
