import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs, prepopulate, deleteSmurf } from "../state/actionCreator";
import styled from "styled-components";

const Smurf = props => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  const mySmurfs = props.smurfs;
  console.log("this is", mySmurfs);

  return (
    <StyledDiv>
      {mySmurfs.map(char => (
        <div key={char.id}>
          {<h5>Name:{char.name}</h5>}
          <p>Age: {char.age}</p>
          <p>Height: {char.height}</p>
          <button onClick={() => props.prepopulate(char)}>Edit</button>
          <button onClick={() => props.deleteSmurf(char)}>Delete</button>
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
    deleteSmurf: data => dispatch(deleteSmurf(data))
  })
)(Smurf);

const StyledDiv = styled.div`
  display: flex;
`;

const styledDiv = styled.div``;
